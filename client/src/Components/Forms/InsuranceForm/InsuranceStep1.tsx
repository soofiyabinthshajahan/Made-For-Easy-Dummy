import React from 'react';
import { Shield } from 'lucide-react';
import { InsuranceFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  ButtonContainer,
  Button
} from '../../Shared/StyledComponents';

interface InsuranceStep1Props {
  formData: InsuranceFormData;
  errors: Partial<InsuranceFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
}

const InsuranceStep1: React.FC<InsuranceStep1Props> = ({ formData, errors, onChange, onNext }) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={Shield} title="Company Information" />

      <InputGroup>
        <Label>Insurance Company Name</Label>
        <Input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={onChange}
          hasError={!!errors.companyName}
          placeholder="Enter company name"
        />
        {errors.companyName && <ErrorMessage>{errors.companyName}</ErrorMessage>}
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
            placeholder="Insurance license number"
          />
          {errors.licenseNumber && <ErrorMessage>{errors.licenseNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Coverage Area</Label>
          <Select
            name="coverageArea"
            value={formData.coverageArea}
            onChange={onChange}
            hasError={!!errors.coverageArea}
          >
            <option value="">Select coverage area</option>
            <option value="local">Local/City</option>
            <option value="state">State-wide</option>
            <option value="national">National</option>
            <option value="international">International</option>
          </Select>
          {errors.coverageArea && <ErrorMessage>{errors.coverageArea}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <GridContainer>
        <InputGroup>
          <Label>Claim Process Time</Label>
          <Select
            name="claimProcessTime"
            value={formData.claimProcessTime}
            onChange={onChange}
            hasError={!!errors.claimProcessTime}
          >
            <option value="">Select processing time</option>
            <option value="24-hours">24 Hours</option>
            <option value="48-hours">48 Hours</option>
            <option value="3-5-days">3-5 Days</option>
            <option value="1-week">1 Week</option>
            <option value="2-weeks">2 Weeks</option>
          </Select>
          {errors.claimProcessTime && <ErrorMessage>{errors.claimProcessTime}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Customer Support Hours</Label>
          <Input
            type="text"
            name="customerSupport"
            value={formData.customerSupport}
            onChange={onChange}
            placeholder="e.g., 24/7 or 9 AM - 6 PM"
          />
        </InputGroup>
      </GridContainer>

      <ButtonContainer>
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </ButtonContainer>
    </StepContainer>
  );
};

export default InsuranceStep1;