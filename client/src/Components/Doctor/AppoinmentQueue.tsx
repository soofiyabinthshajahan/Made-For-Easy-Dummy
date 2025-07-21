import React from 'react';
import styled from 'styled-components';
import { Clock, AlertCircle, User, Phone } from 'lucide-react';
import { Appointment, Patient } from '../Types/Doctor';

const QueueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0.5px solid #cdcbcb;
    border-radius: 12px;
  padding: 15px;
`;

const QueueHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const QueueTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #454546;
  margin: 0;
`;

const QueueSubtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

const EmptyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const EmptyMessage = styled.p`
  color: #6b7280;
  margin: 0;
`;

const AppointmentCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PatientNumber = styled.div`
  flex-shrink: 0;
`;

const NumberBadge = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberText = styled.span`
  color: #1d4ed8;
  font-weight: 600;
  font-size: 1.125rem;
`;

const PatientDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const PatientHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const PatientName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid;
  text-transform: uppercase;

  ${props => {
    switch (props.status) {
      case 'waiting':
        return `
          background: #fef3c7;
          color: #92400e;
          border-color: #fde68a;
        `;
      case 'in-progress':
        return `
          background: #dbeafe;
          color: #1e40af;
          border-color: #bfdbfe;
        `;
      case 'completed':
        return `
          background: #d1fae5;
          color: #065f46;
          border-color: #a7f3d0;
        `;
      case 'cancelled':
        return `
          background: #fee2e2;
          color: #991b1b;
          border-color: #fecaca;
        `;
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          border-color: #d1d5db;
        `;
    }
  }}
`;

const PriorityIcon = styled.div<{ priority: string }>`
  ${props => {
    switch (props.priority) {
      case 'high':
        return 'color: #dc2626;';
      case 'medium':
        return 'color: #ea580c;';
      case 'low':
        return 'color: #16a34a;';
      default:
        return 'color: #6b7280;';
    }
  }}
`;

const PatientMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const MetaDivider = styled.span`
  color: #d1d5db;
`;

const PriorityText = styled.span<{ priority: string }>`
  text-transform: capitalize;
  font-weight: 500;
  ${props => {
    switch (props.priority) {
      case 'high':
        return 'color: #dc2626;';
      case 'medium':
        return 'color: #ea580c;';
      case 'low':
        return 'color: #16a34a;';
      default:
        return 'color: #6b7280;';
    }
  }}
`;

const ComplaintBox = styled.p`
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.5rem;
  background: #f9fafb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-bottom: 0;
`;

const ComplaintLabel = styled.strong`
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.variant === 'secondary' ? `
    background: #f3f4f6;
    color: #375148;
    
    &:hover {
      background: #e5e7eb;  
    }
  ` : `
    background: #6b7ca0;
    color: #ffffff;
    
    &:hover {
      background: #1d4ed8;
    }
  `}
`;

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
      <EmptyState>
        <EmptyIcon>
          <User className="w-12 h-12" />
        </EmptyIcon>
        <EmptyTitle>No appointments today</EmptyTitle>
        <EmptyMessage>
          {searchTerm ? 'No patients match your search criteria.' : 'You have no scheduled appointments for today.'}
        </EmptyMessage>
      </EmptyState>
    );
  }

  return (
    <QueueContainer>
      <QueueHeader>
        <QueueTitle>
          Today's Appointments ({sortedAppointments.length})
        </QueueTitle>
        <QueueSubtitle>
          Sorted by status and priority
        </QueueSubtitle>
      </QueueHeader>

      {sortedAppointments.map((appointment, index) => (
        <AppointmentCard key={appointment.id}>
          <CardContent>
            <PatientInfo>
              <PatientNumber>
                <NumberBadge>
                  <NumberText>{index + 1}</NumberText>
                </NumberBadge>
              </PatientNumber>

              <PatientDetails>
                <PatientHeader>
                  <PatientName>
                    {appointment.patient.firstName} {appointment.patient.lastName}
                  </PatientName>
                  <StatusBadge status={appointment.status}>
                    {appointment.status.replace('-', ' ')}
                  </StatusBadge>
                  <PriorityIcon priority={appointment.priority}>
                    <AlertCircle className="w-4 h-4" />
                  </PriorityIcon>
                </PatientHeader>

                <PatientMeta>
                  <MetaItem>
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </MetaItem>
                  <MetaItem>
                    <Phone className="w-4 h-4" />
                    <span>{appointment.patient.phone}</span>
                  </MetaItem>
                  <MetaDivider>•</MetaDivider>
                  <span className="capitalize">{appointment.type}</span>
                  <MetaDivider>•</MetaDivider>
                  <PriorityText priority={appointment.priority}>
                    {appointment.priority} priority
                  </PriorityText>
                </PatientMeta>

                {appointment.complaint && (
                  <ComplaintBox>
                    <ComplaintLabel>Complaint:</ComplaintLabel> {appointment.complaint}
                  </ComplaintBox>
                )}
              </PatientDetails>
            </PatientInfo>

            <ActionButtons>
              {appointment.status === 'waiting' && (
                <ActionButton
                  onClick={() => onStatusUpdate(appointment.id, 'in-progress')}
                >
                  Start
                </ActionButton>
              )}

              <ActionButton
                variant="secondary"
                onClick={() => onPatientClick(appointment.patient)}
              >
                View Details
              </ActionButton>
            </ActionButtons>
          </CardContent>
        </AppointmentCard>
      ))}
    </QueueContainer>
  );
};

export default AppointmentQueue;