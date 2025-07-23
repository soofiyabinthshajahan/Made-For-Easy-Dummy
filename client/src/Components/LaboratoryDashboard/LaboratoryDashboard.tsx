import React, { useState } from 'react';
import {
  DashboardContainer,Header,HeaderLeft,WelcomeText,SubText,HeaderRight,SearchContainer,SearchInput,SearchIcon,MainContent,StatsGrid,StatCard,
  StatContent,StatLeft, StatTitle, StatValue, StatChange, StatIcon, ContentGrid, TestsSection, SectionHeader, SectionTitle, FilterButton, TestItem,
  TestInfo,TestName, TestDetails, TestStatus, SidebarSection, QuickActions, ActionButton
} from './DashboardStyles';
import {
  TestTube, Clock, CheckCircle, AlertTriangle, Users, FileText, Filter, Download, Microscope, Activity, Calendar as CalendarIcon, TrendingUp
} from 'lucide-react';

const LaboratoryDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: "Pending Tests",
      value: "24",
      change: "+12% from yesterday",
      positive: false,
      icon: Clock,
      color: '#f59e0b',
    },
    {
      title: "Tests in Progress",
      value: "18",
      change: "+5% from yesterday",
      positive: true,
      icon: Activity,
      color: '#3b82f6',
    },
    {
      title: "Completed Today",
      value: "156",
      change: "+8% from yesterday",
      positive: true,
      icon: CheckCircle,
      color: '#10b981',
    },
    {
      title: "Urgent Tests",
      value: "7",
      change: "-2 from yesterday",
      positive: true,
      icon: AlertTriangle,
      color: '#ef4444',
    },
    {
      title: "Active Technicians",
      value: "12",
      change: "All present today",
      positive: true,
      icon: Users,
      color: '#8b5cf6',
    },
    {
      title: "Equipment Status",
      value: "98%",
      change: "All systems operational",
      positive: true,
      icon: Microscope,
      color: '#06b6d4',
    },
  ];

  const tests = [
    {
      id: 1,
      name: "Complete Blood Count",
      patient: "John Smith",
      time: "09:30 AM",
      status: "in-progress",
      priority: "Normal"
    },
    {
      id: 2,
      name: "Lipid Panel",
      patient: "Sarah Johnson",
      time: "10:15 AM",
      status: "pending",
      priority: "Normal"
    },
    {
      id: 3,
      name: "Cardiac Enzymes",
      patient: "Michael Brown",
      time: "08:45 AM",
      status: "urgent",
      priority: "Urgent"
    },
    {
      id: 4,
      name: "Liver Function Test",
      patient: "Emily Davis",
      time: "11:00 AM",
      status: "completed",
      priority: "Normal"
    },
    {
      id: 5,
      name: "Thyroid Panel",
      patient: "Robert Wilson",
      time: "09:00 AM",
      status: "in-progress",
      priority: "Normal"
    },
  ];

  return (
    <DashboardContainer>
      <Header>
        <HeaderLeft>
          <WelcomeText>Good Morning, Lab Team!</WelcomeText>
          <SubText>You have {tests.filter(t => t.status === 'pending').length} pending tests and {tests.filter(t => t.status === 'urgent').length} urgent tests today</SubText>
        </HeaderLeft>
        <HeaderRight>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search tests, patients..."
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
          <TestsSection>
            <SectionHeader>
              <SectionTitle>Today's Test Queue ({tests.length})</SectionTitle>
              <FilterButton>
                <Filter size={16} />
                Filter
              </FilterButton>
            </SectionHeader>
            {tests.map((test) => (
              <TestItem key={test.id}>
                <TestInfo>
                  <TestName>{test.name}</TestName>
                  <TestDetails>Patient: {test.patient} • {test.time} • {test.priority} Priority</TestDetails>
                </TestInfo>
                <TestStatus status={test.status}>
                  {test.status === 'in-progress' && <Activity size={12} />}
                  {test.status === 'completed' && <CheckCircle size={12} />}
                  {test.status === 'pending' && <Clock size={12} />}
                  {test.status === 'urgent' && <AlertTriangle size={12} />}
                  {test.status.replace('-', ' ').toUpperCase()}
                </TestStatus>
              </TestItem>
            ))}
          </TestsSection>

          <SidebarSection>
            <QuickActions>
              <SectionTitle style={{ marginBottom: '1rem' }}>Quick Actions</SectionTitle>
              <ActionButton>
                <TestTube size={16} />
                Add New Test
              </ActionButton>
              <ActionButton>
                <FileText size={16} />
                Generate Report
              </ActionButton>
              <ActionButton>
                <Download size={16} />
                Export Results
              </ActionButton>
              <ActionButton>
                <TrendingUp size={16} />
                View Analytics
              </ActionButton>
              <ActionButton>
                <CalendarIcon size={16} />
                Schedule Maintenance
              </ActionButton>
            </QuickActions>
          </SidebarSection>
        </ContentGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default LaboratoryDashboard;