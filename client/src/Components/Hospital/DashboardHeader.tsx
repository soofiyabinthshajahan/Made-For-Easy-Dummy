import React from 'react';
import { Bell, Settings, LogOut, User } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  HospitalInfo,
  HospitalName,
  ContactInfo,
  HeaderActions,
  ActionButton,
  NotificationBadge
} from'../Shared/DashboardStyledComponent';

interface DashboardHeaderProps {
  hospitalName: string;
  contactPerson: string;
  onLogout: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  hospitalName, 
  contactPerson, 
  onLogout 
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HospitalInfo>
          <HospitalName>{hospitalName}</HospitalName>
          <ContactInfo>
            <User size={16} />
            Welcome, {contactPerson}
          </ContactInfo>
        </HospitalInfo>
        
        <HeaderActions>
          <ActionButton>
            <Bell size={20} />
            <NotificationBadge>3</NotificationBadge>
          </ActionButton>
          
          <ActionButton>
            <Settings size={20} />
          </ActionButton>
          
          <ActionButton onClick={onLogout}>
            <LogOut size={20} />
          </ActionButton>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default DashboardHeader;