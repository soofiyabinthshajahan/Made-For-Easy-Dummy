import React from "react";

import { X,Plus} from "lucide-react";
import {
  Prescription,

} from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";

interface PrescriptionFormProps {
  prescriptions: Omit<Prescription, "id">[];
  updatePrescription: (index: number, field: string, value: string) => void;
  removePrescription: (index: number) => void;
  addPrescription: () => void;
}

export const PrescriptionForm: React.FC<PrescriptionFormProps> = ({
  prescriptions,
  updatePrescription,
  removePrescription,
  addPrescription,
}) => (
  <div>
    <S.SectionHeader>
      <S.SectionLabel>Prescriptions</S.SectionLabel>
      <S.AddButton onClick={addPrescription}>
        <Plus className="w-4 h-4" />
        <span>Add Medicine</span>
      </S.AddButton>
    </S.SectionHeader>

    <S.ItemsContainer>
      {prescriptions.map((prescription, index) => (
        <S.ItemCard key={index}>
          <S.ItemGrid>
            <S.Input
              type="text"
              placeholder="Medicine name"
              value={prescription.medicine}
              onChange={(e) =>
                updatePrescription(index, "medicine", e.target.value)
              }
            />
            <S.Input
              type="text"
              placeholder="Dosage (e.g., 500mg)"
              value={prescription.dosage}
              onChange={(e) =>
                updatePrescription(index, "dosage", e.target.value)
              }
            />
            <S.Input
              type="text"
              placeholder="Frequency (e.g., twice daily)"
              value={prescription.frequency}
              onChange={(e) =>
                updatePrescription(index, "frequency", e.target.value)
              }
            />
            <S.Input
              type="text"
              placeholder="Duration (e.g., 7 days)"
              value={prescription.duration}
              onChange={(e) =>
                updatePrescription(index, "duration", e.target.value)
              }
            />
          </S.ItemGrid>
          <S.ItemFooter>
            <S.ItemInstructions
              type="text"
              placeholder="Special instructions (optional)"
              value={prescription.instructions}
              onChange={(e) =>
                updatePrescription(index, "instructions", e.target.value)
              }
            />
            <S.RemoveButton onClick={() => removePrescription(index)}>
              <X className="w-4 h-4" />
            </S.RemoveButton>
          </S.ItemFooter>
        </S.ItemCard>
      ))}
    </S.ItemsContainer>
  </div>
);