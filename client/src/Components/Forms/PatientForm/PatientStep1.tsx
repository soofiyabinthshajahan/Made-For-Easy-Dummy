import React from 'react';
import { User } from 'lucide-react';
import { PatientFormData } from '../../Types/Registration';
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

interface PatientStep1Props {
  formData: PatientFormData;
  errors: Partial<PatientFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
}

const PatientStep1: React.FC<PatientStep1Props> = ({ formData, errors, onChange, onNext }) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={User} title="Personal Information" />

      <GridContainer>
        <InputGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            hasError={!!errors.firstName}
            placeholder="Enter your first name"
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            hasError={!!errors.lastName}
            placeholder="Enter your last name"
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Email Address</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          hasError={!!errors.email}
          placeholder="Enter your email address"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputGroup>

      <GridContainer>
        <InputGroup>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            hasError={!!errors.phone}
            placeholder="Enter your phone number"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={onChange}
            hasError={!!errors.dateOfBirth}
          />
          {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Gender</Label>
        <Select
          name="gender"
          value={formData.gender}
          onChange={onChange}
          hasError={!!errors.gender}
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </Select>
        {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
      </InputGroup>

      <ButtonContainer>
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </ButtonContainer>
    </StepContainer>
  );
};

export default PatientStep1;