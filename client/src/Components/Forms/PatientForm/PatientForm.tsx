import React, { useState } from 'react';
import { PatientFormData } from '../../Types/Registration';
import FormHeader from '../../Shared/FormHeader';
import PatientStep1 from './PatientStep1';
import PatientStep2 from './PatientStep2';
import PatientStep3 from './PatientStep3';

interface PatientFormProps {
  onSubmit: (data: PatientFormData) => void;
  onBack: () => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PatientFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    dateOfBirth: '',
    gender: '',
    aadharNumber: '',
    rationCardNumber: '',
    emergencyContact: '',
    emergencyPhone: '',
    bloodGroup: '',
    medicalHistory: ''
  });
  const [errors, setErrors] = useState<Partial<PatientFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof PatientFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<PatientFormData> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    } else if (step === 2) {
      if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar number is required';
      else if (!/^\d{12}$/.test(formData.aadharNumber.replace(/\s/g, ''))) newErrors.aadharNumber = 'Aadhar number must be 12 digits';
      if (!formData.rationCardNumber.trim()) newErrors.rationCardNumber = 'Ration card number is required';
      if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    } else if (step === 3) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      onSubmit(formData);
    }
  };

  const stepLabels = ['Personal Info', 'ID & Medical', 'Address & Emergency'];

  return (
    <>
      <FormHeader
        title="Patient Registration"
        subtitle="Create your patient account to access healthcare services"
        currentStep={currentStep}
        totalSteps={3}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <PatientStep1 
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <PatientStep2
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
              onBack={handlePrevious}
            />
          )}
          {currentStep === 3 && (
            <PatientStep3
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
              onBack={handlePrevious}
              onBackToSelection={onBack}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default PatientForm;