import React, { useState } from 'react';
import DoctorStep1 from './DoctorStep1';
import DoctorStep2 from './DoctorStep2';
import DoctorStep3 from './DoctorStep3';
import FormHeader from '../../Shared/FormHeader';

import { DoctorFormData } from '../../Types/Registration';
import { useNavigate } from 'react-router-dom';

interface DoctorFormProps {
  onSubmit: (data: DoctorFormData) => void;
  onBack?: () => void;
}

const DoctorForm: React.FC<DoctorFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Partial<DoctorFormData>>({});
  const [formData, setFormData] = useState<DoctorFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    specialization: '',
    experience: '',
    medicalLicense: '',
    hospitalAffiliation: '',
    consultationFee: '',
    availableHours: '',
    address: '',
    city: '',
    zipCode: ''
  });
const navigate=useNavigate()
  const stepLabels = ['Personal Info', 'Professional Details', 'Practice Information'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof DoctorFormData;
    
    setFormData((prev: DoctorFormData) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      setErrors((prev: Partial<DoctorFormData>) => ({ ...prev, [fieldName]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<DoctorFormData> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    } else if (step === 2) {
      if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
      if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
      if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
      if (!formData.medicalLicense.trim()) newErrors.medicalLicense = 'Medical license is required';
    } else if (step === 3) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
      if (!formData.consultationFee.trim()) newErrors.consultationFee = 'Consultation fee is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev: number) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      onSubmit(formData);
      navigate('/doctor/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      <FormHeader
        title="Doctor Registration"
        subtitle="Join our network of healthcare professionals"
        currentStep={currentStep}
        totalSteps={3}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        {currentStep === 1 && (
          <DoctorStep1 
            formData={formData} 
            errors={errors}
            onChange={handleInputChange} 
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <DoctorStep2 
            formData={formData} 
            errors={errors}
            onChange={handleInputChange} 
            onNext={handleNext}
            onBack={handlePrevious}
          />
        )}

        {currentStep === 3 && (
          <DoctorStep3 
            formData={formData} 
            errors={errors}
            onChange={handleInputChange} 
            onSubmit={handleSubmit}
            onBack={handlePrevious}
            onBackToLogin={onBack}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorForm;