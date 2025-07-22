// DiagnosticStep2.tsx
import React from 'react';
import { MapPin } from 'lucide-react';
import { DiagnosticFormData } from '../../Types/Registration';
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

interface DiagnosticStep2Props {
  formData: DiagnosticFormData;
  errors: Partial<DiagnosticFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  onBackToSelection: () => void;
}

const DiagnosticStep2: React.FC<DiagnosticStep2Props> = ({ 
  formData, 
  errors, 
  onChange, 
  onSubmit, 
  onBack, 
  onBackToSelection 
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            hasError={!!errors.zipCode}
            placeholder="Enter ZIP code"
          />
          {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <ButtonGroup>
        <Button type="button" variant="secondary" onClick={onBack}>
          Previous
        </Button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button type="button" variant="secondary" onClick={onBackToSelection}>
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

export default DiagnosticStep2;