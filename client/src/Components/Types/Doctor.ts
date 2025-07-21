export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  profileImage?: string;
  bloodGroup?: string;
  allergies?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relation: string;
  };
}

export interface MedicalHistory {
  id: string;
  patientId: string;
  date: string;
  complaint: string;
  diagnosis: string;
  prescription: Prescription[];
  notes: string;
  doctorId: string;
  followUpDate?: string;
}

export interface Prescription {
  id: string;
  medicine: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface Appointment {
  id: string;
  patient: Patient;
  date: string;
  time: string;
  type: 'consultation' | 'follow-up' | 'emergency';
  status: 'waiting' | 'in-progress' | 'completed' | 'cancelled';
  complaint?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Diagnostic {
  id: string;
  name: string;
  type: 'lab' | 'imaging' | 'other';
  instructions: string;
  urgent: boolean;
}