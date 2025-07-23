import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 64rem;
  max-height: 90vh;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  background: #374151;
  padding: 1.5rem;
  color: white;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PatientAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PatientImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const PatientDetails = styled.div``;

export const PatientName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const PatientMeta = styled.p`
  opacity: 0.9;
  margin: 0;
`;

export const CloseButton = styled.button`
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

export const TabsContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

export const TabsList = styled.nav`
  display: flex;
  gap: 2rem;
  padding: 0 1.5rem;
`;

export const Tab = styled.button<{ active: boolean }>`
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

export const ModalContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(90vh - 180px);
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoIcon = styled.div<{ color?: string }>`
  width: 1.25rem;
  height: 1.25rem;
  ${(props) => (props.color ? `color: ${props.color};` : "color: #9ca3af;")}
`;

export const InfoText = styled.span`
  color: #374151;
`;

export const AllergyList = styled.div`
  margin-left: 2rem;
`;

export const AllergyItem = styled.li`
  color: #6b7280;
`;

export const EmergencyContact = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const EmergencyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
`;

export const EmergencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EmergencyItem = styled.p`
  margin: 0;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HistoryTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const EmptyHistory = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const EmptyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

export const EmptyText = styled.p`
  color: #6b7280;
  margin: 0;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HistoryRecord = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

export const RecordHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const RecordDate = styled.h4`
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const FollowUpBadge = styled.span`
  font-size: 0.875rem;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const RecordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RecordItem = styled.p`
  margin: 0;
`;

export const RecordLabel = styled.strong`
  font-weight: 600;
`;

export const PrescriptionList = styled.ul`
  margin-left: 1rem;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PrescriptionItem = styled.li`
  font-size: 0.875rem;
`;

export const MedicineName = styled.strong`
  font-weight: 600;
`;

export const MedicineDetails = styled.span`
  color: #6b7280;
`;

export const ConsultationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ConsultationTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const TextArea = styled.textarea`
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

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const SectionLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const AddButton = styled.button`
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

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemCard = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const Input = styled.input`
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

export const Select = styled.select`
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

export const ItemFooter = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: between;
`;

export const ItemInstructions = styled.input`
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

export const RemoveButton = styled.button`
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

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const CheckboxLabel = styled.span`
  font-size: 0.875rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" | "success" }>`
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