import React from 'react';
import { Building2 } from 'lucide-react';
import { HospitalFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import {
  StepContainer,
  GridContainer,
  InputGroup,
  Label,
  Input,
  Select,
  ErrorMessage,
  Button
} from '../../Shared/StyledComponents';

interface HospitalStep1Props {
  formData: HospitalFormData;
  errors: Partial<HospitalFormData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
}

const HospitalStep1: React.FC<HospitalStep1Props> = ({ formData, errors, onChange, onNext }) => {
  return (
    <StepContainer direction="right">
      <SectionHeader icon={Building2} title="Hospital Information" />

      <InputGroup>
        <Label>Hospital Name</Label>
        <Input
          type="text"
          name="hospitalName"
          value={formData.hospitalName}
          onChange={onChange}
          hasError={!!errors.hospitalName}
          placeholder="Enter hospital name"
        />
        {errors.hospitalName && <ErrorMessage>{errors.hospitalName}</ErrorMessage>}
      </InputGroup>

      <GridContainer>
        <InputGroup>
          <Label>Registration Number</Label>
          <Input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={onChange}
            hasError={!!errors.registrationNumber}
            placeholder="Hospital registration number"
          />
          {errors.registrationNumber && <ErrorMessage>{errors.registrationNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Established Year</Label>
          <Input
            type="number"
            name="establishedYear"
            value={formData.establishedYear}
            onChange={onChange}
            hasError={!!errors.establishedYear}
            placeholder="Year established"
            min="1800"
            max={new Date().getFullYear()}
          />
          {errors.establishedYear && <ErrorMessage>{errors.establishedYear}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <GridContainer>
        <InputGroup>
          <Label>Bed Capacity</Label>
          <Input
            type="number"
            name="bedCapacity"
            value={formData.bedCapacity}
            onChange={onChange}
            hasError={!!errors.bedCapacity}
            placeholder="Total bed capacity"
            min="1"
          />
          {errors.bedCapacity && <ErrorMessage>{errors.bedCapacity}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Accreditation</Label>
          <Select
            name="accreditation"
            value={formData.accreditation}
            onChange={onChange}
            hasError={!!errors.accreditation}
          >
            <option value="">Select accreditation</option>
            <option value="nabh">NABH</option>
            <option value="nabl">NABL</option>
            <option value="jci">JCI</option>
            <option value="iso">ISO Certified</option>
            <option value="other">Other</option>
          </Select>
          {errors.accreditation && <ErrorMessage>{errors.accreditation}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Website (Optional)</Label>
        <Input
          type="url"
          name="website"
          value={formData.website}
          onChange={onChange}
          placeholder="Hospital website URL"
        />
      </InputGroup>

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1.5rem' }}>
        <Button type="button" onClick={onNext}>
          Next Step
        </Button>
      </div>
    </StepContainer>
  );
};

export default HospitalStep1;