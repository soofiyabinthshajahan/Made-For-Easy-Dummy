// DiagnosticForm.tsx
import React, { useState } from 'react';
import FormHeader from '../../Shared/FormHeader';
import { DiagnosticFormData } from '../../Types/Registration';
import DiagnosticStep1 from './DiagonisticStep1';
import DiagnosticStep2 from './DiagonisticStep2';

interface DiagnosticFormProps {
  onSubmit: (data: DiagnosticFormData) => void;
  onBack: () => void;
}

const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DiagnosticFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    centerName: '',
    licenseNumber: '',
    servicesOffered: [],
    equipmentDetails: '',
    reportDeliveryTime: '',
    homeCollection: false
  });
  const [errors, setErrors] = useState<Partial<DiagnosticFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof DiagnosticFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<DiagnosticFormData> = {};

    if (step === 1) {
      if (!formData.centerName.trim()) newErrors.centerName = 'Center name is required';
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
      if (!formData.reportDeliveryTime.trim()) newErrors.reportDeliveryTime = 'Report delivery time is required';
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

  const stepLabels = ['Center Details', 'Contact Information'];

  return (
    <>
      <FormHeader
        title="Diagnostic Center Registration"
        subtitle="Register your diagnostic center in our healthcare network"
        currentStep={currentStep}
        totalSteps={2}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <DiagnosticStep1 
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <DiagnosticStep2
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

export default DiagnosticForm;