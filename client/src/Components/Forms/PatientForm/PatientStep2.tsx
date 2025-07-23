import React from 'react';
import { Heart } from 'lucide-react';
import { PatientFormData } from '../../Types/Registration';
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
  ButtonGroup,
  Button
} from '../../Shared/StyledComponents';

interface PatientStep2Props {
  formData: PatientFormData;
  errors: Partial<PatientFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

const PatientStep2: React.FC<PatientStep2Props> = ({ formData, errors, onChange, onNext, onBack }) => {
  return (
    <StepContainer direction="left">
      <SectionHeader icon={Heart} title="ID & Medical Information" />

      <GridContainer>
        <InputGroup>
          <Label>Aadhar Number</Label>
          <Input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={onChange}
            hasError={!!errors.aadharNumber}
            placeholder="Enter your Aadhar number"
            maxLength={12}
          />
          {errors.aadharNumber && <ErrorMessage>{errors.aadharNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Ration Card Number</Label>
          <Input
            type="text"
            name="rationCardNumber"
            value={formData.rationCardNumber}
            onChange={onChange}
            hasError={!!errors.rationCardNumber}
            placeholder="Enter your ration card number"
          />
          {errors.rationCardNumber && <ErrorMessage>{errors.rationCardNumber}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Blood Group</Label>
        <Select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={onChange}
          hasError={!!errors.bloodGroup}
        >
          <option value="">Select your blood group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </Select>
        {errors.bloodGroup && <ErrorMessage>{errors.bloodGroup}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label>Medical History (Optional)</Label>
        <TextArea
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={onChange}
          placeholder="Any relevant medical history, allergies, or current medications..."
        />
      </InputGroup>

      <ButtonGroup>
        <Button type="button" variant="secondary" onClick={onBack}>
          Previous
        </Button>
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </ButtonGroup>
    </StepContainer>
  );
};

export default PatientStep2;