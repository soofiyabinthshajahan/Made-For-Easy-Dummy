import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Award, Clock, MapPin } from 'lucide-react';
import { DoctorFormData } from '../Types/Registration';
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

const DoctorForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DoctorFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    qualification: '',
    specialization: '',
    experience: '',
    medicalLicense: '',
    hospitalAffiliation: '',
    consultationFee: '',
    availableHours: ''
  });
  const [errors, setErrors] = useState<Partial<DoctorFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof DoctorFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log('Doctor registered:', formData);
      // Navigate to dashboard after successful registration
      navigate('/doctor/dashboard');
    }
  };

  const handleBack = () => {
    navigate('/doctor/login');
  };

  const stepLabels = ['Personal Info', 'Professional Details', 'Practice Information'];

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
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <StepContainer direction="right">
              <SectionHeader icon={Stethoscope} title="Personal Information" />

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

              <ButtonContainer>
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              </ButtonContainer>
            </StepContainer>
          )}

          {currentStep === 2 && (
            <StepContainer direction="left">
              <SectionHeader icon={Award} title="Professional Qualifications" />

              <InputGroup>
                <Label>Medical Qualification</Label>
                <Input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  hasError={!!errors.qualification}
                  placeholder="e.g., MBBS, MD, MS"
                />
                {errors.qualification && <ErrorMessage>{errors.qualification}</ErrorMessage>}
              </InputGroup>

              <GridContainer>
                <InputGroup>
                  <Label>Specialization</Label>
                  <Select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    hasError={!!errors.specialization}
                  >
                    <option value="">Select specialization</option>
                    <option value="general-medicine">General Medicine</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="psychiatry">Psychiatry</option>
                    <option value="surgery">Surgery</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.specialization && <ErrorMessage>{errors.specialization}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Years of Experience</Label>
                  <Input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    hasError={!!errors.experience}
                    placeholder="Years of practice"
                    min="0"
                  />
                  {errors.experience && <ErrorMessage>{errors.experience}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Medical License Number</Label>
                <Input
                  type="text"
                  name="medicalLicense"
                  value={formData.medicalLicense}
                  onChange={handleInputChange}
                  hasError={!!errors.medicalLicense}
                  placeholder="Enter your medical license number"
                />
                {errors.medicalLicense && <ErrorMessage>{errors.medicalLicense}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label>Hospital Affiliation (Optional)</Label>
                <Input
                  type="text"
                  name="hospitalAffiliation"
                  value={formData.hospitalAffiliation}
                  onChange={handleInputChange}
                  placeholder="Current hospital or clinic affiliation"
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
              <SectionHeader icon={MapPin} title="Practice Information" />

              <InputGroup>
                <Label>Practice Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  hasError={!!errors.address}
                  placeholder="Enter your practice address"
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

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
                <SectionHeader icon={Clock} title="Consultation Details" />

                <GridContainer>
                  <InputGroup>
                    <Label>Consultation Fee (₹)</Label>
                    <Input
                      type="number"
                      name="consultationFee"
                      value={formData.consultationFee}
                      onChange={handleInputChange}
                      hasError={!!errors.consultationFee}
                      placeholder="Consultation fee"
                      min="0"
                    />
                    {errors.consultationFee && <ErrorMessage>{errors.consultationFee}</ErrorMessage>}
                  </InputGroup>

                  <InputGroup>
                    <Label>Available Hours</Label>
                    <Input
                      type="text"
                      name="availableHours"
                      value={formData.availableHours}
                      onChange={handleInputChange}
                      placeholder="e.g., 9 AM - 6 PM"
                    />
                  </InputGroup>
                </GridContainer>
              </div>

              <ButtonGroup>
                <Button type="button" variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button type="button" variant="secondary" onClick={handleBack}>
                    Back to Login
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
    </div>
  );
};

export default DoctorForm;