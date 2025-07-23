import React from 'react';
import { MapPin } from 'lucide-react';
import { PharmacyFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonGroup,
  Button
} from '../../Shared/StyledComponents';

interface PharmacyStep2Props {
  formData: PharmacyFormData;
  errors: Partial<PharmacyFormData>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

const PharmacyStep2: React.FC<PharmacyStep2Props> = ({
  formData,
  errors,
  handleInputChange,
  onPrevious,
  onSubmit,
  onBack
}) => {
  return (
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
        <Label>Pharmacy Address</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          hasError={!!errors.address}
          placeholder="Enter pharmacy address"
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
        <Button type="button" variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button type="button" variant="secondary" onClick={onBack}>
            Back to Selection
          </Button>
          <Button type="submit" variant="success" onClick={onSubmit}>
            Complete Registration
          </Button>
        </div>
      </ButtonGroup>
    </StepContainer>
  );
};

export default PharmacyStep2;