import React, { useState } from 'react';
import { ImagingFormData } from '../../Types/Registration';
import FormHeader from '../../Shared/FormHeader';
import ImagingStep1 from './ImagingStep1';
import ImagingStep2 from './ImagingStep2';

interface ImagingFormProps {
  onSubmit: (data: ImagingFormData) => void;
  onBack: () => void;
}

const ImagingForm: React.FC<ImagingFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ImagingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    centerName: '',
    licenseNumber: '',
    imagingServices: [],
    equipmentBrands: '',
    radiologistCount: '',
    reportTurnaroundTime: ''
  });
  const [errors, setErrors] = useState<Partial<ImagingFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ImagingFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<ImagingFormData> = {};

    if (step === 1) {
      if (!formData.centerName.trim()) newErrors.centerName = 'Center name is required';
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
      if (!formData.radiologistCount.trim()) newErrors.radiologistCount = 'Radiologist count is required';
      if (!formData.reportTurnaroundTime.trim()) newErrors.reportTurnaroundTime = 'Report turnaround time is required';
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
        title="Imaging Center Registration"
        subtitle="Register your imaging center in our healthcare network"
        currentStep={currentStep}
        totalSteps={2}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <ImagingStep1
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <ImagingStep2
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

export default ImagingForm;