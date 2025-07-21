import React from 'react';
import { Clock, User, Calendar } from 'lucide-react';
import {
  AppointmentsList as AppointmentsContainer,
  AppointmentCard,
  AppointmentInfo,
  AppointmentTime,
  AppointmentDetails,
  AppointmentType,
  ViewAllButton
} from '../Shared/DashboardStyledComponent';

interface Appointment {
  id: number;
  patientName: string;
  doctor: string;
  time: string;
  type: string;
}

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Surgery':
        return '#EF4444';
      case 'Consultation':
        return '#3B82F6';
      case 'Follow-up':
        return '#10B981';
      default:
        return '#F59E0B';
    }
  };

  return (
    <AppointmentsContainer>
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id}>
          <AppointmentTime>
            <Clock size={16} />
            {appointment.time}
          </AppointmentTime>
          <AppointmentInfo>
            <AppointmentDetails>
              <User size={14} />
              {appointment.patientName}
            </AppointmentDetails>
            <AppointmentDetails>
              <Calendar size={14} />
              {appointment.doctor}
            </AppointmentDetails>
          </AppointmentInfo>
          <AppointmentType color={getTypeColor(appointment.type)}>
            {appointment.type}
          </AppointmentType>
        </AppointmentCard>
      ))}
      <ViewAllButton>View All Appointments</ViewAllButton>
    </AppointmentsContainer>
  );
};

export default AppointmentsList;