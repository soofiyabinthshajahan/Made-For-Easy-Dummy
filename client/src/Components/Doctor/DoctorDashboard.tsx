import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Clock,
  Users,
  Stethoscope,
  FileText,
  Plus,
  Search,
  LogOut,
  Calendar as CalendarIcon
} from 'lucide-react';

import AppointmentQueue from './AppoinmentQueue';
import PatientDetailsModal from './PatientModal';
import TreatedPatientsList from './TreatedPatient';
import { Appointment, Patient, MedicalHistory } from '../Types/Doctor';
import { mockAppointments, mockMedicalHistory } from '../MockData/MockDoctorData';
import Calendar from '../Shared/Calender';
import PatientProgress from '../Shared/Map';
import DashboardHeader from './DoctorHeader';
import Map from '../Shared/Map';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

const MainContent = styled.div`
  padding: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLeft = styled.div``;

const StatTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
`;

const StatValue = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin: 0.5rem 0 0 0;
`;

const StatIcon = styled.div<{ color: string }>`
  background: ${props => props.color};
  color: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabsContainer = styled.div`
  display: flex;
  /* gap: 0.25rem; */
  margin-bottom: 1.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  /* flex: 1; */
  justify-content: center;

  ${props => props.active ? `
    background:  #374151;
    color: white;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  ` : `
    background: transparent;
    color: #6b7280;
    &:hover {
      background: #f3f4f6;
      color: #374151;
    }
  `}
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

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
    <DashboardContainer>
      <DashboardHeader
        waitingCount={waitingAppointments.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleLogout={handleLogout}
      />

      <MainContent>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatContent>
                <StatLeft>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatValue>{stat.value}</StatValue>
                </StatLeft>
                <StatIcon color={stat.color}>
                  <stat.icon size={24} />
                </StatIcon>
              </StatContent>
            </StatCard>
          ))}
        </StatsGrid>

        <TabsContainer>
          <Tab active={activeTab === 'queue'} onClick={() => setActiveTab('queue')}>
            <Clock size={16} />
            Appointment Queue ({todayAppointments.length})
          </Tab>
          <Tab active={activeTab === 'treated'} onClick={() => setActiveTab('treated')}>
            <FileText size={16} />
            Treated Patients ({completedAppointments.length})
          </Tab>
        </TabsContainer>

        <ContentGrid>
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
          
          <SidebarSection>
            <Calendar />
            <Map
              locations={hospitalLocations}
              title="Hospital Facilities Map"
            />
          </SidebarSection>
        </ContentGrid>
      </MainContent>

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
    </DashboardContainer>
  );
};

export default DoctorDashboard;