import React from "react";
import { Save } from "lucide-react";
import {PrescriptionForm} from './PrescriptionForm'
import {DiagnosticForm} from './DiagnosticForm'
import {
  Prescription,
  Diagnostic,
} from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";

interface NewConsultationTabProps {
  consultation: {
    complaint: string;
    diagnosis: string;
    notes: string;
    followUpDate: string;
  };
  prescriptions: Omit<Prescription, "id">[];
  diagnostics: Omit<Diagnostic, "id">[];
  updateConsultation: (field: string, value: string) => void;
  updatePrescription: (index: number, field: string, value: string) => void;
  removePrescription: (index: number) => void;
  addPrescription: () => void;
  updateDiagnostic: (
    index: number,
    field: string,
    value: string | boolean
  ) => void;
  removeDiagnostic: (index: number) => void;
  addDiagnostic: () => void;
  onSave: () => void;
  onClose: () => void;
}

export const NewConsultationTab: React.FC<NewConsultationTabProps> = ({
  consultation,
  prescriptions,
  diagnostics,
  updateConsultation,
  updatePrescription,
  removePrescription,
  addPrescription,
  updateDiagnostic,
  removeDiagnostic,
  addDiagnostic,
  onSave,
  onClose,
}) => (
  <S.ConsultationContainer>
    <S.ConsultationTitle>New Consultation</S.ConsultationTitle>

    <S.FormGroup>
      <S.Label>Chief Complaint</S.Label>
      <S.TextArea
        value={consultation.complaint}
        onChange={(e) => updateConsultation("complaint", e.target.value)}
        rows={3}
        placeholder="Patient's main complaint..."
      />
    </S.FormGroup>

    <S.FormGroup>
      <S.Label>Diagnosis</S.Label>
      <S.TextArea
        value={consultation.diagnosis}
        onChange={(e) => updateConsultation("diagnosis", e.target.value)}
        rows={3}
        placeholder="Your diagnosis..."
      />
    </S.FormGroup>

    <PrescriptionForm
      prescriptions={prescriptions}
      updatePrescription={updatePrescription}
      removePrescription={removePrescription}
      addPrescription={addPrescription}
    />

    <DiagnosticForm
      diagnostics={diagnostics}
      updateDiagnostic={updateDiagnostic}
      removeDiagnostic={removeDiagnostic}
      addDiagnostic={addDiagnostic}
    />

    <S.FormGrid>
      <S.FormGroup>
        <S.Label>Next Appointment Date (Optional)</S.Label>
        <S.Input
          type="date"
          value={consultation.followUpDate}
          onChange={(e) => updateConsultation("followUpDate", e.target.value)}
        />
      </S.FormGroup>
    </S.FormGrid>

    <S.FormGroup>
      <S.Label>Additional Notes</S.Label>
      <S.TextArea
        value={consultation.notes}
        onChange={(e) => updateConsultation("notes", e.target.value)}
        rows={3}
        placeholder="Any additional notes or observations..."
      />
    </S.FormGroup>

    <S.ActionButtons>
      <S.Button variant="secondary" onClick={onClose}>
        Cancel
      </S.Button>
      <S.Button variant="success" onClick={onSave}>
        <Save className="w-4 h-4" />
        <span>Save Consultation</span>
      </S.Button>
    </S.ActionButtons>
  </S.ConsultationContainer>
);