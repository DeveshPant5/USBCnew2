
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { sendApplicationEmail } = require('./emailService');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG images are allowed'), false);
        }
    }
});

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Application submission endpoint
app.post('/api/submit-application',
    upload.fields([
        { name: 'owner1Signature', maxCount: 1 },
        { name: 'owner2Signature', maxCount: 1 }
    ]),
    async (req, res) => {
        try {
            console.log('📨 Received application submission');

            // Parse form data
            const formData = req.body;

            // Prepare attachments if files were uploaded
            const attachments = [];

            if (req.files) {
                if (req.files.owner1Signature && req.files.owner1Signature[0]) {
                    const file = req.files.owner1Signature[0];
                    attachments.push({
                        filename: `owner1_signature${path.extname(file.originalname)}`,
                        path: file.path
                    });
                    formData.owner1SignatureFile = file.originalname;
                }

                if (req.files.owner2Signature && req.files.owner2Signature[0]) {
                    const file = req.files.owner2Signature[0];
                    attachments.push({
                        filename: `owner2_signature${path.extname(file.originalname)}`,
                        path: file.path
                    });
                    formData.owner2SignatureFile = file.originalname;
                }
            }

            // Send email
            await sendApplicationEmail(formData, attachments);

            console.log('✅ Application email sent successfully');

            res.status(200).json({
                success: true,
                message: 'Application submitted successfully'
            });

        } catch (error) {
            console.error('❌ Error processing application:', error);

            res.status(500).json({
                success: false,
                message: 'Failed to submit application. Please try again.',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
);

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File size too large. Maximum 5MB allowed.'
            });
        }
    }

    console.error('Server error:', error);
    res.status(500).json({
        success: false,
        message: 'An unexpected error occurred'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🚀 USBC Email Server is running!                        ║
║                                                            ║
║   Local:  http://localhost:${PORT}                          ║
║   Health: http://localhost:${PORT}/api/health               ║
║                                                            ║
║   📧 Make sure to configure .env with your Gmail          ║
║      credentials before testing email functionality       ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
  `);
});
