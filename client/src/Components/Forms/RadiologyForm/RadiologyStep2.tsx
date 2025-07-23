import React from 'react';
import { RadiologyFormData } from '../../Types/Registration';
import SectionHeader from '../../Shared/SectionHeader';
import { MapPin } from 'lucide-react';
import {
  GridContainer,
  InputGroup,
  Label,
  Input,
  ErrorMessage
} from '../../Shared/StyledComponents';

interface RadiologyStep2Props {
  formData: RadiologyFormData;
  errors: Partial<RadiologyFormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const RadiologyStep2: React.FC<RadiologyStep2Props> = ({ formData, errors, onInputChange }) => {
  return (
    <>
      <SectionHeader icon={MapPin} title="Contact Information" />

      <GridContainer>
        <InputGroup>
          <Label>Contact Person First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            hasError={!!errors.firstName}
            placeholder="Contact person's first name"
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Contact Person Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            hasError={!!errors.lastName}
            placeholder="Contact person's last name"
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <GridContainer>
        <InputGroup>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            hasError={!!errors.email}
            placeholder="Contact email address"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            hasError={!!errors.phone}
            placeholder="Contact phone number"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputGroup>
      </GridContainer>

      <InputGroup>
        <Label>Center Address</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={onInputChange}
          hasError={!!errors.address}
          placeholder="Enter center address"
        />
        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
      </InputGroup>

      <GridContainer>
        <InputGroup>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={onInputChange}
            hasError={!!errors.city}
            placeholder="Enter city"
          />
          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>ZIP Code</Label>
          <Input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={onInputChange}
            hasError={!!errors.zipCode}
            placeholder="Enter ZIP code"
          />
          {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
        </InputGroup>
      </GridContainer>
    </>
  );
};

export default RadiologyStep2;