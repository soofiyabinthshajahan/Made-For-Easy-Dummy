import React from 'react';
import { Pill, Truck } from 'lucide-react';
import { PharmacyFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonContainer,
  Button
} from '../../Shared/StyledComponents';

interface PharmacyStep1Props {
  formData: PharmacyFormData;
  errors: Partial<PharmacyFormData>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const PharmacyStep1: React.FC<PharmacyStep1Props> = ({
  formData,
  errors,
  handleInputChange,
  onNext
}) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={Pill} title="Pharmacy Information" />

      <InputGroup>
        <Label>Pharmacy Name</Label>
        <Input
          type="text"
          name="pharmacyName"
          value={formData.pharmacyName}
          onChange={handleInputChange}
          hasError={!!errors.pharmacyName}
          placeholder="Enter pharmacy name"
        />
        {errors.pharmacyName && <ErrorMessage>{errors.pharmacyName}</ErrorMessage>}
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
            placeholder="Pharmacy license number"
          />
          {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>GST Number</Label>
          <Input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
            hasError={!!errors.gstNumber}
            placeholder="GST registration number"
          />
          {errors.gstNumber && <ErrorMessage>{errors.gstNumber}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Operating Hours</Label>
        <Input
          type="text"
          name="operatingHours"
          value={formData.operatingHours}
          onChange={handleInputChange}
          hasError={!!errors.operatingHours}
          placeholder="e.g., 8 AM - 10 PM"
        />
        {errors.operatingHours && <ErrorMessage>{errors.operatingHours}</ErrorMessage>}
      </InputGroup>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
        <SectionHeader icon={Truck} title="Services" />

        <InputGroup>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              name="deliveryService"
              checked={formData.deliveryService}
              onChange={handleInputChange}
              style={{ 
                width: '1.25rem', 
                height: '1.25rem',
                accentColor: 'rgba(255, 255, 255, 0.8)'
              }}
            />
            <Label style={{ margin: 0 }}>Home Delivery Service Available</Label>
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

export default PharmacyStep1;