import React, { useState } from "react";
import styled from "styled-components";
import {
  X,
  User,
  Phone,
  Mail,
  Calendar,
  Heart,
  AlertTriangle,
  Plus,
  Save,
  Clock,
} from "lucide-react";
import {
  Patient,
  MedicalHistory,
  Prescription,
  Diagnostic,
} from "../Types/Doctor";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 64rem;
  max-height: 90vh;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background: #374151;
  padding: 1.5rem;
  color: white;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PatientAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PatientImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const PatientDetails = styled.div``;

const PatientName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const PatientMeta = styled.p`
  opacity: 0.9;
  margin: 0;
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TabsContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

const TabsList = styled.nav`
  display: flex;
  gap: 2rem;
  padding: 0 1.5rem;
`;

const Tab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  ${(props) =>
    props.active
      ? `
    color: #2563eb;
    border-bottom-color: #2563eb;
  `
      : `
    color: #6b7280;
    
    &:hover {
      color: #374151;
    }
  `}
`;

const ModalContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(90vh - 180px);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoIcon = styled.div<{ color?: string }>`
  width: 1.25rem;
  height: 1.25rem;
  ${(props) => (props.color ? `color: ${props.color};` : "color: #9ca3af;")}
`;

const InfoText = styled.span`
  color: #374151;
`;

const AllergyList = styled.div`
  margin-left: 2rem;
`;

const AllergyItem = styled.li`
  color: #6b7280;
`;

const EmergencyContact = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const EmergencyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
`;

const EmergencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmergencyItem = styled.p`
  margin: 0;
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HistoryTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const EmptyHistory = styled.div`
  text-align: center;
  padding: 2rem;
`;

const EmptyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

const EmptyText = styled.p`
  color: #6b7280;
  margin: 0;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HistoryRecord = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

const RecordHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const RecordDate = styled.h4`
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const FollowUpBadge = styled.span`
  font-size: 0.875rem;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const RecordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecordItem = styled.p`
  margin: 0;
`;

const RecordLabel = styled.strong`
  font-weight: 600;
`;

const PrescriptionList = styled.ul`
  margin-left: 1rem;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const PrescriptionItem = styled.li`
  font-size: 0.875rem;
`;

const MedicineName = styled.strong`
  font-weight: 600;
`;

const MedicineDetails = styled.span`
  color: #6b7280;
`;

const ConsultationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ConsultationTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const SectionLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemCard = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Input = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Select = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }
`;

const ItemFooter = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: between;
`;

const ItemInstructions = styled.input`
  flex: 1;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const RemoveButton = styled.button`
  margin-left: 0.5rem;
  color: #dc2626;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #991b1b;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.span`
  font-size: 0.875rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const Button = styled.button<{ variant?: "primary" | "secondary" | "success" }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background: #f3f4f6;
          color: #374151;
          
          &:hover {
            background: #e5e7eb;
          }
        `;
      case "success":
        return `
           background: #374151;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.5rem;
          
          &:hover {
            background: #1d4ed8;
          }
        `;
      default:
        return `
          background: #374151;
           color: white;
          
          &:hover {
            background: #1d4ed8;
          }
        `;
    }
  }}
`;

interface PatientDetailsModalProps {
  patient: Patient;
  medicalHistory: MedicalHistory[];
  onClose: () => void;
  onAddRecord: (record: Omit<MedicalHistory, "id">) => void;
}

