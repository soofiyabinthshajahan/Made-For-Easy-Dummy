import React, { useState } from 'react';
import { Camera, Users, Clock, MapPin } from 'lucide-react';
import { ImagingFormData } from '../Types/Registration'; 
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
            <StepContainer direction="right">
              <SectionHeader icon={Camera} title="Center Information" />

              <InputGroup>
                <Label>Imaging Center Name</Label>
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
                    placeholder="Imaging center license number"
                  />
                  {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
                </InputGroup>

                <InputGroup>
                  <Label>Number of Radiologists</Label>
                  <Input
                    type="number"
                    name="radiologistCount"
                    value={formData.radiologistCount}
                    onChange={handleInputChange}
                    hasError={!!errors.radiologistCount}
                    placeholder="Number of certified radiologists"
                    min="1"
                  />
                  {errors.radiologistCount && <ErrorMessage>{errors.radiologistCount}</ErrorMessage>}
                </InputGroup>
              </GridContainer>

              <InputGroup>
                <Label>Report Turnaround Time</Label>
                <Select
                  name="reportTurnaroundTime"
                  value={formData.reportTurnaroundTime}
                  onChange={handleInputChange}
                  hasError={!!errors.reportTurnaroundTime}
                >
                  <option value="">Select turnaround time</option>
                  <option value="same-day">Same Day</option>
                  <option value="24-hours">24 Hours</option>
                  <option value="48-hours">48 Hours</option>
                  <option value="3-days">3 Days</option>
                  <option value="1-week">1 Week</option>
                </Select>
                {errors.reportTurnaroundTime && <ErrorMessage>{errors.reportTurnaroundTime}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label>Equipment Brands & Details</Label>
                <TextArea
                  name="equipmentBrands"
                  value={formData.equipmentBrands}
                  onChange={handleInputChange}
                  placeholder="List your imaging equipment brands and specifications (e.g., GE MRI 3T, Siemens CT Scanner, etc.)"
                />
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

export default ImagingForm;