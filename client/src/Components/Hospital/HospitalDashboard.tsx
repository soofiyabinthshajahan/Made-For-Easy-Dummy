import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Bed, 
  UserCheck, 
  DollarSign, 
  Activity, 
  Bell, 
  Settings,
  PlusCircle,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { HospitalFormData } from '../Types/Registration';
import DashboardHeader from './DashboardHeader';
import StatsOverview from './StatsOverview';
import RecentPatients from './RecentPatients';
import AppointmentsList from './AppoinmentsList';
import BedManagement from './BedManagement';
import QuickActions from './QuickActions';
import { DashboardContainer,
  MainContent,
  GridLayout,
  Card,
  SectionTitle } from '../Shared/DashboardStyledComponent';

interface HospitalDashboardProps {
  hospitalData: HospitalFormData;
  onLogout: () => void;
}

const HospitalDashboard: React.FC<HospitalDashboardProps> = ({ hospitalData, onLogout }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const mockStats = {
    totalPatients: 1247,
    todayAppointments: 45,
    availableBeds: 78,
    totalStaff: 156,
    monthlyRevenue: 125000,
    patientSatisfaction: 94
  };

  const mockRecentPatients = [
    { id: 1, name: 'John Doe', age: 45, condition: 'Hypertension', status: 'stable', lastVisit: '2024-01-15' },
    { id: 2, name: 'Jane Smith', age: 32, condition: 'Diabetes', status: 'improving', lastVisit: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', age: 28, condition: 'Flu', status: 'recovered', lastVisit: '2024-01-13' },
    { id: 4, name: 'Sarah Wilson', age: 55, condition: 'Heart Disease', status: 'critical', lastVisit: '2024-01-15' }
  ];

  const mockAppointments = [
    { id: 1, patientName: 'Emily Davis', doctor: 'Dr. Smith', time: '09:00 AM', type: 'Consultation' },
    { id: 2, patientName: 'Robert Brown', doctor: 'Dr. Johnson', time: '10:30 AM', type: 'Follow-up' },
    { id: 3, patientName: 'Lisa Anderson', doctor: 'Dr. Williams', time: '02:15 PM', type: 'Surgery' },
    { id: 4, patientName: 'David Miller', doctor: 'Dr. Brown', time: '03:45 PM', type: 'Check-up' }
  ];

  return (
    <DashboardContainer>
      <DashboardHeader 
        hospitalName={hospitalData.hospitalName}
        contactPerson={`${hospitalData.firstName} ${hospitalData.lastName}`}
        onLogout={onLogout}
      />
      
      <MainContent>
        <GridLayout>
          <div style={{ gridColumn: '1 / -1' }}>
            <StatsOverview stats={mockStats} />
          </div>
          
          <Card>
            <SectionTitle>
              <Users size={20} />
              Recent Patients
            </SectionTitle>
            <RecentPatients patients={mockRecentPatients} />
          </Card>

          <Card>
            <SectionTitle>
              <Calendar size={20} />
              Today's Appointments
            </SectionTitle>
            <AppointmentsList appointments={mockAppointments} />
          </Card>

          <Card>
            <SectionTitle>
              <Bed size={20} />
              Bed Management
            </SectionTitle>
            <BedManagement 
              totalBeds={parseInt(hospitalData.bedCapacity)} 
              availableBeds={mockStats.availableBeds}
            />
          </Card>

          <Card>
            <SectionTitle>
              <PlusCircle size={20} />
              Quick Actions
            </SectionTitle>
            <QuickActions />
          </Card>
        </GridLayout>
      </MainContent>
    </DashboardContainer>
  );
};

export default HospitalDashboard;