import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Camera,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Monitor,
  Search,
  Filter,
  Download,
  Zap,
  Activity,
  Calendar as CalendarIcon,
  Settings
} from 'lucide-react';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const Header = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div``;

const WelcomeText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
`;

const SubText = styled.p`
  color: #64748b;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
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

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  width: 1rem;
  height: 1rem;
`;

const MainContent = styled.div`
  padding: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
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

const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLeft = styled.div``;

const StatTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin: 0 0 0.5rem 0;
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #1a202c;
  margin: 0;
`;

const StatChange = styled.p<{ positive: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  margin: 0.25rem 0 0 0;
`;

const StatIcon = styled.div<{ color: string }>`
  background: ${props => props.color};
  color: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ScansSection = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
`;

const FilterButton = styled.button`
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

const ScanItem = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const ScanInfo = styled.div``;

const ScanName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
`;

const ScanDetails = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const ScanStatus = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case 'scheduled':
        return 'background: #fef3c7; color: #92400e;';
      case 'in-progress':
        return 'background: #dbeafe; color: #1e40af;';
      case 'completed':
        return 'background: #d1fae5; color: #065f46;';
      case 'urgent':
        return 'background: #fee2e2; color: #991b1b;';
      case 'reviewing':
        return 'background: #e0e7ff; color: #3730a3;';
      default:
        return 'background: #f1f5f9; color: #475569;';
    }
  }}
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EquipmentStatus = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const EquipmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

const EquipmentName = styled.span`
  font-weight: 500;
  color: #1a202c;
`;

const EquipmentStatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case 'online':
        return 'background: #d1fae5; color: #065f46;';
      case 'maintenance':
        return 'background: #fef3c7; color: #92400e;';
      case 'offline':
        return 'background: #fee2e2; color: #991b1b;';
      default:
        return 'background: #f1f5f9; color: #475569;';
    }
  }}
`;

const QuickActions = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const ActionButton = styled.button`
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

const ImagingDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: "Scheduled Scans",
      value: "32",
      change: "+6 from yesterday",
      positive: true,
      icon: Clock,
      color: '#f59e0b',
    },
    {
      title: "Scans in Progress",
      value: "8",
      change: "Currently active",
      positive: true,
      icon: Activity,
      color: '#3b82f6',
    },
    {
      title: "Completed Today",
      value: "47",
      change: "+12% from yesterday",
      positive: true,
      icon: CheckCircle,
      color: '#10b981',
    },
    {
      title: "Urgent Scans",
      value: "3",
      change: "Requires attention",
      positive: false,
      icon: AlertTriangle,
      color: '#ef4444',
    },
    {
      title: "Active Technologists",
      value: "9",
      change: "All stations covered",
      positive: true,
      icon: Users,
      color: '#8b5cf6',
    },
    {
      title: "Equipment Uptime",
      value: "96%",
      change: "1 unit in maintenance",
      positive: true,
      icon: Monitor,
      color: '#06b6d4',
    },
  ];

  const scans = [
    {
      id: 1,
      type: "CT Chest",
      patient: "John Smith",
      time: "09:30 AM",
      status: "in-progress",
      room: "CT-1"
    },
    {
      id: 2,
      type: "MRI Brain",
      patient: "Sarah Johnson",
      time: "10:15 AM",
      status: "scheduled",
      room: "MRI-2"
    },
    {
      id: 3,
      type: "X-Ray Chest",
      patient: "Michael Brown",
      time: "08:45 AM",
      status: "urgent",
      room: "X-Ray-1"
    },
    {
      id: 4,
      type: "Ultrasound Abdomen",
      patient: "Emily Davis",
      time: "11:00 AM",
      status: "reviewing",
      room: "US-1"
    },
    {
      id: 5,
      type: "CT Abdomen",
      patient: "Robert Wilson",
      time: "09:00 AM",
      status: "completed",
      room: "CT-2"
    },
  ];

  const equipment = [
    { name: "CT Scanner 1", status: "online" },
    { name: "CT Scanner 2", status: "online" },
    { name: "MRI Unit 1", status: "maintenance" },
    { name: "MRI Unit 2", status: "online" },
    { name: "X-Ray Room 1", status: "online" },
    { name: "X-Ray Room 2", status: "online" },
    { name: "Ultrasound 1", status: "online" },
    { name: "Ultrasound 2", status: "online" },
  ];

  return (
    <DashboardContainer>
      <Header>
        <HeaderLeft>
          <WelcomeText>Good Morning, Imaging Team!</WelcomeText>
          <SubText>You have {scans.filter(s => s.status === 'scheduled').length} scheduled scans and {scans.filter(s => s.status === 'urgent').length} urgent scans today</SubText>
        </HeaderLeft>
        <HeaderRight>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search scans, patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </HeaderRight>
      </Header>

      <MainContent>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatContent>
                <StatLeft>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatValue>{stat.value}</StatValue>
                  <StatChange positive={stat.positive}>{stat.change}</StatChange>
                </StatLeft>
                <StatIcon color={stat.color}>
                  <stat.icon size={24} />
                </StatIcon>
              </StatContent>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <ScansSection>
            <SectionHeader>
              <SectionTitle>Today's Scan Schedule ({scans.length})</SectionTitle>
              <FilterButton>
                <Filter size={16} />
                Filter
              </FilterButton>
            </SectionHeader>
            {scans.map((scan) => (
              <ScanItem key={scan.id}>
                <ScanInfo>
                  <ScanName>{scan.type}</ScanName>
                  <ScanDetails>Patient: {scan.patient} • {scan.time} • Room: {scan.room}</ScanDetails>
                </ScanInfo>
                <ScanStatus status={scan.status}>
                  {scan.status === 'in-progress' && <Activity size={12} />}
                  {scan.status === 'completed' && <CheckCircle size={12} />}
                  {scan.status === 'scheduled' && <Clock size={12} />}
                  {scan.status === 'urgent' && <AlertTriangle size={12} />}
                  {scan.status === 'reviewing' && <Monitor size={12} />}
                  {scan.status.replace('-', ' ').toUpperCase()}
                </ScanStatus>
              </ScanItem>
            ))}
          </ScansSection>

          <SidebarSection>
            <EquipmentStatus>
              <SectionTitle style={{ marginBottom: '1rem' }}>Equipment Status</SectionTitle>
              {equipment.map((item, index) => (
                <EquipmentItem key={index}>
                  <EquipmentName>{item.name}</EquipmentName>
                  <EquipmentStatusBadge status={item.status}>
                    {item.status.toUpperCase()}
                  </EquipmentStatusBadge>
                </EquipmentItem>
              ))}
            </EquipmentStatus>

            <QuickActions>
              <SectionTitle style={{ marginBottom: '1rem' }}>Quick Actions</SectionTitle>
              <ActionButton>
                <Camera size={16} />
                Schedule Scan
              </ActionButton>
              <ActionButton>
                <Monitor size={16} />
                View Images
              </ActionButton>
              <ActionButton>
                <Download size={16} />
                Export Studies
              </ActionButton>
              <ActionButton>
                <Settings size={16} />
                Equipment Settings
              </ActionButton>
              <ActionButton>
                <CalendarIcon size={16} />
                Maintenance Schedule
              </ActionButton>
            </QuickActions>
          </SidebarSection>
        </ContentGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default ImagingDashboard;