import React, { useState } from 'react';
import { Shield, Phone, MapPin, Clock } from 'lucide-react';
import { InsuranceFormData } from '../Types/Registration';
import FormHeader from '../Shared/FormHeader';
import SectionHeader from '../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  ButtonGroup,
  ButtonContainer,
  Button
} from '../Shared/StyledComponents';

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
            <StepContainer direction="right">
              <SectionHeader icon={Shield} title="Company Information" />

              <InputGroup>
                <Label>Insurance Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  hasError={!!errors.companyName}
                  placeholder="Enter company name"
                />
                {errors.companyName && <ErrorMessage>{errors.companyName}</ErrorMessage>}
              </InputGroup>

              <GridContainer>
                <InputGroup>
                  <Label>License Number</Label>
                  <Input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    hasError={!!errors.licenseNumber}
                    placeholder="Insurance license number"
                  />
                  {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Coverage Area</Label>
                  <Select
                    name="coverageArea"
                    value={formData.coverageArea}
                    onChange={handleInputChange}
                    hasError={!!errors.coverageArea}
                  >
                    <option value="">Select coverage area</option>
                    <option value="local">Local/City</option>
                    <option value="state">State-wide</option>
                    <option value="national">National</option>
                    <option value="international">International</option>
                  </Select>
                  {errors.coverageArea && <ErrorMessage>{errors.coverageArea}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <GridContainer>
                <InputGroup>
                  <Label>Claim Process Time</Label>
                  <Select
                    name="claimProcessTime"
                    value={formData.claimProcessTime}
                    onChange={handleInputChange}
                    hasError={!!errors.claimProcessTime}
                  >
                    <option value="">Select processing time</option>
                    <option value="24-hours">24 Hours</option>
                    <option value="48-hours">48 Hours</option>
                    <option value="3-5-days">3-5 Days</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                  </Select>
                  {errors.claimProcessTime && <ErrorMessage>{errors.claimProcessTime}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Customer Support Hours</Label>
                  <Input
                    type="text"
                    name="customerSupport"
                    value={formData.customerSupport}
                    onChange={handleInputChange}
                    placeholder="e.g., 24/7 or 9 AM - 6 PM"
                  />
                </InputGroup>
              </GridContainer>

              <ButtonContainer>
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              </ButtonContainer>
            </StepContainer>
          )}

          {currentStep === 2 && (
            <StepContainer direction="left">
              <SectionHeader icon={MapPin} title="Contact Information" />

              <GridContainer>
                <InputGroup>
                  <Label>Contact Person First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    hasError={!!errors.firstName}
                    placeholder="Contact person's first name"
                  />
                  {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Contact Person Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    hasError={!!errors.lastName}
                    placeholder="Contact person's last name"
                  />
                  {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <GridContainer>
                <InputGroup>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    hasError={!!errors.email}
                    placeholder="Contact email address"
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    hasError={!!errors.phone}
                    placeholder="Contact phone number"
                  />
                  {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Company Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  hasError={!!errors.address}
                  placeholder="Enter company address"
                />
                {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
              </InputGroup>

              <GridContainer>
                <InputGroup>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    hasError={!!errors.city}
                    placeholder="Enter city"
                  />
                  {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>ZIP Code</Label>
                  <Input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    hasError={!!errors.zipCode}
                    placeholder="Enter ZIP code"
                  />
                  {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <ButtonGroup>
                <Button type="button" variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button type="button" variant="secondary" onClick={onBack}>
                    Back to Selection
                  </Button>
                  <Button type="submit" variant="success">
                    Complete Registration
                  </Button>
                </div>
              </ButtonGroup>
            </StepContainer>
          )}
        </form>
      </div>
    </>
  );
};

export default InsuranceForm;