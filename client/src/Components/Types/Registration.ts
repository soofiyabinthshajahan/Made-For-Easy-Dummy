export type UserType = 
  | 'patient' 
  | 'hospital' 
  | 'doctor' 
  | 'pharmacy' 
  | 'insurance' 
  | 'diagnostic' 
  | 'imaging' 
  | 'laboratory'
  | 'radiology';
   

export interface BaseFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface PatientFormData extends BaseFormData {
  dateOfBirth: string;
  gender: string;
  aadharNumber: string;
  rationCardNumber: string;
  emergencyContact: string;
  emergencyPhone: string;
  bloodGroup: string;
  medicalHistory: string;
}

export interface HospitalFormData extends BaseFormData {
  hospitalName: string;
  registrationNumber: string;
  establishedYear: string;
  bedCapacity: string;
  specializations: string[];
  accreditation: string;
  website: string;
}

export interface DoctorFormData extends BaseFormData {
  qualification: string;
  specialization: string;
  experience: string;
  medicalLicense: string;
  hospitalAffiliation: string;
  consultationFee: string;
  availableHours: string;
}

export interface PharmacyFormData extends BaseFormData {
  pharmacyName: string;
  licenseNumber: string;
  gstNumber: string;
  operatingHours: string;
  deliveryService: boolean;
  insuranceAccepted: string[];
}

export interface InsuranceFormData extends BaseFormData {
  companyName: string;
  licenseNumber: string;
  typeOfInsurance: string[];
  coverageArea: string;
  claimProcessTime: string;
  customerSupport: string;
}

export interface DiagnosticFormData extends BaseFormData {
  centerName: string;
  licenseNumber: string;
  servicesOffered: string[];
  equipmentDetails: string;
  reportDeliveryTime: string;
  homeCollection: boolean;
}

export interface ImagingFormData extends BaseFormData {
  centerName: string;
  licenseNumber: string;
  imagingServices: string[];
  equipmentBrands: string;
  radiologistCount: string;
  reportTurnaroundTime: string;
}

export interface RadiologyFormData extends BaseFormData {
  centerName: string;
  licenseNumber: string;
  radiologyServices: string[];
  certifiedRadiologists: string;
  equipmentYear: string;
  emergencyServices: boolean;
}

export interface LaboratoryFormData extends BaseFormData {
  centerName: string;
  licenseNumber: string;
  radiologyServices: string[];
  certifiedRadiologists: string;
  equipmentYear: string;
  emergencyServices: boolean;
}

export type FormData = 
  | PatientFormData 
  | HospitalFormData 
  | DoctorFormData 
  | PharmacyFormData 
  | InsuranceFormData 
  | DiagnosticFormData 
  | ImagingFormData 
  | RadiologyFormData
  |LaboratoryFormData
  

export interface UserTypeConfig {
  type: UserType;
  title: string;
  description: string;
  icon: string;
  color: string;
}