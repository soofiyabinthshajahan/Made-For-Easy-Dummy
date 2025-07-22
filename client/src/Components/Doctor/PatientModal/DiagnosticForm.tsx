import React from "react";
import { X,Plus, } from "lucide-react";
import {
  
  Diagnostic,
} from "../../Types/Doctor";
import * as S from "./PatientDetailsModal.styles";

interface DiagnosticFormProps {
  diagnostics: Omit<Diagnostic, "id">[];
  updateDiagnostic: (
    index: number,
    field: string,
    value: string | boolean
  ) => void;
  removeDiagnostic: (index: number) => void;
  addDiagnostic: () => void;
}

export const DiagnosticForm: React.FC<DiagnosticFormProps> = ({
  diagnostics,
  updateDiagnostic,
  removeDiagnostic,
  addDiagnostic,
}) => (
  <div>
    <S.SectionHeader>
      <S.SectionLabel>Diagnostic Tests</S.SectionLabel>
      <S.AddButton onClick={addDiagnostic}>
        <Plus className="w-4 h-4" />
        <span>Add Test</span>
      </S.AddButton>
    </S.SectionHeader>

    <S.ItemsContainer>
      {diagnostics.map((diagnostic, index) => (
        <S.ItemCard key={index}>
          <S.ItemGrid>
            <S.Input
              type="text"
              placeholder="Test name"
              value={diagnostic.name}
              onChange={(e) =>
                updateDiagnostic(index, "name", e.target.value)
              }
            />
            <S.Select
              value={diagnostic.type}
              onChange={(e) =>
                updateDiagnostic(index, "type", e.target.value)
              }
            >
              <option value="lab">Lab Test</option>
              <option value="imaging">Imaging</option>
              <option value="other">Other</option>
            </S.Select>
          </S.ItemGrid>
          <S.ItemFooter>
            <S.ItemInstructions
              type="text"
              placeholder="Instructions"
              value={diagnostic.instructions}
              onChange={(e) =>
                updateDiagnostic(index, "instructions", e.target.value)
              }
            />
            <S.CheckboxContainer>
              <S.Checkbox
                type="checkbox"
                checked={diagnostic.urgent}
                onChange={(e) =>
                  updateDiagnostic(index, "urgent", e.target.checked)
                }
              />
              <S.CheckboxLabel>Urgent</S.CheckboxLabel>
            </S.CheckboxContainer>
            <S.RemoveButton onClick={() => removeDiagnostic(index)}>
              <X className="w-4 h-4" />
            </S.RemoveButton>
          </S.ItemFooter>
        </S.ItemCard>
      ))}
    </S.ItemsContainer>
  </div>
);