const PatientDetailsModal: React.FC<PatientDetailsModalProps> = ({
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

  const sortedHistory = medicalHistory.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <HeaderContent>
            <PatientInfo>
              <PatientAvatar>
                {patient.profileImage ? (
                  <PatientImage
                    src={patient.profileImage}
                    alt={`${patient.firstName} ${patient.lastName}`}
                  />
                ) : (
                  <User className="w-8 h-8 text-white" />
                )}
              </PatientAvatar>
              <PatientDetails>
                <PatientName>
                  {patient.firstName} {patient.lastName}
                </PatientName>
                <PatientMeta>
                  {patient.age} years • {patient.gender} •{" "}
                  {patient.bloodGroup || "Blood group not specified"}
                </PatientMeta>
              </PatientDetails>
            </PatientInfo>
            <CloseButton onClick={onClose}>
              <X className="w-6 h-6" />
            </CloseButton>
          </HeaderContent>
        </ModalHeader>

        <TabsContainer>
          <TabsList>
            {[
              { id: "info", label: "Patient Info", icon: User },
              { id: "history", label: "Medical History", icon: Calendar },
              { id: "new-consultation", label: "New Consultation", icon: Plus },
            ].map((tab) => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as any)}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </Tab>
            ))}
          </TabsList>
        </TabsContainer>

        <ModalContent>
          {activeTab === "info" && (
            <InfoGrid>
              <InfoSection>
                <SectionTitle>Contact Information</SectionTitle>
                <InfoList>
                  <InfoItem>
                    <InfoIcon>
                      <Mail className="w-5 h-5" />
                    </InfoIcon>
                    <InfoText>{patient.email}</InfoText>
                  </InfoItem>
                  <InfoItem>
                    <InfoIcon>
                      <Phone className="w-5 h-5" />
                    </InfoIcon>
                    <InfoText>{patient.phone}</InfoText>
                  </InfoItem>
                </InfoList>
              </InfoSection>

              <InfoSection>
                <SectionTitle>Medical Information</SectionTitle>
                <InfoList>
                  <InfoItem>
                    <InfoIcon color="#ef4444">
                      <Heart className="w-5 h-5" />
                    </InfoIcon>
                    <InfoText>
                      Blood Group: {patient.bloodGroup || "Not specified"}
                    </InfoText>
                  </InfoItem>
                  {patient.allergies && patient.allergies.length > 0 && (
                    <InfoItem>
                      <InfoIcon color="#eab308">
                        <AlertTriangle className="w-5 h-5" />
                      </InfoIcon>
                      <div>
                        <InfoText>Allergies:</InfoText>
                        <AllergyList>
                          {patient.allergies.map((allergy, index) => (
                            <AllergyItem key={index}>{allergy}</AllergyItem>
                          ))}
                        </AllergyList>
                      </div>
                    </InfoItem>
                  )}
                </InfoList>
              </InfoSection>

              {patient.emergencyContact && (
                <div style={{ gridColumn: "1 / -1" }}>
                  <EmergencyContact>
                    <EmergencyTitle>Emergency Contact</EmergencyTitle>
                    <EmergencyInfo>
                      <EmergencyItem>
                        <strong>Name:</strong> {patient.emergencyContact.name}
                      </EmergencyItem>
                      <EmergencyItem>
                        <strong>Phone:</strong> {patient.emergencyContact.phone}
                      </EmergencyItem>
                      <EmergencyItem>
                        <strong>Relation:</strong>{" "}
                        {patient.emergencyContact.relation}
                      </EmergencyItem>
                    </EmergencyInfo>
                  </EmergencyContact>
                </div>
              )}
            </InfoGrid>
          )}

          {activeTab === "history" && (
            <HistoryContainer>
              <HistoryTitle>Medical History</HistoryTitle>

              {sortedHistory.length === 0 ? (
                <EmptyHistory>
                  <EmptyIcon>
                    <Calendar className="w-12 h-12" />
                  </EmptyIcon>
                  <EmptyText>No medical history available</EmptyText>
                </EmptyHistory>
              ) : (
                <HistoryList>
                  {sortedHistory.map((record) => (
                    <HistoryRecord key={record.id}>
                      <RecordHeader>
                        <RecordDate>
                          {new Date(record.date).toLocaleDateString()}
                        </RecordDate>
                        {record.followUpDate && (
                          <FollowUpBadge>
                            Follow-up:{" "}
                            {new Date(record.followUpDate).toLocaleDateString()}
                          </FollowUpBadge>
                        )}
                      </RecordHeader>

                      <RecordContent>
                        <RecordItem>
                          <RecordLabel>Complaint:</RecordLabel>{" "}
                          {record.complaint}
                        </RecordItem>
                        <RecordItem>
                          <RecordLabel>Diagnosis:</RecordLabel>{" "}
                          {record.diagnosis}
                        </RecordItem>

                        {record.prescription.length > 0 && (
                          <div>
                            <RecordLabel>Prescription:</RecordLabel>
                            <PrescriptionList>
                              {record.prescription.map((med) => (
                                <PrescriptionItem key={med.id}>
                                  <MedicineName>{med.medicine}</MedicineName> -{" "}
                                  {med.dosage}, {med.frequency}, {med.duration}
                                  {med.instructions && (
                                    <MedicineDetails>
                                      {" "}
                                      ({med.instructions})
                                    </MedicineDetails>
                                  )}
                                </PrescriptionItem>
                              ))}
                            </PrescriptionList>
                          </div>
                        )}

                        {record.notes && (
                          <RecordItem>
                            <RecordLabel>Notes:</RecordLabel> {record.notes}
                          </RecordItem>
                        )}
                      </RecordContent>
                    </HistoryRecord>
                  ))}
                </HistoryList>
              )}
            </HistoryContainer>
          )}

          {activeTab === "new-consultation" && (
            <ConsultationContainer>
              <ConsultationTitle>New Consultation</ConsultationTitle>

              <FormGroup>
                <Label>Chief Complaint</Label>
                <TextArea
                  value={consultation.complaint}
                  onChange={(e) =>
                    setConsultation({
                      ...consultation,
                      complaint: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Patient's main complaint..."
                />
              </FormGroup>

              <FormGroup>
                <Label>Diagnosis</Label>
                <TextArea
                  value={consultation.diagnosis}
                  onChange={(e) =>
                    setConsultation({
                      ...consultation,
                      diagnosis: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Your diagnosis..."
                />
              </FormGroup>

              <div>
                <SectionHeader>
                  <SectionLabel>Prescriptions</SectionLabel>
                  <AddButton onClick={addPrescription}>
                    <Plus className="w-4 h-4" />
                    <span>Add Medicine</span>
                  </AddButton>
                </SectionHeader>

                <ItemsContainer>
                  {prescriptions.map((prescription, index) => (
                    <ItemCard key={index}>
                      <ItemGrid>
                        <Input
                          type="text"
                          placeholder="Medicine name"
                          value={prescription.medicine}
                          onChange={(e) =>
                            updatePrescription(
                              index,
                              "medicine",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          type="text"
                          placeholder="Dosage (e.g., 500mg)"
                          value={prescription.dosage}
                          onChange={(e) =>
                            updatePrescription(index, "dosage", e.target.value)
                          }
                        />
                        <Input
                          type="text"
                          placeholder="Frequency (e.g., twice daily)"
                          value={prescription.frequency}
                          onChange={(e) =>
                            updatePrescription(
                              index,
                              "frequency",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          type="text"
                          placeholder="Duration (e.g., 7 days)"
                          value={prescription.duration}
                          onChange={(e) =>
                            updatePrescription(
                              index,
                              "duration",
                              e.target.value
                            )
                          }
                        />
                      </ItemGrid>
                      <ItemFooter>
                        <ItemInstructions
                          type="text"
                          placeholder="Special instructions (optional)"
                          value={prescription.instructions}
                          onChange={(e) =>
                            updatePrescription(
                              index,
                              "instructions",
                              e.target.value
                            )
                          }
                        />
                        <RemoveButton onClick={() => removePrescription(index)}>
                          <X className="w-4 h-4" />
                        </RemoveButton>
                      </ItemFooter>
                    </ItemCard>
                  ))}
                </ItemsContainer>
              </div>

              <div>
                <SectionHeader>
                  <SectionLabel>Diagnostic Tests</SectionLabel>
                  <AddButton onClick={addDiagnostic}>
                    <Plus className="w-4 h-4" />
                    <span>Add Test</span>
                  </AddButton>
                </SectionHeader>

                <ItemsContainer>
                  {diagnostics.map((diagnostic, index) => (
                    <ItemCard key={index}>
                      <ItemGrid>
                        <Input
                          type="text"
                          placeholder="Test name"
                          value={diagnostic.name}
                          onChange={(e) =>
                            updateDiagnostic(index, "name", e.target.value)
                          }
                        />
                        <Select
                          value={diagnostic.type}
                          onChange={(e) =>
                            updateDiagnostic(index, "type", e.target.value)
                          }
                        >
                          <option value="lab">Lab Test</option>
                          <option value="imaging">Imaging</option>
                          <option value="other">Other</option>
                        </Select>
                      </ItemGrid>
                      <ItemFooter>
                        <ItemInstructions
                          type="text"
                          placeholder="Instructions"
                          value={diagnostic.instructions}
                          onChange={(e) =>
                            updateDiagnostic(
                              index,
                              "instructions",
                              e.target.value
                            )
                          }
                        />
                        <CheckboxContainer>
                          <Checkbox
                            type="checkbox"
                            checked={diagnostic.urgent}
                            onChange={(e) =>
                              updateDiagnostic(
                                index,
                                "urgent",
                                e.target.checked
                              )
                            }
                          />
                          <CheckboxLabel>Urgent</CheckboxLabel>
                        </CheckboxContainer>
                        <RemoveButton onClick={() => removeDiagnostic(index)}>
                          <X className="w-4 h-4" />
                        </RemoveButton>
                      </ItemFooter>
                    </ItemCard>
                  ))}
                </ItemsContainer>
              </div>

              <FormGrid>
                <FormGroup>
                  <Label>Next Appointment Date (Optional)</Label>
                  <Input
                    type="date"
                    value={consultation.followUpDate}
                    onChange={(e) =>
                      setConsultation({
                        ...consultation,
                        followUpDate: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label>Additional Notes</Label>
                <TextArea
                  value={consultation.notes}
                  onChange={(e) =>
                    setConsultation({ ...consultation, notes: e.target.value })
                  }
                  rows={3}
                  placeholder="Any additional notes or observations..."
                />
              </FormGroup>

              <ActionButtons>
                <Button variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="success" onClick={handleSaveConsultation}>
                  <Save className="w-4 h-4" />
                  <span>Save Consultation</span>
                </Button>
              </ActionButtons>
            </ConsultationContainer>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PatientDetailsModal;
