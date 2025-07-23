import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  Users,
  Stethoscope,
  FileText,
  Plus,
  Calendar as CalendarIcon
} from 'lucide-react';

import * as S from './DoctorDashboard.styles';
import AppointmentQueue from '../AppoinmentQueue/AppoinmentQueue';
import {PatientDetailsModal} from '../PatientModal/PatientDetailsModal';
import TreatedPatientsList from '../TreatedPatient/TreatedPatient';
import { Appointment, Patient, MedicalHistory } from '../../Types/Doctor';
import { mockAppointments, mockMedicalHistory } from '../../MockData/MockDoctorData';
import Calendar from '../../Shared/Calender';
import DashboardHeader from '../DoctorHeader/DoctorHeader';
import Map from '../../Shared/Map';

const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'queue' | 'treated'>('queue');
  const [searchTerm, setSearchTerm] = useState('');
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistory[]>(mockMedicalHistory);

  const todayAppointments = appointments.filter(apt => {
    const today = new Date().toDateString();
    return new Date(apt.date).toDateString() === today;
  });

  const completedAppointments = appointments.filter(apt => apt.status === 'completed');
  const waitingAppointments = todayAppointments.filter(apt => apt.status === 'waiting');

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowPatientModal(true);
  };

  const handleStatusUpdate = (appointmentId: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(apt =>
      apt.id === appointmentId ? { ...apt, status } : apt
    ));
  };

  const handleAddMedicalRecord = (record: Omit<MedicalHistory, 'id'>) => {
    const newRecord: MedicalHistory = {
      ...record,
      id: Date.now().toString(),
    };
    setMedicalHistory(prev => [...prev, newRecord]);

    if (selectedPatient) {
      const appointment = appointments.find(apt => apt.patient.id === selectedPatient.id);
      if (appointment) {
        handleStatusUpdate(appointment.id, 'completed');
      }
    }
  };

  const handleLogout = () => {
    navigate('/doctor/login');
  };

  // Sample hospital locations for the map
  const hospitalLocations = [
    { name: 'Main Hospital', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Emergency Wing', latitude: 40.7589, longitude: -73.9851 },
    { name: 'Outpatient Clinic', latitude: 40.7505, longitude: -73.9934 },
    { name: 'Pharmacy', latitude: 40.7282, longitude: -73.9942 },
  ];

  const stats = [
    {
      title: "Intensive Care Unit",
      value: "12/20",
      icon: Stethoscope,
      color: '#ef4444',
    },
    {
      title: "Laboratory",
      value: "8",
      icon: FileText,
      color: '#3b82f6',
    },
    {
      title: 'Ambulances',
      value: waitingAppointments.length,
      icon: Clock,
      color: '#f59e0b',
    },
    {
      title: 'Available Doctors',
      value: "15",
      icon: Users,
      color: '#10b981',
    },
    {
      title: 'Available Beds',
      value: "23",
      icon: Plus,
      color: '#8b5cf6',
    },
  ];

  return (
    <S.DashboardContainer>
      <DashboardHeader
        waitingCount={waitingAppointments.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleLogout={handleLogout}
      />

      <S.MainContent>
        <S.StatsGrid>
          {stats.map((stat, index) => (
            <S.StatCard key={index}>
              <S.StatContent>
                <S.StatLeft>
                  <S.StatTitle>{stat.title}</S.StatTitle>
                  <S.StatValue>{stat.value}</S.StatValue>
                </S.StatLeft>
                <S.StatIcon color={stat.color}>
                  <stat.icon size={24} />
                </S.StatIcon>
              </S.StatContent>
            </S.StatCard>
          ))}
        </S.StatsGrid>

        <S.TabsContainer>
          <S.Tab active={activeTab === 'queue'} onClick={() => setActiveTab('queue')}>
            <Clock size={16} />
            Appointment Queue ({todayAppointments.length})
          </S.Tab>
          <S.Tab active={activeTab === 'treated'} onClick={() => setActiveTab('treated')}>
            <FileText size={16} />
            Treated Patients ({completedAppointments.length})
          </S.Tab>
        </S.TabsContainer>

        <S.ContentGrid>
          <div>
            {activeTab === 'queue' ? (
              <AppointmentQueue
                appointments={todayAppointments}
                onPatientClick={handlePatientClick}
                onStatusUpdate={handleStatusUpdate}
                searchTerm={searchTerm}
              />
            ) : (
              <TreatedPatientsList
                appointments={completedAppointments}
                medicalHistory={medicalHistory}
                onPatientClick={handlePatientClick}
                searchTerm={searchTerm}
              />
            )}
          </div>
          
          <S.SidebarSection>
            <Calendar />
            <Map
              locations={hospitalLocations}
              title="Hospital Facilities Map"
            />
          </S.SidebarSection>
        </S.ContentGrid>
      </S.MainContent>

      {showPatientModal && selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          medicalHistory={medicalHistory.filter(
            (record) => record.patientId === selectedPatient.id
          )}
          onClose={() => {
            setShowPatientModal(false);
            setSelectedPatient(null);
          }}
          onAddRecord={handleAddMedicalRecord}
        />
      )}
    </S.DashboardContainer>
  );
};

export default DoctorDashboard;