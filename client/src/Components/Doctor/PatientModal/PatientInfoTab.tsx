import React from "react";
import { Mail, Phone, Heart, AlertTriangle } from "lucide-react";
import { Patient } from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";

interface PatientInfoTabProps {
  patient: Patient;
}

export const PatientInfoTab: React.FC<PatientInfoTabProps> = ({ patient }) => (
  <S.InfoGrid>
    <S.InfoSection>
      <S.SectionTitle>Contact Information</S.SectionTitle>
      <S.InfoList>
        <S.InfoItem>
          <S.InfoIcon>
            <Mail className="w-5 h-5" />
          </S.InfoIcon>
          <S.InfoText>{patient.email}</S.InfoText>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoIcon>
            <Phone className="w-5 h-5" />
          </S.InfoIcon>
          <S.InfoText>{patient.phone}</S.InfoText>
        </S.InfoItem>
      </S.InfoList>
    </S.InfoSection>

    <S.InfoSection>
      <S.SectionTitle>Medical Information</S.SectionTitle>
      <S.InfoList>
        <S.InfoItem>
          <S.InfoIcon color="#ef4444">
            <Heart className="w-5 h-5" />
          </S.InfoIcon>
          <S.InfoText>
            Blood Group: {patient.bloodGroup || "Not specified"}
          </S.InfoText>
        </S.InfoItem>
        {patient.allergies && patient.allergies.length > 0 && (
          <S.InfoItem>
            <S.InfoIcon color="#eab308">
              <AlertTriangle className="w-5 h-5" />
            </S.InfoIcon>
            <div>
              <S.InfoText>Allergies:</S.InfoText>
              <S.AllergyList>
                {patient.allergies.map((allergy, index) => (
                  <S.AllergyItem key={index}>{allergy}</S.AllergyItem>
                ))}
              </S.AllergyList>
            </div>
          </S.InfoItem>
        )}
      </S.InfoList>
    </S.InfoSection>

    {patient.emergencyContact && (
      <div style={{ gridColumn: "1 / -1" }}>
        <S.EmergencyContact>
          <S.EmergencyTitle>Emergency Contact</S.EmergencyTitle>
          <S.EmergencyInfo>
            <S.EmergencyItem>
              <strong>Name:</strong> {patient.emergencyContact.name}
            </S.EmergencyItem>
            <S.EmergencyItem>
              <strong>Phone:</strong> {patient.emergencyContact.phone}
            </S.EmergencyItem>
            <S.EmergencyItem>
              <strong>Relation:</strong> {patient.emergencyContact.relation}
            </S.EmergencyItem>
          </S.EmergencyInfo>
        </S.EmergencyContact>
      </div>
    )}
  </S.InfoGrid>
);