// DoctorStep1.tsx
import React from 'react';
import { Stethoscope } from 'lucide-react';
import { DoctorFormData } from '../../Types/Registration';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonContainer,
  Button,
} from '../../Shared/StyledComponents';
import SectionHeader from '../../Shared/SectionHeader';

interface Props {
  formData: DoctorFormData;
  errors: Partial<DoctorFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
}

const DoctorStep1: React.FC<Props> = ({ formData, errors, onChange, onNext }) => (
  <StepContainer direction="right">
    <SectionHeader icon={Stethoscope} title="Personal Information" />
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

    <ButtonContainer>
      <Button type="button" onClick={onNext}>
        Next Step
      </Button>
    </ButtonContainer>
  </StepContainer>
);

export default DoctorStep1;