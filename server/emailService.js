const nodemailer = require('nodemailer');

// Create transporter with Gmail SMTP
const createTransporter = () => {
  // Debug logging for environment variables
  console.log('📧 Email Configuration:');
  console.log('   HOST:', process.env.EMAIL_HOST || '❌ NOT SET');
  console.log('   PORT:', process.env.EMAIL_PORT || '❌ NOT SET');
  console.log('   USER:', process.env.EMAIL_USER || '❌ NOT SET');
  console.log('   PASS:', process.env.EMAIL_PASS ? `✅ SET (${process.env.EMAIL_PASS.length} chars)` : '❌ NOT SET');
  console.log('   FROM:', process.env.EMAIL_FROM || '❌ NOT SET');
  console.log('   TO:', process.env.EMAIL_TO || '❌ NOT SET');

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Format the form data into a readable HTML email
const formatEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0d3b54, #1a5f7a); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .section { background: #f9fafb; border: 1px solid #e5e7eb; margin: 20px 0; padding: 20px; border-radius: 8px; }
        .section-title { color: #0d3b54; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #f36f21; }
        .field { margin-bottom: 12px; }
        .field-label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { color: #1f2937; font-size: 14px; margin-top: 2px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏢 New Business Application</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">USBC Funding Application Submission</p>
        </div>

        <div class="section">
          <div class="section-title">📋 Company Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Legal Entity Type</div>
              <div class="field-value">${data.legalEntityType || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Date of Application</div>
              <div class="field-value">${data.dateOfApplication || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Legal Name & DBA</div>
              <div class="field-value">${data.legalNameDBA || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">State of Inception</div>
              <div class="field-value">${data.stateOfInception || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Federal Tax ID</div>
              <div class="field-value">${data.federalTaxId || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Inception Date</div>
              <div class="field-value">${data.businessInceptionDate || 'N/A'}</div>
            </div>
          </div>
          <div class="field" style="margin-top: 15px;">
            <div class="field-label">Physical Address</div>
            <div class="field-value">${data.physicalAddress || 'N/A'}, ${data.city || ''}, ${data.state || ''} ${data.zipCode || ''}</div>
          </div>
          <div class="grid" style="margin-top: 15px;">
            <div class="field">
              <div class="field-label">Business Phone</div>
              <div class="field-value">${data.businessPhone || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Email</div>
              <div class="field-value">${data.businessEmail || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Website</div>
              <div class="field-value">${data.businessWebsite || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">💰 Financial Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Gross Annual Sales</div>
              <div class="field-value">${data.grossAnnualSales || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Average Monthly Sales</div>
              <div class="field-value">${data.averageMonthlySales || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Last Month Sales</div>
              <div class="field-value">${data.lastMonthSales || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Number of Deposits</div>
              <div class="field-value">${data.deposits || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Average Daily Bank Balance</div>
              <div class="field-value">${data.averageDailyBankBalance || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Bank Info</div>
              <div class="field-value">${data.businessBankInfo || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">💳 Cash Advance Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Existing Cash Advances?</div>
              <div class="field-value">${data.existingCashAdvances || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Balance of Current Advances</div>
              <div class="field-value">${data.balanceOfCurrentAdvances || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Funding Company</div>
              <div class="field-value">${data.fundingCompany || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">👤 Owner/Officer #1</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${data.owner1FirstName || ''} ${data.owner1LastName || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Title</div>
              <div class="field-value">${data.owner1Title || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Date of Birth</div>
              <div class="field-value">${data.owner1DOB || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Ownership %</div>
              <div class="field-value">${data.owner1Ownership || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">SSN</div>
              <div class="field-value">${data.owner1SSN || 'N/A'}</div>
            </div>
          </div>
          <div class="field" style="margin-top: 15px;">
            <div class="field-label">Home Address</div>
            <div class="field-value">${data.owner1Address || 'N/A'}, ${data.owner1City || ''}, ${data.owner1State || ''} ${data.owner1Zip || ''}</div>
          </div>
          <div class="grid" style="margin-top: 15px;">
            <div class="field">
              <div class="field-label">Print Name</div>
              <div class="field-value">${data.owner1PrintName || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Date Signed</div>
              <div class="field-value">${data.owner1DateSigned || 'N/A'}</div>
            </div>
          </div>
          ${data.owner1SignatureFile ? `<div class="field" style="margin-top: 15px;"><div class="field-label">Signature</div><div class="field-value">📎 Attached: ${data.owner1SignatureFile}</div></div>` : ''}
        </div>

        <div class="section">
          <div class="section-title">👥 Owner/Officer #2</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${data.owner2FirstName || ''} ${data.owner2LastName || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Title</div>
              <div class="field-value">${data.owner2Title || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Date of Birth</div>
              <div class="field-value">${data.owner2DOB || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Ownership %</div>
              <div class="field-value">${data.owner2Ownership || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">SSN</div>
              <div class="field-value">${data.owner2SSN || 'N/A'}</div>
            </div>
          </div>
          <div class="field" style="margin-top: 15px;">
            <div class="field-label">Home Address</div>
            <div class="field-value">${data.owner2Address || 'N/A'}, ${data.owner2City || ''}, ${data.owner2State || ''} ${data.owner2Zip || ''}</div>
          </div>
          <div class="grid" style="margin-top: 15px;">
            <div class="field">
              <div class="field-label">Print Name</div>
              <div class="field-value">${data.owner2PrintName || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="field-label">Date Signed</div>
              <div class="field-value">${data.owner2DateSigned || 'N/A'}</div>
            </div>
          </div>
          ${data.owner2SignatureFile ? `<div class="field" style="margin-top: 15px;"><div class="field-label">Signature</div><div class="field-value">📎 Attached: ${data.owner2SignatureFile}</div></div>` : ''}
        </div>

        <div class="footer">
          <p>This application was submitted via the USBC Funding website.</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email with form data
const sendApplicationEmail = async (formData, attachments = []) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"USBC Funding" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `📋 New Application: ${formData.legalNameDBA || 'Business Application'}`,
    html: formatEmailHTML(formData),
    attachments: attachments,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendApplicationEmail };
