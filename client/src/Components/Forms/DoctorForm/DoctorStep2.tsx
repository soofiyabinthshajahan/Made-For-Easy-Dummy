// DoctorStep2.tsx
import React from 'react';
import { Award } from 'lucide-react';
import { DoctorFormData } from '../../Types/Registration';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  ButtonGroup,
  Button,
} from '../../Shared/StyledComponents';
import SectionHeader from '../../Shared/SectionHeader';

interface Props {
  formData: DoctorFormData;
  errors: Partial<DoctorFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

const DoctorStep2: React.FC<Props> = ({ formData, errors, onChange, onNext, onBack }) => (
  <StepContainer direction="left">
    <SectionHeader icon={Award} title="Professional Qualifications" />

    <InputGroup>
      <Label>Medical Qualification</Label>
      <Input
        type="text"
        name="qualification"
        value={formData.qualification}
        onChange={onChange}
        hasError={!!errors.qualification}
        placeholder="e.g., MBBS, MD, MS"
      />
      {errors.qualification && <ErrorMessage>{errors.qualification}</ErrorMessage>}
    </InputGroup>

    <GridContainer>
      <InputGroup>
        <Label>Specialization</Label>
        <Select
          name="specialization"
          value={formData.specialization}
          onChange={onChange}
          hasError={!!errors.specialization}
        >
          <option value="">Select specialization</option>
          <option value="general-medicine">General Medicine</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="gynecology">Gynecology</option>
          <option value="dermatology">Dermatology</option>
          <option value="psychiatry">Psychiatry</option>
          <option value="surgery">Surgery</option>
          <option value="other">Other</option>
        </Select>
        {errors.specialization && <ErrorMessage>{errors.specialization}</ErrorMessage>}
      </InputGroup>

      <InputGroup>
        <Label>Years of Experience</Label>
        <Input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={onChange}
          hasError={!!errors.experience}
          placeholder="Years of practice"
          min="0"
        />
        {errors.experience && <ErrorMessage>{errors.experience}</ErrorMessage>}
      </InputGroup>
    </GridContainer>

    <InputGroup>
      <Label>Medical License Number</Label>
      <Input
        type="text"
        name="medicalLicense"
        value={formData.medicalLicense}
        onChange={onChange}
        hasError={!!errors.medicalLicense}
        placeholder="Enter your medical license number"
      />
      {errors.medicalLicense && <ErrorMessage>{errors.medicalLicense}</ErrorMessage>}
    </InputGroup>

    <InputGroup>
      <Label>Hospital Affiliation (Optional)</Label>
      <Input
        type="text"
        name="hospitalAffiliation"
        value={formData.hospitalAffiliation}
        onChange={onChange}
        placeholder="Current hospital or clinic affiliation"
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

export default DoctorStep2;