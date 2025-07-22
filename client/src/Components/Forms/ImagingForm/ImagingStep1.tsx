import React from 'react';
import { Camera } from 'lucide-react';
import { ImagingFormData } from '../../Types/Registration';
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

interface ImagingStep1Props {
  formData: ImagingFormData;
  errors: Partial<ImagingFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
}

const ImagingStep1: React.FC<ImagingStep1Props> = ({ formData, errors, onChange, onNext }) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={Camera} title="Center Information" />

      <InputGroup>
        <Label>Imaging Center Name</Label>
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
            onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder="List your imaging equipment brands and specifications (e.g., GE MRI 3T, Siemens CT Scanner, etc.)"
        />
      </InputGroup>

      <ButtonContainer>
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </ButtonContainer>
    </StepContainer>
  );
};

export default ImagingStep1;