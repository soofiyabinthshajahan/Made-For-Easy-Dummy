import styled from 'styled-components';
import { FileText, User } from 'lucide-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

export const SortInfo = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PatientCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const PatientInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const AvatarContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserIcon = styled(User)`
  width: 1.5rem;
  height: 1.5rem;
  color: #15803d;
`;

export const PatientDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PatientName = styled.h3`
  font-weight: 600;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PatientBasicInfo = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const InfoSection = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
`;

export const InfoIcon = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

export const DiagnosisBox = styled.div`
  background: #f9fafb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

export const DiagnosisLabel = styled.p`
  font-size: 0.75rem;
  color: #374151;
  font-weight: 500;
`;

export const DiagnosisText = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FollowUpBox = styled.div`
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

export const FollowUpText = styled.p`
  font-size: 0.75rem;
  color: #1d4ed8;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

export const ViewHistoryButton = styled.button`
  width: 100%;
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1d4ed8;
  }
`;

export const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  text-align: center;
`;

export const EmptyStateIcon = styled(FileText)`
  width: 3rem;
  height: 3rem;
  color: #d1d5db;
  margin: 0 auto 1rem;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const EmptyStateText = styled.p`
  color: #6b7280;
`;