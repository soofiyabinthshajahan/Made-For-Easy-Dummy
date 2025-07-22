import React, { useState } from 'react';
import { HospitalFormData } from '../../Types/Registration';
import FormHeader from '../../Shared/FormHeader';
import HospitalDashboard from '../../Hospital/HospitalDashboard';
import HospitalStep1 from './HospitalStep1';
import HospitalStep2 from './HospitalStep2';

interface HospitalFormProps {
  onSubmit: (data: HospitalFormData) => void;
  onBack: () => void;
}

const HospitalForm: React.FC<HospitalFormProps> = ({ onSubmit, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDashboard, setShowDashboard] = useState(false);
  const [formData, setFormData] = useState<HospitalFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    hospitalName: '',
    registrationNumber: '',
    establishedYear: '',
    bedCapacity: '',
    specializations: [],
    accreditation: '',
    website: ''
  });
  const [errors, setErrors] = useState<Partial<HospitalFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof HospitalFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<HospitalFormData> = {};

    if (step === 1) {
      if (!formData.hospitalName.trim()) newErrors.hospitalName = 'Hospital name is required';
      if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration number is required';
      if (!formData.establishedYear.trim()) newErrors.establishedYear = 'Established year is required';
      if (!formData.bedCapacity.trim()) newErrors.bedCapacity = 'Bed capacity is required';
      if (!formData.accreditation) newErrors.accreditation = 'Accreditation is required';
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
      setShowDashboard(true);
      onSubmit(formData);
    }
  };

  const handleLogout = () => {
    setShowDashboard(false);
    setCurrentStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      hospitalName: '',
      registrationNumber: '',
      establishedYear: '',
      bedCapacity: '',
      specializations: [],
      accreditation: '',
      website: ''
    });
  };

  if (showDashboard) {
    return <HospitalDashboard hospitalData={formData} onLogout={handleLogout} />;
  }

  const stepLabels = ['Hospital Details', 'Contact Information'];

  return (
    <>
      <FormHeader
        title="Hospital Registration"
        subtitle="Register your hospital in our healthcare network"
        currentStep={currentStep}
        totalSteps={2}
        stepLabels={stepLabels}
      />

      <div style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <HospitalStep1
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <HospitalStep2
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

export default HospitalForm;