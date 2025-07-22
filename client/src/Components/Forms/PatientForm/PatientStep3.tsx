import React from 'react';
import { MapPin, Shield } from 'lucide-react';
import { PatientFormData } from '../../Types/Registration';
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

interface PatientStep3Props {
  formData: PatientFormData;
  errors: Partial<PatientFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  onBackToSelection: () => void;
}

const PatientStep3: React.FC<PatientStep3Props> = ({
  formData,
  errors,
  onChange,
  onSubmit,
  onBack,
  onBackToSelection
}) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={MapPin} title="Address Information" />

      <InputGroup>
        <Label>Street Address</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              hasError={!!errors.emergencyPhone}
              placeholder="Emergency contact phone"
            />
            {errors.emergencyPhone && <ErrorMessage>{errors.emergencyPhone}</ErrorMessage>}
          </InputGroup>
        </GridContainer>
      </div>

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

export default PatientStep3;