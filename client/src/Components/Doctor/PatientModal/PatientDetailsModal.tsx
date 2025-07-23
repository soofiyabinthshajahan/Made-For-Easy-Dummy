import React, { useState } from "react";
import { X, User, Plus,Calendar } from "lucide-react";
import {
  Patient,
  MedicalHistory,
  Prescription,
  Diagnostic,
} from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";
import { PatientInfoTab } from "./PatientInfoTab";
import { MedicalHistoryTab } from "./MedicalHistoryTab";
import { NewConsultationTab } from "./NewConsultationTab";

interface PatientDetailsModalProps {
  patient: Patient;
  medicalHistory: MedicalHistory[];
  onClose: () => void;
  onAddRecord: (record: Omit<MedicalHistory, "id">) => void;
}

export const PatientDetailsModal: React.FC<PatientDetailsModalProps> = ({
  patient,
  medicalHistory,
  onClose,
  onAddRecord,
}) => {
  const [activeTab, setActiveTab] = useState<
    "info" | "history" | "new-consultation"
  >("info");
  const [consultation, setConsultation] = useState({
    complaint: "",
    diagnosis: "",
    notes: "",
    followUpDate: "",
  });
  const [prescriptions, setPrescriptions] = useState<
    Omit<Prescription, "id">[]
  >([]);
  const [diagnostics, setDiagnostics] = useState<Omit<Diagnostic, "id">[]>([]);

  const addPrescription = () => {
    setPrescriptions([
      ...prescriptions,
      {
        medicine: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
      },
    ]);
  };

  const updatePrescription = (index: number, field: string, value: string) => {
    const updated = prescriptions.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setPrescriptions(updated);
  };

  const removePrescription = (index: number) => {
    setPrescriptions(prescriptions.filter((_, i) => i !== index));
  };

  const addDiagnostic = () => {
    setDiagnostics([
      ...diagnostics,
      {
        name: "",
        type: "lab",
        instructions: "",
        urgent: false,
      },
    ]);
  };

  const updateDiagnostic = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updated = diagnostics.map((d, i) =>
      i === index ? { ...d, [field]: value } : d
    );
    setDiagnostics(updated);
  };

  const removeDiagnostic = (index: number) => {
    setDiagnostics(diagnostics.filter((_, i) => i !== index));
  };

  const handleSaveConsultation = () => {
    const prescriptionsWithId: Prescription[] = prescriptions.map(
      (p, index) => ({
        ...p,
        id: `${Date.now()}-${index}`,
      })
    );

    const newRecord: Omit<MedicalHistory, "id"> = {
      patientId: patient.id,
      date: new Date().toISOString(),
      complaint: consultation.complaint,
      diagnosis: consultation.diagnosis,
      prescription: prescriptionsWithId,
      notes: consultation.notes,
      doctorId: "doctor-1",
      followUpDate: consultation.followUpDate || undefined,
    };

    onAddRecord(newRecord);
    onClose();
  };

  const updateConsultation = (field: string, value: string) => {
    setConsultation({
      ...consultation,
      [field]: value,
    });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "info":
        return <PatientInfoTab patient={patient} />;
      case "history":
        return <MedicalHistoryTab medicalHistory={medicalHistory} />;
      case "new-consultation":
        return (
          <NewConsultationTab
            consultation={consultation}
            prescriptions={prescriptions}
            diagnostics={diagnostics}
            updateConsultation={updateConsultation}
            updatePrescription={updatePrescription}
            removePrescription={removePrescription}
            addPrescription={addPrescription}
            updateDiagnostic={updateDiagnostic}
            removeDiagnostic={removeDiagnostic}
            addDiagnostic={addDiagnostic}
            onSave={handleSaveConsultation}
            onClose={onClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.HeaderContent>
            <S.PatientInfo>
              <S.PatientAvatar>
                {patient.profileImage ? (
                  <S.PatientImage
                    src={patient.profileImage}
                    alt={`${patient.firstName} ${patient.lastName}`}
                  />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </S.PatientAvatar>
              <S.PatientDetails>
                <S.PatientName>
                  {patient.firstName} {patient.lastName}
                </S.PatientName>
                <S.PatientMeta>
                  {patient.age} years • {patient.gender} •{" "}
                  {patient.bloodGroup || "Blood group not specified"}
                </S.PatientMeta>
              </S.PatientDetails>
            </S.PatientInfo>
            <S.CloseButton onClick={onClose}>
              <X className="w-6 h-6" />
            </S.CloseButton>
          </S.HeaderContent>
        </S.ModalHeader>

        <S.TabsContainer>
          <S.TabsList>
            {[
              { id: "info", label: "Patient Info", icon: User },
              { id: "history", label: "Medical History", icon: Calendar },
              { id: "new-consultation", label: "New Consultation", icon: Plus },
            ].map((tab) => (
              <S.Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as any)}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </S.Tab>
            ))}
          </S.TabsList>
        </S.TabsContainer>

        <S.ModalContent>{renderActiveTab()}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};