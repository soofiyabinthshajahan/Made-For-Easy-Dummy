import React from 'react';
import { RadiologyFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import { Zap, Calendar } from 'lucide-react';
import {
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage
} from '../../Shared/StyledComponents';

interface RadiologyStep1Props {
  formData: RadiologyFormData;
  errors: Partial<RadiologyFormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const RadiologyStep1: React.FC<RadiologyStep1Props> = ({ formData, errors, onInputChange }) => {
  return (
    <>
      <SectionHeader icon={Zap} title="Center Information" />

      <InputGroup>
        <Label>Radiology Center Name</Label>
        <Input
          type="text"
          name="centerName"
          value={formData.centerName}
          onChange={onInputChange}
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
            onChange={onInputChange}
            hasError={!!errors.licenseNumber}
            placeholder="Radiology center license number"
          />
          {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Certified Radiologists</Label>
          <Input
            type="number"
            name="certifiedRadiologists"
            value={formData.certifiedRadiologists}
            onChange={onInputChange}
            hasError={!!errors.certifiedRadiologists}
            placeholder="Number of certified radiologists"
            min="1"
          />
          {errors.certifiedRadiologists && <ErrorMessage>{errors.certifiedRadiologists}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Equipment Installation Year</Label>
        <Input
          type="number"
          name="equipmentYear"
          value={formData.equipmentYear}
          onChange={onInputChange}
          hasError={!!errors.equipmentYear}
          placeholder="Year of latest equipment installation"
          min="2000"
          max={new Date().getFullYear()}
        />
        {errors.equipmentYear && <ErrorMessage>{errors.equipmentYear}</ErrorMessage>}
      </InputGroup>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
        <SectionHeader icon={Calendar} title="Services" />

        <InputGroup>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              name="emergencyServices"
              checked={formData.emergencyServices}
              onChange={onInputChange}
              style={{ 
                width: '1.25rem', 
                height: '1.25rem',
                accentColor: 'rgba(255, 255, 255, 0.8)'
              }}
            />
            <Label style={{ margin: 0 }}>24/7 Emergency Radiology Services Available</Label>
          </div>
        </InputGroup>
      </div>
    </>
  );
};

export default RadiologyStep1;