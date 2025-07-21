import React, { useState } from 'react';
import { Activity, Home, Clock, MapPin } from 'lucide-react';
import { DiagnosticFormData } from '../Types/Registration'; 
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
            <StepContainer direction="right">
              <SectionHeader icon={Activity} title="Center Information" />

              <InputGroup>
                <Label>Diagnostic Center Name</Label>
                <Input
                  type="text"
                  name="centerName"
                  value={formData.centerName}
                  onChange={handleInputChange}
                  hasError={!!errors.centerName}
                  placeholder="Enter center name"
                />
                {errors.centerName && <ErrorMessage>{errors.centerName}</ErrorMessage>}
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
                    placeholder="Diagnostic center license number"
                  />
                  {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Report Delivery Time</Label>
                  <Select
                    name="reportDeliveryTime"
                    value={formData.reportDeliveryTime}
                    onChange={handleInputChange}
                    hasError={!!errors.reportDeliveryTime}
                  >
                    <option value="">Select delivery time</option>
                    <option value="same-day">Same Day</option>
                    <option value="24-hours">24 Hours</option>
                    <option value="48-hours">48 Hours</option>
                    <option value="3-days">3 Days</option>
                    <option value="1-week">1 Week</option>
                  </Select>
                  {errors.reportDeliveryTime && <ErrorMessage>{errors.reportDeliveryTime}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Equipment Details</Label>
                <TextArea
                  name="equipmentDetails"
                  value={formData.equipmentDetails}
                  onChange={handleInputChange}
                  placeholder="Describe your diagnostic equipment and capabilities..."
                />
              </InputGroup>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
                <SectionHeader icon={Home} title="Services" />

                <InputGroup>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      name="homeCollection"
                      checked={formData.homeCollection}
                      onChange={handleInputChange}
                      style={{ 
                        width: '1.25rem', 
                        height: '1.25rem',
                        accentColor: 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    <Label style={{ margin: 0 }}>Home Sample Collection Available</Label>
                  </div>
                </InputGroup>
              </div>

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
                <Label>Center Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  hasError={!!errors.address}
                  placeholder="Enter center address"
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

export default DiagnosticForm;