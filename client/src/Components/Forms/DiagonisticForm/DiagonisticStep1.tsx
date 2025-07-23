// DiagnosticStep1.tsx
import React from 'react';
import { Activity, Home } from 'lucide-react';
import { DiagnosticFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  TextArea,
  ErrorMessage,
  ButtonContainer,
  Button
} from '../../Shared/StyledComponents';

interface DiagnosticStep1Props {
  formData: DiagnosticFormData;
  errors: Partial<DiagnosticFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
}

const DiagnosticStep1: React.FC<DiagnosticStep1Props> = ({ formData, errors, onChange, onNext }) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={Activity} title="Center Information" />

      <InputGroup>
        <Label>Diagnostic Center Name</Label>
        <Input
          type="text"
          name="centerName"
          value={formData.centerName}
          onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
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
              onChange={onChange}
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
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </ButtonContainer>
    </StepContainer>
  );
};

export default DiagnosticStep1;