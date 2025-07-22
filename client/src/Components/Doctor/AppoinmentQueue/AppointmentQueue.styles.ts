import styled from 'styled-components';

export const QueueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0.5px solid #cdcbcb;
  border-radius: 12px;
  padding: 15px;
`;

export const QueueHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const QueueTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #454546;
  margin: 0;
`;

export const QueueSubtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const EmptyMessage = styled.p`
  color: #6b7280;
  margin: 0;
`;

export const AppointmentCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PatientNumber = styled.div`
  flex-shrink: 0;
`;

export const NumberBadge = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NumberText = styled.span`
  color: #1d4ed8;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const PatientDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PatientHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const PatientName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid;
  text-transform: uppercase;

  ${props => {
    switch (props.status) {
      case 'waiting':
        return `
          background: #fef3c7;
          color: #92400e;
          border-color: #fde68a;
        `;
      case 'in-progress':
        return `
          background: #dbeafe;
          color: #1e40af;
          border-color: #bfdbfe;
        `;
      case 'completed':
        return `
          background: #d1fae5;
          color: #065f46;
          border-color: #a7f3d0;
        `;
      case 'cancelled':
        return `
          background: #fee2e2;
          color: #991b1b;
          border-color: #fecaca;
        `;
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          border-color: #d1d5db;
        `;
    }
  }}
`;

export const PriorityIcon = styled.div<{ priority: string }>`
  ${props => {
    switch (props.priority) {
      case 'high':
        return 'color: #dc2626;';
      case 'medium':
        return 'color: #ea580c;';
      case 'low':
        return 'color: #16a34a;';
      default:
        return 'color: #6b7280;';
    }
  }}
`;

export const PatientMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const MetaDivider = styled.span`
  color: #d1d5db;
`;

export const PriorityText = styled.span<{ priority: string }>`
  text-transform: capitalize;
  font-weight: 500;
  ${props => {
    switch (props.priority) {
      case 'high':
        return 'color: #dc2626;';
      case 'medium':
        return 'color: #ea580c;';
      case 'low':
        return 'color: #16a34a;';
      default:
        return 'color: #6b7280;';
    }
  }}
`;

export const ComplaintBox = styled.p`
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.5rem;
  background: #f9fafb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-bottom: 0;
`;

export const ComplaintLabel = styled.strong`
  font-weight: 600;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.variant === 'secondary' ? `
    background: #f3f4f6;
    color: #375148;
    
    &:hover {
      background: #e5e7eb;  
    }
  ` : `
    background: #6b7ca0;
    color: #ffffff;
    
    &:hover {
      background: #1d4ed8;
    }
  `}
`;