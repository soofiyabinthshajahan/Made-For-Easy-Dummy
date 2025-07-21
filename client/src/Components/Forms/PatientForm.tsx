import React, { useState } from 'react';
import { User, MapPin, Shield, Heart } from 'lucide-react';
import { PatientFormData } from '../Types/Registration';
import FormHeader from '../Shared/FormHeader';
import SectionHeader from '../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  TextArea,
  ErrorMessage,
  ButtonGroup,
  ButtonContainer,
  Button
} from '../Shared/StyledComponents';

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
            <StepContainer direction="right">
              <SectionHeader icon={User} title="Personal Information" />

              <GridContainer>
                <InputGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    hasError={!!errors.firstName}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    hasError={!!errors.lastName}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  hasError={!!errors.email}
                  placeholder="Enter your email address"
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </InputGroup>

              <GridContainer>
                <InputGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    hasError={!!errors.phone}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    hasError={!!errors.dateOfBirth}
                  />
                  {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Gender</Label>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  hasError={!!errors.gender}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </Select>
                {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
              </InputGroup>

              <ButtonContainer>
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              </ButtonContainer>
            </StepContainer>
          )}

          {currentStep === 2 && (
            <StepContainer direction="left">
              <SectionHeader icon={Heart} title="ID & Medical Information" />

              <GridContainer>
                <InputGroup>
                  <Label>Aadhar Number</Label>
                  <Input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    hasError={!!errors.aadharNumber}
                    placeholder="Enter your Aadhar number"
                    maxLength={12}
                  />
                  {errors.aadharNumber && <ErrorMessage>{errors.aadharNumber}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Ration Card Number</Label>
                  <Input
                    type="text"
                    name="rationCardNumber"
                    value={formData.rationCardNumber}
                    onChange={handleInputChange}
                    hasError={!!errors.rationCardNumber}
                    placeholder="Enter your ration card number"
                  />
                  {errors.rationCardNumber && <ErrorMessage>{errors.rationCardNumber}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Blood,Group</Label>
                <Select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  hasError={!!errors.bloodGroup}
                >
                  <option value="">Select your blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </Select>
                {errors.bloodGroup && <ErrorMessage>{errors.bloodGroup}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label>Medical History (Optional)</Label>
                <TextArea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  placeholder="Any relevant medical history, allergies, or current medications..."
                />
              </InputGroup>

              <ButtonGroup>
                <Button type="button" variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              </ButtonGroup>
            </StepContainer>
          )}

          {currentStep === 3 && (
            <StepContainer direction="right">
              <SectionHeader icon={MapPin} title="Address Information" />

              <InputGroup>
                <Label>Street Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  hasError={!!errors.address}
                  placeholder="Enter your street address"
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
                    placeholder="Enter your city"
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
                    placeholder="Enter your ZIP code"
                  />
                  {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
                <SectionHeader icon={Shield} title="Emergency Contact" />

                <GridContainer>
                  <InputGroup>
                    <Label>Contact Name</Label>
                    <Input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      hasError={!!errors.emergencyContact}
                      placeholder="Emergency contact name"
                    />
                    {errors.emergencyContact && <ErrorMessage>{errors.emergencyContact}</ErrorMessage>}
                  </InputGroup>

                  <InputGroup>
                    <Label>Contact Phone</Label>
                    <Input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      hasError={!!errors.emergencyPhone}
                      placeholder="Emergency contact phone"
                    />
                    {errors.emergencyPhone && <ErrorMessage>{errors.emergencyPhone}</ErrorMessage>}
                  </InputGroup>
                </GridContainer>
              </div>

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

export default PatientForm;