import React, { useState } from 'react';
import { Building2, MapPin, Award } from 'lucide-react';
import { HospitalFormData } from '../Types/Registration';
import FormHeader from '../Shared/FormHeader';
import SectionHeader from '../Shared/SectionHeader';
import HospitalDashboard from '../Hospital/HospitalDashboard';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  ButtonGroup,
  Button
} from '../Shared/StyledComponents';

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
    return (
      <HospitalDashboard 
        hospitalData={formData} 
        onLogout={handleLogout}
      />
    );
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
            <StepContainer direction="right">
              <SectionHeader icon={Building2} title="Hospital Information" />

              <InputGroup>
                <Label>Hospital Name</Label>
                <Input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  hasError={!!errors.hospitalName}
                  placeholder="Enter hospital name"
                />
                {errors.hospitalName && <ErrorMessage>{errors.hospitalName}</ErrorMessage>}
              </InputGroup>

              <GridContainer>
                <InputGroup>
                  <Label>Registration Number</Label>
                  <Input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    hasError={!!errors.registrationNumber}
                    placeholder="Hospital registration number"
                  />
                  {errors.registrationNumber && <ErrorMessage>{errors.registrationNumber}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Established Year</Label>
                  <Input
                    type="number"
                    name="establishedYear"
                    value={formData.establishedYear}
                    onChange={handleInputChange}
                    hasError={!!errors.establishedYear}
                    placeholder="Year established"
                    min="1800"
                    max={new Date().getFullYear()}
                  />
                  {errors.establishedYear && <ErrorMessage>{errors.establishedYear}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <GridContainer>
                <InputGroup>
                  <Label>Bed Capacity</Label>
                  <Input
                    type="number"
                    name="bedCapacity"
                    value={formData.bedCapacity}
                    onChange={handleInputChange}
                    hasError={!!errors.bedCapacity}
                    placeholder="Total bed capacity"
                    min="1"
                  />
                  {errors.bedCapacity && <ErrorMessage>{errors.bedCapacity}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Accreditation</Label>
                  <Select
                    name="accreditation"
                    value={formData.accreditation}
                    onChange={handleInputChange}
                    hasError={!!errors.accreditation}
                  >
                    <option value="">Select accreditation</option>
                    <option value="nabh">NABH</option>
                    <option value="nabl">NABL</option>
                    <option value="jci">JCI</option>
                    <option value="iso">ISO Certified</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.accreditation && <ErrorMessage>{errors.accreditation}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Website (Optional)</Label>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Hospital website URL"
                />
              </InputGroup>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1.5rem' }}>
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              </div>
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
                <Label>Hospital Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  hasError={!!errors.address}
                  placeholder="Enter hospital address"
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

export default HospitalForm;