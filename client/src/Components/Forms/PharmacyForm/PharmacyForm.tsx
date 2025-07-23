import React, { useState } from 'react';
import { PharmacyFormData } from '../../Types/Registration';
import FormHeader from '../../Shared/FormHeader';
import PharmacyStep1 from './PharmacyStep1';
import PharmacyStep2 from './PharmacyStep2';

interface PharmacyFormProps {
  onSubmit: (data: PharmacyFormData) => void;
  onBack: () => void;
}

const PharmacyForm: React.FC<PharmacyFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PharmacyFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    pharmacyName: '',
    licenseNumber: '',
    gstNumber: '',
    operatingHours: '',
    deliveryService: false,
    insuranceAccepted: []
  });
  const [errors, setErrors] = useState<Partial<PharmacyFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof PharmacyFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<PharmacyFormData> = {};

    if (step === 1) {
      if (!formData.pharmacyName.trim()) newErrors.pharmacyName = 'Pharmacy name is required';
      if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
      if (!formData.gstNumber.trim()) newErrors.gstNumber = 'GST number is required';
      if (!formData.operatingHours.trim()) newErrors.operatingHours = 'Operating hours are required';
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

  const stepLabels = ['Pharmacy Details', 'Contact Information'];

  return (
    <>
      <FormHeader
        title="Pharmacy Registration"
        subtitle="Register your pharmacy in our healthcare network"
        currentStep={currentStep}
        totalSteps={2}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <PharmacyStep1
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <PharmacyStep2
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
              onBack={onBack}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default PharmacyForm;