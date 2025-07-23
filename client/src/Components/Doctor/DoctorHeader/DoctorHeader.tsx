import React from 'react';
import { Search, Settings, Bell, Plus, LogOut } from 'lucide-react';
import * as S from './DashboardHeader.styles';

interface Props {
  waitingCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleLogout: () => void;
}

const DashboardHeader: React.FC<Props> = ({
  waitingCount,
  searchTerm,
  setSearchTerm,
  handleLogout,
}) => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.HeaderTop>
          <S.HeaderLeft>
            <S.HeaderTitle>Good Morning, Dr. Andreas!</S.HeaderTitle>
            <S.HeaderSubtitle>
              I hope you're in a good mood because there are {waitingCount} patients waiting for you
            </S.HeaderSubtitle>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.SearchContainer>
              <S.SearchIcon>
                <Search className="w-4 h-4" />
              </S.SearchIcon>
              <S.SearchInput
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </S.SearchContainer>
            <S.IconButton><Settings className="w-5 h-5" /></S.IconButton>
            <S.IconButton><Bell className="w-5 h-5" /></S.IconButton>
            <S.Button>
              <Plus className="w-4 h-4" />
              Add Patient
            </S.Button>
            <S.Button variant="secondary" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </S.Button>
          </S.HeaderRight>
        </S.HeaderTop>
      </S.HeaderContent>
    </S.Header>
  );
};

export default DashboardHeader;