import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, DollarSign, CreditCard, User, Users, Send, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplyPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    // Company Information
    legalEntityType: '',
    dateOfApplication: '',
    legalNameDBA: '',
    stateOfInception: '',
    federalTaxId: '',
    businessInceptionDate: '',
    physicalAddress: '',
    city: '',
    state: '',
    zipCode: '',
    businessPhone: '',
    businessEmail: '',
    businessWebsite: '',

    // Business Financial Information
    grossAnnualSales: '',
    averageMonthlySales: '',
    lastMonthSales: '',
    deposits: '',
    averageDailyBankBalance: '',
    businessBankInfo: '',

    // Cash Advance Information
    existingCashAdvances: '',
    balanceOfCurrentAdvances: '',
    fundingCompany: '',

    // Owner/Officer Information (1)
    owner1FirstName: '',
    owner1LastName: '',
    owner1Title: '',
    owner1DOB: '',
    owner1Ownership: '',
    owner1SSN: '',
    owner1Address: '',
    owner1City: '',
    owner1State: '',
    owner1Zip: '',
    owner1PrintName: '',
    owner1DateSigned: '',

    // Owner/Officer Information (2)
    owner2FirstName: '',
    owner2LastName: '',
    owner2Title: '',
    owner2DOB: '',
    owner2Ownership: '',
    owner2SSN: '',
    owner2Address: '',
    owner2City: '',
    owner2State: '',
    owner2Zip: '',
    owner2PrintName: '',
    owner2DateSigned: '',

    // Signature uploads
    owner1Signature: null,
    owner2Signature: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Accept any image file - validate by extension or MIME type
      const fileName = file.name.toLowerCase();
      const isValidImage = file.type.startsWith('image/') ||
        fileName.endsWith('.jpg') ||
        fileName.endsWith('.jpeg') ||
        fileName.endsWith('.png');

      if (isValidImage) {
        setFormData({
          ...formData,
          [e.target.name]: file
        });
      } else {
        alert('Please upload an image file (JPEG or PNG)');
        e.target.value = '';
      }
    }
  };

  // Validation function for each section
  const validateSection = (sectionId) => {
    // Section 2: Cash Advance - only require balance and funding company if user has existing advances
    const cashAdvanceFields = formData.existingCashAdvances === 'yes'
      ? ['existingCashAdvances', 'balanceOfCurrentAdvances', 'fundingCompany']
      : ['existingCashAdvances'];

    const requiredFields = {
      0: ['legalEntityType', 'dateOfApplication', 'legalNameDBA', 'stateOfInception', 'federalTaxId', 'businessInceptionDate', 'physicalAddress', 'city', 'state', 'zipCode', 'businessPhone', 'businessEmail', 'businessWebsite'],
      1: ['grossAnnualSales', 'averageMonthlySales', 'lastMonthSales', 'deposits', 'averageDailyBankBalance', 'businessBankInfo'],
      2: cashAdvanceFields,
      3: ['owner1FirstName', 'owner1LastName', 'owner1Title', 'owner1DOB', 'owner1Ownership', 'owner1SSN', 'owner1Address', 'owner1City', 'owner1State', 'owner1Zip', 'owner1PrintName', 'owner1DateSigned', 'owner1Signature'],
      // Section 4: Owner 2 is optional - no required fields
      4: [],
    };

    const fields = requiredFields[sectionId];
    const missingFields = [];

    fields.forEach(field => {
      if (!formData[field] || formData[field] === '') {
        missingFields.push(field);
      }
    });

    return missingFields;
  };

  const isSectionComplete = (sectionId) => {
    return validateSection(sectionId).length === 0;
  };

  const handleNextSection = () => {
    const missing = validateSection(currentSection);
    if (missing.length > 0) {
      setErrors(missing);
      alert('Please fill in all required fields before proceeding to the next section.');
      return;
    }
    setErrors([]);
    setCurrentSection(prev => Math.min(sections.length - 1, prev + 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const missing = validateSection(currentSection);
    if (missing.length > 0) {
      setErrors(missing);
      alert('Please fill in all required fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Create FormData to handle file uploads
      const submitData = new FormData();

      // Add all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'owner1Signature' && key !== 'owner2Signature') {
          submitData.append(key, formData[key]);
        }
      });

      // Add file uploads
      if (formData.owner1Signature) {
        submitData.append('owner1Signature', formData.owner1Signature);
      }
      if (formData.owner2Signature) {
        submitData.append('owner2Signature', formData.owner2Signature);
      }

      const response = await fetch('http://localhost:3001/api/submit-application', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Unable to connect to server. Please make sure the backend server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { id: 0, name: 'Company Information', icon: Building2 },
    { id: 1, name: 'Financial Information', icon: DollarSign },
    { id: 2, name: 'Cash Advance Info', icon: CreditCard },
    { id: 3, name: 'Owner/Officer Information 1', icon: User },
    { id: 4, name: 'Owner/Officer Information 2', icon: Users },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.3s ease',
    background: '#ffffff',
    color: '#1f2937',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#374151',
    fontSize: '0.875rem',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.02em',
  };

  const asteriskStyle = {
    color: '#ef4444',
    marginLeft: '4px',
    fontWeight: '600',
  };

  const fieldGroupStyle = {
    marginBottom: '24px',
  };

  // Helper function to render labels with asterisk
  const renderLabel = (text) => (
    <label style={labelStyle}>
      {text}<span style={asteriskStyle}>*</span>
    </label>
  );


  const renderCompanyInfo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={fieldGroupStyle}>
          {renderLabel("Legal Entity Type")}
          <input type="text" name="legalEntityType" value={formData.legalEntityType} onChange={handleChange} placeholder="Enter entity type" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Date of Application")}
          <input type="date" name="dateOfApplication" value={formData.dateOfApplication} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Legal Name & DBA")}
          <input type="text" name="legalNameDBA" value={formData.legalNameDBA} onChange={handleChange} placeholder="Enter legal name & DBA" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("State of Inception")}
          <input type="text" name="stateOfInception" value={formData.stateOfInception} onChange={handleChange} placeholder="Enter state" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Federal Tax ID")}
          <input type="text" name="federalTaxId" value={formData.federalTaxId} onChange={handleChange} placeholder="XX-XXXXXXX" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Business Inception Date")}
          <input type="date" name="businessInceptionDate" value={formData.businessInceptionDate} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={{ ...fieldGroupStyle, gridColumn: '1 / -1' }}>
          {renderLabel("Physical Address")}
          <input type="text" name="physicalAddress" value={formData.physicalAddress} onChange={handleChange} placeholder="Enter street address" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("City")}
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("State")}
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Zip Code")}
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Enter zip code" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Business Phone")}
          <input type="tel" name="businessPhone" value={formData.businessPhone} onChange={handleChange} placeholder="(XXX) XXX-XXXX" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Business Email")}
          <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="email@business.com" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Business Website")}
          <input type="url" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} placeholder="https://www.example.com" style={inputStyle} required />
        </div>
      </div>
    </motion.div>
  );

  const renderFinancialInfo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={fieldGroupStyle}>
          {renderLabel("Gross Annual Sales")}
          <input type="text" name="grossAnnualSales" value={formData.grossAnnualSales} onChange={handleChange} placeholder="$0.00" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Average Monthly Sales")}
          <input type="text" name="averageMonthlySales" value={formData.averageMonthlySales} onChange={handleChange} placeholder="$0.00" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Last Month Sales")}
          <input type="text" name="lastMonthSales" value={formData.lastMonthSales} onChange={handleChange} placeholder="$0.00" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Deposits (#)")}
          <input type="text" name="deposits" value={formData.deposits} onChange={handleChange} placeholder="Number of deposits" style={inputStyle} required />
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Average Daily Bank Balance")}
          <input type="text" name="averageDailyBankBalance" value={formData.averageDailyBankBalance} onChange={handleChange} placeholder="$0.00" style={inputStyle} required />
        </div>
        <div style={{ ...fieldGroupStyle, gridColumn: '1 / -1' }}>
          {renderLabel("Business Bank Info")}
          <input type="text" name="businessBankInfo" value={formData.businessBankInfo} onChange={handleChange} placeholder="Bank name and details" style={inputStyle} required />
        </div>
      </div>
    </motion.div>
  );

  const renderCashAdvanceInfo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={fieldGroupStyle}>
          {renderLabel("Any Existing Cash Advances?")}
          <select name="existingCashAdvances" value={formData.existingCashAdvances} onChange={handleChange} style={inputStyle} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div style={fieldGroupStyle}>
          {renderLabel("Balance of Current Advances")}
          <input type="text" name="balanceOfCurrentAdvances" value={formData.balanceOfCurrentAdvances} onChange={handleChange} placeholder="$0.00" style={inputStyle} required />
        </div>
        <div style={{ ...fieldGroupStyle, gridColumn: '1 / -1' }}>
          {renderLabel("Funding Company")}
          <input type="text" name="fundingCompany" value={formData.fundingCompany} onChange={handleChange} placeholder="Current funding company (if any)" style={inputStyle} required />
        </div>
      </div>
    </motion.div>
  );

  const renderOwnerInfo = (ownerNum) => {
    const prefix = `owner${ownerNum}`;
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={fieldGroupStyle}>
            {renderLabel("First Name")}
            <input type="text" name={`${prefix}FirstName`} value={formData[`${prefix}FirstName`]} onChange={handleChange} placeholder="Enter first name" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Last Name")}
            <input type="text" name={`${prefix}LastName`} value={formData[`${prefix}LastName`]} onChange={handleChange} placeholder="Enter last name" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Officer Title")}
            <input type="text" name={`${prefix}Title`} value={formData[`${prefix}Title`]} onChange={handleChange} placeholder="e.g., CEO, President" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Date of Birth")}
            <input type="date" name={`${prefix}DOB`} value={formData[`${prefix}DOB`]} onChange={handleChange} style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Business Ownership %")}
            <input type="text" name={`${prefix}Ownership`} value={formData[`${prefix}Ownership`]} onChange={handleChange} placeholder="e.g., 50%" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Social Security Number")}
            <input type="text" name={`${prefix}SSN`} value={formData[`${prefix}SSN`]} onChange={handleChange} placeholder="XXX-XX-XXXX" style={inputStyle} required />
          </div>
          <div style={{ ...fieldGroupStyle, gridColumn: '1 / -1' }}>
            {renderLabel("Home Address")}
            <input type="text" name={`${prefix}Address`} value={formData[`${prefix}Address`]} onChange={handleChange} placeholder="Enter home address" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("City")}
            <input type="text" name={`${prefix}City`} value={formData[`${prefix}City`]} onChange={handleChange} placeholder="Enter city" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("State")}
            <input type="text" name={`${prefix}State`} value={formData[`${prefix}State`]} onChange={handleChange} placeholder="Enter state" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Zip")}
            <input type="text" name={`${prefix}Zip`} value={formData[`${prefix}Zip`]} onChange={handleChange} placeholder="Enter zip code" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Print Name ({ownerNum})")}
            <input type="text" name={`${prefix}PrintName`} value={formData[`${prefix}PrintName`]} onChange={handleChange} placeholder="Print your name" style={inputStyle} required />
          </div>
          <div style={fieldGroupStyle}>
            {renderLabel("Date Application Signed")}
            <input type="date" name={`${prefix}DateSigned`} value={formData[`${prefix}DateSigned`]} onChange={handleChange} style={inputStyle} required />
          </div>
          <div style={{ ...fieldGroupStyle, gridColumn: '1 / -1' }}>
            {renderLabel("Signature (JPEG or PNG format)")}
            <input
              type="file"
              name={`${prefix}Signature`}
              onChange={handleFileChange}
              accept="image/*,.jpg,.jpeg,.png"
              style={{
                ...inputStyle,
                padding: '12px 18px',
                cursor: 'pointer'
              }}
            />
            {formData[`${prefix}Signature`] && (
              <p style={{
                marginTop: '8px',
                fontSize: '0.813rem',
                color: '#10b981',
                fontWeight: 500
              }}>
                âœ“ {formData[`${prefix}Signature`].name}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderCompanyInfo();
      case 1: return renderFinancialInfo();
      case 2: return renderCashAdvanceInfo();
      case 3: return renderOwnerInfo(1);
      case 4: return renderOwnerInfo(2);
      default: return renderCompanyInfo();
    }
  };

  if (isSubmitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
        padding: '20px',
      }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            padding: '60px',
            textAlign: 'center',
            maxWidth: '500px',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <CheckCircle size={40} color="#ffffff" />
          </motion.div>
          <h2 style={{
            fontSize: '2rem',
            color: '#0f172a',
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400
          }}>Application Submitted</h2>
          <p style={{
            color: '#64748b',
            fontSize: '1rem',
            marginBottom: '32px',
            lineHeight: '1.7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Thank you for your application. Our team will review your information and contact you within 24 hours.
          </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{
                backgroundColor: '#0ea5e9',
                color: '#ffffff',
                borderColor: '#0ea5e9'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'transparent',
                color: '#0ea5e9',
                border: '1px solid #0ea5e9',
                padding: '14px 32px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowLeft size={16} /> Return to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Header */}
      <header style={{
        background: '#ffffff',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.div whileHover={{ opacity: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={18} color="#64748b" />
              <span style={{ color: '#64748b', fontWeight: '400', fontSize: '0.875rem' }}>Back to Home</span>
            </motion.div>
          </Link>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.25rem',
            color: '#0f172a',
            fontWeight: 500
          }}>
            USBC Funding <span style={{ color: '#0ea5e9' }}>.</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '80px 48px',
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(186, 230, 253, 0.9)',
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Application
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#0f172a',
            fontWeight: 400,
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em'
          }}>
            Business Application Form
          </h1>
          <p style={{
            color: '#64748b',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Complete the form below to get started with your funding application
          </p>
        </motion.div>



        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#f9fafb',
            backdropFilter: 'blur(20px)',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '48px',
          }}
        >
          {/* Section Title */}
          <div style={{
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '20px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {(() => {
              const IconComponent = sections[currentSection].icon;
              return <IconComponent size={24} color="#f36f21" />;
            })()}
            <h2 style={{
              color: '#1f2937',
              fontSize: '1.25rem',
              fontWeight: 600,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}>
              {sections[currentSection].name}
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            {renderCurrentSection()}

            {/* Navigation Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              <motion.button
                type="button"
                onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                disabled={currentSection === 0}
                whileHover={{ borderColor: currentSection === 0 ? '#e5e7eb' : '#0d3b54' }}
                whileTap={{ scale: currentSection === 0 ? 1 : 0.98 }}
                style={{
                  padding: '14px 28px',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  background: 'transparent',
                  color: currentSection === 0 ? '#d1d5db' : '#6b7280',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: currentSection === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <ArrowLeft size={16} /> Previous
              </motion.button>

              {currentSection < sections.length - 1 ? (
                <motion.button
                  type="button"
                  onClick={handleNextSection}
                  whileHover={{
                    backgroundColor: '#082a3d',
                    transform: 'translateY(-1px)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '14px 28px',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#0d3b54',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.03em'
                  }}
                >
                  Next Section <ArrowRight size={16} />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : {
                    backgroundColor: '#d45a10',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 20px rgba(243, 111, 33, 0.4)'
                  }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  style={{
                    padding: '14px 32px',
                    borderRadius: '4px',
                    border: 'none',
                    background: isSubmitting ? '#9ca3af' : '#f36f21',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.03em',
                    boxShadow: isSubmitting ? 'none' : '0 4px 15px rgba(243, 111, 33, 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 size={16} />
                      </motion.div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Submit Application
                    </>
                  )}
                </motion.button>
              )}
            </div>

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                ⚠️ {submitError}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.8rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.05em'
          }}
        >
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            Your information is encrypted and secure
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default ApplyPage;
