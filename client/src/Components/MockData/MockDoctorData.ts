import { Appointment, Patient, MedicalHistory } from '../Types/Doctor';

export const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 234-567-8901',
    age: 35,
    gender: 'male',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bloodGroup: 'O+',
    allergies: ['Penicillin', 'Peanuts'],
    emergencyContact: {
      name: 'Jane Doe',
      phone: '+1 234-567-8902',
      relation: 'Spouse'
    }
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 234-567-8903',
    age: 28,
    gender: 'female',
    profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bloodGroup: 'A+',
    allergies: ['Shellfish'],
    emergencyContact: {
      name: 'Michael Johnson',
      phone: '+1 234-567-8904',
      relation: 'Husband'
    }
  },
  {
    id: '3',
    firstName: 'Robert',
    lastName: 'Brown',
    email: 'robert.brown@email.com',
    phone: '+1 234-567-8905',
    age: 45,
    gender: 'male',
    bloodGroup: 'B-',
    emergencyContact: {
      name: 'Lisa Brown',
      phone: '+1 234-567-8906',
      relation: 'Wife'
    }
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@email.com',
    phone: '+1 234-567-8907',
    age: 32,
    gender: 'female',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bloodGroup: 'AB+',
    allergies: ['Latex', 'Iodine']
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Wilson',
    email: 'michael.wilson@email.com',
    phone: '+1 234-567-8908',
    age: 52,
    gender: 'male',
    bloodGroup: 'O-',
    emergencyContact: {
      name: 'Patricia Wilson',
      phone: '+1 234-567-8909',
      relation: 'Wife'
    }
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patient: mockPatients[0],
    date: new Date().toISOString(),
    time: '09:00 AM',
    type: 'consultation',
    status: 'waiting',
    complaint: 'Chest pain and shortness of breath',
    priority: 'high'
  },
  {
    id: '2',
    patient: mockPatients[1],
    date: new Date().toISOString(),
    time: '09:30 AM',
    type: 'follow-up',
    status: 'in-progress',
    complaint: 'Follow-up for hypertension medication',
    priority: 'medium'
  },
  {
    id: '3',
    patient: mockPatients[2],
    date: new Date().toISOString(),
    time: '10:00 AM',
    type: 'consultation',
    status: 'waiting',
    complaint: 'Persistent headaches and dizziness',
    priority: 'medium'
  },
  {
    id: '4',
    patient: mockPatients[3],
    date: new Date().toISOString(),
    time: '10:30 AM',
    type: 'consultation',
    status: 'waiting',
    complaint: 'Skin rash and itching',
    priority: 'low'
  },
  {
    id: '5',
    patient: mockPatients[4],
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    time: '02:00 PM',
    type: 'consultation',
    status: 'completed',
    complaint: 'Diabetes management consultation',
    priority: 'medium'
  },
  {
    id: '6',
    patient: mockPatients[1],
    date: new Date(Date.now() - 86400000 * 7).toISOString(), // 1 week ago
    time: '11:00 AM',
    type: 'consultation',
    status: 'completed',
    complaint: 'Annual health checkup',
    priority: 'low'
  }
];

export const mockMedicalHistory: MedicalHistory[] = [
  {
    id: '1',
    patientId: '4',
    date: new Date(Date.now() - 86400000).toISOString(),
    complaint: 'Diabetes management consultation',
    diagnosis: 'Type 2 Diabetes Mellitus, well controlled',
    prescription: [
      {
        id: '1',
        medicine: 'Metformin',
        dosage: '500mg',
        frequency: 'twice daily',
        duration: '30 days',
        instructions: 'Take with meals'
      },
      {
        id: '2',
        medicine: 'Glimepiride',
        dosage: '2mg',
        frequency: 'once daily',
        duration: '30 days',
        instructions: 'Take before breakfast'
      }
    ],
    notes: 'Patient shows good compliance with medication. HbA1c levels improved. Continue current regimen.',
    doctorId: 'doctor-1',
    followUpDate: new Date(Date.now() + 86400000 * 30).toISOString()
  },
  {
    id: '2',
    patientId: '2',
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    complaint: 'Annual health checkup',
    diagnosis: 'Hypertension, Stage 1',
    prescription: [
      {
        id: '3',
        medicine: 'Lisinopril',
        dosage: '10mg',
        frequency: 'once daily',
        duration: '30 days',
        instructions: 'Take in the morning'
      }
    ],
    notes: 'Blood pressure slightly elevated. Started on ACE inhibitor. Recommend lifestyle modifications.',
    doctorId: 'doctor-1',
    followUpDate: new Date(Date.now() + 86400000 * 14).toISOString()
  },
  {
    id: '3',
    patientId: '1',
    date: new Date(Date.now() - 86400000 * 14).toISOString(),
    complaint: 'Recurring headaches',
    diagnosis: 'Tension headache',
    prescription: [
      {
        id: '4',
        medicine: 'Ibuprofen',
        dosage: '400mg',
        frequency: 'as needed',
        duration: '7 days',
        instructions: 'Maximum 3 times per day'
      }
    ],
    notes: 'Stress-related tension headaches. Recommended stress management techniques.',
    doctorId: 'doctor-1'
  }
];