import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const MainContent = styled.div`
  padding: 1.5rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  color: #6b7280;
  margin: 0;
`;

export const StatValue = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin: 0.5rem 0 0 0;
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

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Tab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  justify-content: center;

  ${props => props.active ? `
    background: #374151;
    color: white;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  ` : `
    background: transparent;
    color: #6b7280;
    &:hover {
      background: #f3f4f6;
      color: #374151;
    }
  `}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;