import React from 'react';
import styled from 'styled-components';
import { Search, Calendar, FileText, User } from 'lucide-react';
import { Appointment, Patient, MedicalHistory } from '../Types/Doctor';

interface TreatedPatientsListProps {
  appointments: Appointment[];
  medicalHistory: MedicalHistory[];
  onPatientClick: (patient: Patient) => void;
  searchTerm: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const SortInfo = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PatientCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const PatientInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const AvatarContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const UserIcon = styled(User)`
  width: 1.5rem;
  height: 1.5rem;
  color: #15803d;
`;

const PatientDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const PatientName = styled.h3`
  font-weight: 600;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PatientBasicInfo = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

const InfoSection = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
`;

const InfoIcon = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const DiagnosisBox = styled.div`
  background: #f9fafb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const DiagnosisLabel = styled.p`
  font-size: 0.75rem;
  color: #374151;
  font-weight: 500;
`;

const DiagnosisText = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FollowUpBox = styled.div`
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const FollowUpText = styled.p`
  font-size: 0.75rem;
  color: #1d4ed8;
  font-weight: 500;
`;

const CardFooter = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const ViewHistoryButton = styled.button`
  width: 100%;
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1d4ed8;
  }
`;

const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  text-align: center;
`;

const EmptyStateIcon = styled(FileText)`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const EmptyStateText = styled.p`
  color: #6b7280;
`;

const TreatedPatientsList: React.FC<TreatedPatientsListProps> = ({
  appointments,
  medicalHistory,
  onPatientClick,
  searchTerm
}) => {
  const filteredAppointments = appointments.filter(apt =>
    apt.patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.patient.phone.includes(searchTerm)
  );

  const sortedAppointments = filteredAppointments.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getPatientHistory = (patientId: string) => {
    return medicalHistory.filter(record => record.patientId === patientId);
  };

  const getLastVisit = (patientId: string) => {
    const history = getPatientHistory(patientId);
    if (history.length === 0) return null;
    
    const sortedHistory = history.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return sortedHistory[0];
  };

  if (sortedAppointments.length === 0) {
    return (
      <EmptyState>
        <EmptyStateIcon />
        <EmptyStateTitle>No treated patients</EmptyStateTitle>
        <EmptyStateText>
          {searchTerm ? 'No patients match your search criteria.' : 'You haven\'t completed any consultations yet.'}
        </EmptyStateText>
      </EmptyState>
    );
  }

  return (
    <Container>
      <Header>
        <Title>
          Treated Patients ({sortedAppointments.length})
        </Title>
        <SortInfo>
          Sorted by most recent visit
        </SortInfo>
      </Header>

      <Grid>
        {sortedAppointments.map((appointment) => {
          const lastVisit = getLastVisit(appointment.patient.id);
          const totalVisits = getPatientHistory(appointment.patient.id).length;

          return (
            <PatientCard
              key={appointment.id}
              onClick={() => onPatientClick(appointment.patient)}
            >
              <PatientInfo>
                <AvatarContainer>
                  {appointment.patient.profileImage ? (
                    <ProfileImage
                      src={appointment.patient.profileImage}
                      alt={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
                    />
                  ) : (
                    <UserIcon />
                  )}
                </AvatarContainer>
                
                <PatientDetails>
                  <PatientName>
                    {appointment.patient.firstName} {appointment.patient.lastName}
                  </PatientName>
                  <PatientBasicInfo>
                    {appointment.patient.age} years • {appointment.patient.gender}
                  </PatientBasicInfo>
                  
                  <InfoSection>
                    <InfoItem>
                      <InfoIcon>
                        <Calendar size={12} />
                      </InfoIcon>
                      <span>
                        Last visit: {new Date(appointment.date).toLocaleDateString()}
                      </span>
                    </InfoItem>
                    
                    <InfoItem>
                      <InfoIcon>
                        <FileText size={12} />
                      </InfoIcon>
                      <span>{totalVisits} total visits</span>
                    </InfoItem>
                    
                    {lastVisit && (
                      <DiagnosisBox>
                        <DiagnosisLabel>Last diagnosis:</DiagnosisLabel>
                        <DiagnosisText>
                          {lastVisit.diagnosis}
                        </DiagnosisText>
                      </DiagnosisBox>
                    )}
                    
                    {lastVisit?.followUpDate && new Date(lastVisit.followUpDate) > new Date() && (
                      <FollowUpBox>
                        <FollowUpText>
                          Follow-up: {new Date(lastVisit.followUpDate).toLocaleDateString()}
                        </FollowUpText>
                      </FollowUpBox>
                    )}
                  </InfoSection>
                </PatientDetails>
              </PatientInfo>
              
              <CardFooter>
                <ViewHistoryButton>
                  View Full History →
                </ViewHistoryButton>
              </CardFooter>
            </PatientCard>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TreatedPatientsList;