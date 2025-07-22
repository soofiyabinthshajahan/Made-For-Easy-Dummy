import React from 'react';
import { Search, Calendar, FileText, User } from 'lucide-react';
import { Appointment, Patient, MedicalHistory } from '../../Types/Doctor';
import * as S from './TreatedPatientsList.styles';

interface TreatedPatientsListProps {
  appointments: Appointment[];
  medicalHistory: MedicalHistory[];
  onPatientClick: (patient: Patient) => void;
  searchTerm: string;
}

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
      <S.EmptyState>
        <S.EmptyStateIcon as={FileText} />
        <S.EmptyStateTitle>No treated patients</S.EmptyStateTitle>
        <S.EmptyStateText>
          {searchTerm ? 'No patients match your search criteria.' : 'You haven\'t completed any consultations yet.'}
        </S.EmptyStateText>
      </S.EmptyState>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Treated Patients ({sortedAppointments.length})
        </S.Title>
        <S.SortInfo>
          Sorted by most recent visit
        </S.SortInfo>
      </S.Header>

      <S.Grid>
        {sortedAppointments.map((appointment) => {
          const lastVisit = getLastVisit(appointment.patient.id);
          const totalVisits = getPatientHistory(appointment.patient.id).length;

          return (
            <S.PatientCard
              key={appointment.id}
              onClick={() => onPatientClick(appointment.patient)}
            >
              <S.PatientInfo>
                <S.AvatarContainer>
                  {appointment.patient.profileImage ? (
                    <S.ProfileImage
                      src={appointment.patient.profileImage}
                      alt={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
                    />
                  ) : (
                    <S.UserIcon as={User} />
                  )}
                </S.AvatarContainer>
                
                <S.PatientDetails>
                  <S.PatientName>
                    {appointment.patient.firstName} {appointment.patient.lastName}
                  </S.PatientName>
                  <S.PatientBasicInfo>
                    {appointment.patient.age} years • {appointment.patient.gender}
                  </S.PatientBasicInfo>
                  
                  <S.InfoSection>
                    <S.InfoItem>
                      <S.InfoIcon>
                        <Calendar size={12} />
                      </S.InfoIcon>
                      <span>
                        Last visit: {new Date(appointment.date).toLocaleDateString()}
                      </span>
                    </S.InfoItem>
                    
                    <S.InfoItem>
                      <S.InfoIcon>
                        <FileText size={12} />
                      </S.InfoIcon>
                      <span>{totalVisits} total visits</span>
                    </S.InfoItem>
                    
                    {lastVisit && (
                      <S.DiagnosisBox>
                        <S.DiagnosisLabel>Last diagnosis:</S.DiagnosisLabel>
                        <S.DiagnosisText>
                          {lastVisit.diagnosis}
                        </S.DiagnosisText>
                      </S.DiagnosisBox>
                    )}
                    
                    {lastVisit?.followUpDate && new Date(lastVisit.followUpDate) > new Date() && (
                      <S.FollowUpBox>
                        <S.FollowUpText>
                          Follow-up: {new Date(lastVisit.followUpDate).toLocaleDateString()}
                        </S.FollowUpText>
                      </S.FollowUpBox>
                    )}
                  </S.InfoSection>
                </S.PatientDetails>
              </S.PatientInfo>
              
              <S.CardFooter>
                <S.ViewHistoryButton>
                  View Full History →
                </S.ViewHistoryButton>
              </S.CardFooter>
            </S.PatientCard>
          );
        })}
      </S.Grid>
    </S.Container>
  );
};

export default TreatedPatientsList;