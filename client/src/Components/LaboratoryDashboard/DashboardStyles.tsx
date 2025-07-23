import styled from 'styled-components';
import {
  TestTube,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  FileText,
  Search,
  Filter,
  Download,
  Microscope,
  Activity,
  Calendar as CalendarIcon,
  TrendingUp
} from 'lucide-react';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

export const Header = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div``;

export const WelcomeText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
`;

export const SubText = styled.p`
  color: #64748b;
  margin: 0;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  width: 300px;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  width: 1rem;
  height: 1rem;
`;

export const MainContent = styled.div`
  padding: 2rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatLeft = styled.div``;

export const StatTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin: 0 0 0.5rem 0;
`;

export const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #1a202c;
  margin: 0;
`;

export const StatChange = styled.p<{ positive: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  margin: 0.25rem 0 0 0;
`;

export const StatIcon = styled.div<{ color: string }>`
  background: ${props => props.color};
  color: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const TestsSection = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SectionHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

export const TestItem = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const TestInfo = styled.div``;

export const TestName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
`;

export const TestDetails = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

export const TestStatus = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case 'pending':
        return 'background: #fef3c7; color: #92400e;';
      case 'in-progress':
        return 'background: #dbeafe; color: #1e40af;';
      case 'completed':
        return 'background: #d1fae5; color: #065f46;';
      case 'urgent':
        return 'background: #fee2e2; color: #991b1b;';
      default:
        return 'background: #f1f5f9; color: #475569;';
    }
  }}
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const QuickActions = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const ActionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: #f8fafc;
    border-color: #3b82f6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;