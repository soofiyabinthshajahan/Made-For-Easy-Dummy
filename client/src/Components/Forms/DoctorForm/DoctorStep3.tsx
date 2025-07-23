// DoctorStep3.tsx
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { DoctorFormData } from '../../Types/Registration';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonGroup,
  Button,
} from '../../Shared/StyledComponents';
import SectionHeader from '../../Shared/SectionHeader';

interface Props {
  formData: DoctorFormData;
  errors: Partial<DoctorFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onBackToLogin?: () => void;
}

const DoctorStep3: React.FC<Props> = ({ 
  formData, 
  errors, 
  onChange, 
  onSubmit, 
  onBack, 
  onBackToLogin 
}) => (
  <StepContainer direction="right">
    <SectionHeader icon={MapPin} title="Practice Information" />

    <InputGroup>
      <Label>Practice Address</Label>
      <Input
        type="text"
        name="address"
        value={formData.address}
        onChange={onChange}
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

    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
      <SectionHeader icon={Clock} title="Consultation Details" />

      <GridContainer>
        <InputGroup>
          <Label>Consultation Fee (₹)</Label>
          <Input
            type="number"
            name="consultationFee"
            value={formData.consultationFee}
            onChange={onChange}
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
            onChange={onChange}
            placeholder="e.g., 9 AM - 6 PM"
          />
        </InputGroup>
      </GridContainer>
    </div>

    <ButtonGroup>
      <Button type="button" variant="secondary" onClick={onBack}>
        Previous
      </Button>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {onBackToLogin && (
          <Button type="button" variant="secondary" onClick={onBackToLogin}>
            Back to Login
          </Button>
        )}
        <Button type="button" variant="success" onClick={onSubmit}>
          Complete Registration
        </Button>
      </div>
    </ButtonGroup>
  </StepContainer>
);

export default DoctorStep3;