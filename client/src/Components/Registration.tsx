import React, { useState } from 'react';
import { UserType, FormData } from './Types/Registration';
import UserTypeSelection from './UserTypeSelection';
import PatientForm from './Forms/PatientForm/PatientForm';
import HospitalForm from './Forms/HospitalForm/HospitalForm';
import SuccessPage from './SuccessPage';
import DoctorForm from './Forms/DoctorForm/DoctorForm';
import LaboratoryForm from './Forms/LaboratoryForm/LaboratoryForm';

import {
  Container,
  FormContainer,
  SelectionContainer
} from './Shared/StyledComponents';
import PharmacyForm from './Forms/PharmacyForm/PharmacyForm';
import InsuranceForm from './Forms/InsuranceForm/InsuranceForm';
import DiagnosticForm from './Forms/DiagonisticForm/DiagonisticForm';
import ImagingForm from './Forms/ImagingForm/ImagingForm';

const Registration: React.FC = () => {
  const [selectedUserType, setSelectedUserType] = useState<UserType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSelectUserType = (type: UserType) => {
    setSelectedUserType(type);
  };

  const handleFormSubmit = (data: FormData) => {
    setSubmittedData(data);

    if (selectedUserType !== 'hospital') {
      setIsSubmitted(true);
    }

    console.log('Registration submitted:', data);
  };

  const handleBackToSelection = () => {
    setSelectedUserType(null);
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const handleRegisterAnother = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const renderForm = () => {
    if (!selectedUserType) return null;

    switch (selectedUserType) {
      case 'patient':
        return (
          <PatientForm
            onSubmit={handleFormSubmit}
            onBack={handleBackToSelection}
          />
        );
      case 'hospital':
        return (
          <HospitalForm
            onSubmit={handleFormSubmit}
            onBack={handleBackToSelection}
          />
        );
      case 'doctor':
        return(
          <DoctorForm
          onSubmit={handleFormSubmit}
          />
        )
      case 'pharmacy':
         return(
          <PharmacyForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
      case 'insurance':
         return(
          <InsuranceForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
      case 'diagnostic':
         return(
          <DiagnosticForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
      case 'imaging':
         return(
          <ImagingForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
      case 'radiology':
         return(
          <PharmacyForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
        case 'laboratory':
         return(
          <LaboratoryForm
          onSubmit={handleFormSubmit}
           onBack={handleBackToSelection}
          />
        )
        
        return (
          
        
          <div style={{ padding: '2rem', width: '100%', textAlign: 'center', color: 'white' }}>
            <h2>Form Coming Soon</h2>
            <p>The {selectedUserType} registration form is under development.</p>
            <button
              onClick={handleBackToSelection}
              style={{
                background: 'rgba(255, 255, 255, 0.075)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Back to Selection
            </button>
          </div>
          
        );
      default:
        return null;
    }
  };

  if (selectedUserType === 'hospital') {
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <FormContainer>
          {renderForm()}
        </FormContainer>
      </Container>
    );
  }

  if (isSubmitted && submittedData && selectedUserType) {
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <SuccessPage
          firstName={submittedData.firstName}
          userType={selectedUserType}
          onRegisterAnother={handleRegisterAnother}
        />
      </Container>
    );
  }

  return (
    <Container style={{ backgroundColor: '#000' }}>
      {!selectedUserType ? (
        <SelectionContainer>
          <UserTypeSelection onSelectType={handleSelectUserType} />
        </SelectionContainer>
      ) : (
        <FormContainer>
          {renderForm()}
        </FormContainer>
      )}
    </Container>
    
  );
};

export default Registration;
