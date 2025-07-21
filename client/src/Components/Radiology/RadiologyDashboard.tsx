import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Eye,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  FileText,
  Search,
  Filter,
  Download,
  Zap,
  Activity,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  Brain
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

const StudiesSection = styled.div`
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

const StudyItem = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const StudyInfo = styled.div``;

const StudyName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
`;

const StudyDetails = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const StudyStatus = styled.div<{ status: string }>`
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
      case 'reading':
        return 'background: #dbeafe; color: #1e40af;';
      case 'reported':
        return 'background: #d1fae5; color: #065f46;';
      case 'critical':
        return 'background: #fee2e2; color: #991b1b;';
      case 'reviewed':
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

const WorklistSummary = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const WorklistItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

const WorklistType = styled.span`
  font-weight: 500;
  color: #1a202c;
`;

const WorklistCount = styled.span<{ priority: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.priority) {
      case 'high':
        return 'background: #fee2e2; color: #991b1b;';
      case 'medium':
        return 'background: #fef3c7; color: #92400e;';
      case 'low':
        return 'background: #d1fae5; color: #065f46;';
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

const RadiologyDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: "Pending Reads",
      value: "28",
      change: "+5 from yesterday",
      positive: false,
      icon: Clock,
      color: '#f59e0b',
    },
    {
      title: "Currently Reading",
      value: "6",
      change: "Active radiologists",
      positive: true,
      icon: Eye,
      color: '#3b82f6',
    },
    {
      title: "Reports Completed",
      value: "89",
      change: "+15% from yesterday",
      positive: true,
      icon: CheckCircle,
      color: '#10b981',
    },
    {
      title: "Critical Findings",
      value: "4",
      change: "Requires attention",
      positive: false,
      icon: AlertTriangle,
      color: '#ef4444',
    },
    {
      title: "Active Radiologists",
      value: "8",
      change: "All shifts covered",
      positive: true,
      icon: Users,
      color: '#8b5cf6',
    },
    {
      title: "Avg. Report Time",
      value: "18m",
      change: "-2min from yesterday",
      positive: true,
      icon: Activity,
      color: '#06b6d4',
    },
  ];

  const studies = [
    {
      id: 1,
      type: "CT Chest with Contrast",
      patient: "John Smith",
      time: "09:30 AM",
      status: "reading",
      radiologist: "Dr. Anderson"
    },
    {
      id: 2,
      type: "MRI Brain",
      patient: "Sarah Johnson",
      time: "10:15 AM",
      status: "pending",
      radiologist: "Unassigned"
    },
    {
      id: 3,
      type: "X-Ray Chest",
      patient: "Michael Brown",
      time: "08:45 AM",
      status: "critical",
      radiologist: "Dr. Smith"
    },
    {
      id: 4,
      type: "Ultrasound Abdomen",
      patient: "Emily Davis",
      time: "11:00 AM",
      status: "reported",
      radiologist: "Dr. Johnson"
    },
    {
      id: 5,
      type: "CT Abdomen/Pelvis",
      patient: "Robert Wilson",
      time: "09:00 AM",
      status: "reviewed",
      radiologist: "Dr. Brown"
    },
  ];

  const worklistSummary = [
    { type: "Emergency Studies", count: "12", priority: "high" },
    { type: "Inpatient Studies", count: "24", priority: "medium" },
    { type: "Outpatient Studies", count: "45", priority: "low" },
    { type: "Follow-up Studies", count: "18", priority: "low" },
  ];

  return (
    <DashboardContainer>
      <Header>
        <HeaderLeft>
          <WelcomeText>Good Morning, Radiology Team!</WelcomeText>
          <SubText>You have {studies.filter(s => s.status === 'pending').length} pending reads and {studies.filter(s => s.status === 'critical').length} critical findings today</SubText>
        </HeaderLeft>
        <HeaderRight>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search studies, patients..."
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
          <StudiesSection>
            <SectionHeader>
              <SectionTitle>Reading Worklist ({studies.length})</SectionTitle>
              <FilterButton>
                <Filter size={16} />
                Filter
              </FilterButton>
            </SectionHeader>
            {studies.map((study) => (
              <StudyItem key={study.id}>
                <StudyInfo>
                  <StudyName>{study.type}</StudyName>
                  <StudyDetails>Patient: {study.patient} • {study.time} • {study.radiologist}</StudyDetails>
                </StudyInfo>
                <StudyStatus status={study.status}>
                  {study.status === 'reading' && <Eye size={12} />}
                  {study.status === 'reported' && <CheckCircle size={12} />}
                  {study.status === 'pending' && <Clock size={12} />}
                  {study.status === 'critical' && <AlertTriangle size={12} />}
                  {study.status === 'reviewed' && <FileText size={12} />}
                  {study.status.toUpperCase()}
                </StudyStatus>
              </StudyItem>
            ))}
          </StudiesSection>

          <SidebarSection>
            <WorklistSummary>
              <SectionTitle style={{ marginBottom: '1rem' }}>Worklist Summary</SectionTitle>
              {worklistSummary.map((item, index) => (
                <WorklistItem key={index}>
                  <WorklistType>{item.type}</WorklistType>
                  <WorklistCount priority={item.priority}>
                    {item.count}
                  </WorklistCount>
                </WorklistItem>
              ))}
            </WorklistSummary>

            <QuickActions>
              <SectionTitle style={{ marginBottom: '1rem' }}>Quick Actions</SectionTitle>
              <ActionButton>
                <Eye size={16} />
                Open Viewer
              </ActionButton>
              <ActionButton>
                <FileText size={16} />
                Create Report
              </ActionButton>
              <ActionButton>
                <Download size={16} />
                Export Studies
              </ActionButton>
              <ActionButton>
                <Brain size={16} />
                AI Assistance
              </ActionButton>
              <ActionButton>
                <ImageIcon size={16} />
                Compare Studies
              </ActionButton>
              <ActionButton>
                <CalendarIcon size={16} />
                Schedule Review
              </ActionButton>
            </QuickActions>
          </SidebarSection>
        </ContentGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default RadiologyDashboard;