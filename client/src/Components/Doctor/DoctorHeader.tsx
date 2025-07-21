// DashboardHeader.tsx
import React from 'react';
import styled from 'styled-components';
import { Search, Settings, Bell, Plus, LogOut } from 'lucide-react';

interface Props {
  waitingCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleLogout: () => void;
}

const Header = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderContent = styled.div`
  padding: 1rem 1.5rem;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div``;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: transparent;
  border: 1px solid gray;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding: 0.25rem;
  color: #6b7280;

  &:hover {
    color: #111827;
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 550px;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.variant === 'secondary' ? `
    background: #6b7280;
    color: white;
    &:hover {
      background: #374151;
    }
  ` : `
    background: #546385;
    color: white;
    &:hover {
      background: #1d4ed8;
    }
  `}
`;

const DashboardHeader: React.FC<Props> = ({
  waitingCount,
  searchTerm,
  setSearchTerm,
  handleLogout,
}) => {
  return (
    <Header>
      <HeaderContent>
        <HeaderTop>
          <HeaderLeft>
            <HeaderTitle>Good Morning, Dr. Andreas!</HeaderTitle>
            <HeaderSubtitle>
              I hope you're in a good mood because there are {waitingCount} patients waiting for you
            </HeaderSubtitle>
          </HeaderLeft>
          <HeaderRight>
            <SearchContainer>
              <SearchIcon>
                <Search className="w-4 h-4" />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
            <IconButton><Settings className="w-5 h-5" /></IconButton>
            <IconButton><Bell className="w-5 h-5" /></IconButton>
            <Button>
              <Plus className="w-4 h-4" />
              Add Patient
            </Button>
            <Button variant="secondary" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </HeaderRight>
        </HeaderTop>
      </HeaderContent>
    </Header>
  );
};

export default DashboardHeader;
