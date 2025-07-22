import React, { useState } from 'react';
import { InsuranceFormData } from '../../Types/Registration';
import FormHeader from '../../Shared/FormHeader';
import InsuranceStep1 from './InsuranceStep1';
import InsuranceStep2 from './InsuranceStep2';

interface InsuranceFormProps {
  onSubmit: (data: InsuranceFormData) => void;
  onBack: () => void;
}

const InsuranceForm: React.FC<InsuranceFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<InsuranceFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    companyName: '',
    licenseNumber: '',
    typeOfInsurance: [],
    coverageArea: '',
    claimProcessTime: '',
    customerSupport: ''
  });
  const [errors, setErrors] = useState<Partial<InsuranceFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof InsuranceFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<InsuranceFormData> = {};

    if (step === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
      if (!formData.coverageArea.trim()) newErrors.coverageArea = 'Coverage area is required';
      if (!formData.claimProcessTime.trim()) newErrors.claimProcessTime = 'Claim process time is required';
    } else if (step === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Contact person first name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Contact person last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) {
      onSubmit(formData);
    }
  };

  const stepLabels = ['Company Details', 'Contact Information'];

  return (
    <>
      <FormHeader
        title="Insurance Provider Registration"
        subtitle="Register your insurance company in our healthcare network"
        currentStep={currentStep}
        totalSteps={2}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <InsuranceStep1
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <InsuranceStep2
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

export default InsuranceForm;