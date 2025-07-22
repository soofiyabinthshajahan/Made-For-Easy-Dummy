import React from "react";
import { Calendar } from "lucide-react";
import { MedicalHistory } from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";

interface MedicalHistoryTabProps {
  medicalHistory: MedicalHistory[];
}

export const MedicalHistoryTab: React.FC<MedicalHistoryTabProps> = ({
  medicalHistory,
}) => {
  const sortedHistory = medicalHistory.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <S.HistoryContainer>
      <S.HistoryTitle>Medical History</S.HistoryTitle>

      {sortedHistory.length === 0 ? (
        <S.EmptyHistory>
          <S.EmptyIcon>
            <Calendar className="w-12 h-12" />
          </S.EmptyIcon>
          <S.EmptyText>No medical history available</S.EmptyText>
        </S.EmptyHistory>
      ) : (
        <S.HistoryList>
          {sortedHistory.map((record) => (
            <S.HistoryRecord key={record.id}>
              <S.RecordHeader>
                <S.RecordDate>
                  {new Date(record.date).toLocaleDateString()}
                </S.RecordDate>
                {record.followUpDate && (
                  <S.FollowUpBadge>
                    Follow-up:{" "}
                    {new Date(record.followUpDate).toLocaleDateString()}
                  </S.FollowUpBadge>
                )}
              </S.RecordHeader>

              <S.RecordContent>
                <S.RecordItem>
                  <S.RecordLabel>Complaint:</S.RecordLabel> {record.complaint}
                </S.RecordItem>
                <S.RecordItem>
                  <S.RecordLabel>Diagnosis:</S.RecordLabel> {record.diagnosis}
                </S.RecordItem>

                {record.prescription.length > 0 && (
                  <div>
                    <S.RecordLabel>Prescription:</S.RecordLabel>
                    <S.PrescriptionList>
                      {record.prescription.map((med) => (
                        <S.PrescriptionItem key={med.id}>
                          <S.MedicineName>{med.medicine}</S.MedicineName> -{" "}
                          {med.dosage}, {med.frequency}, {med.duration}
                          {med.instructions && (
                            <S.MedicineDetails>
                              {" "}
                              ({med.instructions})
                            </S.MedicineDetails>
                          )}
                        </S.PrescriptionItem>
                      ))}
                    </S.PrescriptionList>
                  </div>
                )}

                {record.notes && (
                  <S.RecordItem>
                    <S.RecordLabel>Notes:</S.RecordLabel> {record.notes}
                  </S.RecordItem>
                )}
              </S.RecordContent>
            </S.HistoryRecord>
          ))}
        </S.HistoryList>
      )}
    </S.HistoryContainer>
  );
};