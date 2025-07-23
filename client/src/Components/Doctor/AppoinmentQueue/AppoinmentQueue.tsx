import React from 'react';
import { Clock, AlertCircle, User, Phone } from 'lucide-react';
import { Appointment, Patient } from '../../Types/Doctor';
import * as AQ from './AppointmentQueue.styles';

interface AppointmentQueueProps {
  appointments: Appointment[];
  onPatientClick: (patient: Patient) => void;
  onStatusUpdate: (appointmentId: string, status: Appointment['status']) => void;
  searchTerm: string;
}

const AppointmentQueue: React.FC<AppointmentQueueProps> = ({
  appointments,
  onPatientClick,
  onStatusUpdate,
  searchTerm
}) => {
  const filteredAppointments = appointments.filter(apt =>
    apt.patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.patient.phone.includes(searchTerm)
  );

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const statusPriority = { 'in-progress': 0, 'waiting': 1, 'completed': 2, 'cancelled': 3 };
    const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2 };

    if (a.status !== b.status) {
      return statusPriority[a.status] - statusPriority[b.status];
    }

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  if (sortedAppointments.length === 0) {
    return (
      <AQ.EmptyState>
        <AQ.EmptyIcon>
          <User className="w-12 h-12" />
        </AQ.EmptyIcon>
        <AQ.EmptyTitle>No appointments today</AQ.EmptyTitle>
        <AQ.EmptyMessage>
          {searchTerm ? 'No patients match your search criteria.' : 'You have no scheduled appointments for today.'}
        </AQ.EmptyMessage>
      </AQ.EmptyState>
    );
  }

  return (
    <AQ.QueueContainer>
      <AQ.QueueHeader>
        <AQ.QueueTitle>
          Today's Appointments ({sortedAppointments.length})
        </AQ.QueueTitle>
        <AQ.QueueSubtitle>
          Sorted by status and priority
        </AQ.QueueSubtitle>
      </AQ.QueueHeader>

      {sortedAppointments.map((appointment, index) => (
        <AQ.AppointmentCard key={appointment.id}>
          <AQ.CardContent>
            <AQ.PatientInfo>
              <AQ.PatientNumber>
                <AQ.NumberBadge>
                  <AQ.NumberText>{index + 1}</AQ.NumberText>
                </AQ.NumberBadge>
              </AQ.PatientNumber>

              <AQ.PatientDetails>
                <AQ.PatientHeader>
                  <AQ.PatientName>
                    {appointment.patient.firstName} {appointment.patient.lastName}
                  </AQ.PatientName>
                  <AQ.StatusBadge status={appointment.status}>
                    {appointment.status.replace('-', ' ')}
                  </AQ.StatusBadge>
                  <AQ.PriorityIcon priority={appointment.priority}>
                    <AlertCircle className="w-4 h-4" />
                  </AQ.PriorityIcon>
                </AQ.PatientHeader>

                <AQ.PatientMeta>
                  <AQ.MetaItem>
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </AQ.MetaItem>
                  <AQ.MetaItem>
                    <Phone className="w-4 h-4" />
                    <span>{appointment.patient.phone}</span>
                  </AQ.MetaItem>
                  <AQ.MetaDivider>•</AQ.MetaDivider>
                  <span className="capitalize">{appointment.type}</span>
                  <AQ.MetaDivider>•</AQ.MetaDivider>
                  <AQ.PriorityText priority={appointment.priority}>
                    {appointment.priority} priority
                  </AQ.PriorityText>
                </AQ.PatientMeta>

                {appointment.complaint && (
                  <AQ.ComplaintBox>
                    <AQ.ComplaintLabel>Complaint:</AQ.ComplaintLabel> {appointment.complaint}
                  </AQ.ComplaintBox>
                )}
              </AQ.PatientDetails>
            </AQ.PatientInfo>

            <AQ.ActionButtons>
              {appointment.status === 'waiting' && (
                <AQ.ActionButton
                  onClick={() => onStatusUpdate(appointment.id, 'in-progress')}
                >
                  Start
                </AQ.ActionButton>
              )}

              <AQ.ActionButton
                variant="secondary"
                onClick={() => onPatientClick(appointment.patient)}
              >
                View Details
              </AQ.ActionButton>
            </AQ.ActionButtons>
          </AQ.CardContent>
        </AQ.AppointmentCard>
      ))}
    </AQ.QueueContainer>
  );
};

export default AppointmentQueue;
