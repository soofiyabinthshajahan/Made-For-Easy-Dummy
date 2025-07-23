import React, { useState } from 'react';
import {
  Eye,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  FileText,
  Search as SearchIcon,
  Filter,
  Download,
  Activity,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  Brain
} from 'lucide-react';
import * as S from './RadiologyDashboard.styles';

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
    <S.DashboardContainer>
      <S.Header>
        <S.HeaderLeft>
          <S.WelcomeText>Good Morning, Radiology Team!</S.WelcomeText>
          <S.SubText>You have {studies.filter(s => s.status === 'pending').length} pending reads and {studies.filter(s => s.status === 'critical').length} critical findings today</S.SubText>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.SearchContainer>
            <S.SearchIcon as={SearchIcon} />
            <S.SearchInput
              type="text"
              placeholder="Search studies, patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.SearchContainer>
        </S.HeaderRight>
      </S.Header>

      <S.MainContent>
        <S.StatsGrid>
          {stats.map((stat, index) => (
            <S.StatCard key={index}>
              <S.StatContent>
                <S.StatLeft>
                  <S.StatTitle>{stat.title}</S.StatTitle>
                  <S.StatValue>{stat.value}</S.StatValue>
                  <S.StatChange positive={stat.positive}>{stat.change}</S.StatChange>
                </S.StatLeft>
                <S.StatIcon color={stat.color}>
                  <stat.icon size={24} />
                </S.StatIcon>
              </S.StatContent>
            </S.StatCard>
          ))}
        </S.StatsGrid>

        <S.ContentGrid>
          <S.StudiesSection>
            <S.SectionHeader>
              <S.SectionTitle>Reading Worklist ({studies.length})</S.SectionTitle>
              <S.FilterButton>
                <Filter size={16} />
                Filter
              </S.FilterButton>
            </S.SectionHeader>
            {studies.map((study) => (
              <S.StudyItem key={study.id}>
                <S.StudyInfo>
                  <S.StudyName>{study.type}</S.StudyName>
                  <S.StudyDetails>Patient: {study.patient} • {study.time} • {study.radiologist}</S.StudyDetails>
                </S.StudyInfo>
                <S.StudyStatus status={study.status}>
                  {study.status === 'reading' && <Eye size={12} />}
                  {study.status === 'reported' && <CheckCircle size={12} />}
                  {study.status === 'pending' && <Clock size={12} />}
                  {study.status === 'critical' && <AlertTriangle size={12} />}
                  {study.status === 'reviewed' && <FileText size={12} />}
                  {study.status.toUpperCase()}
                </S.StudyStatus>
              </S.StudyItem>
            ))}
          </S.StudiesSection>

          <S.SidebarSection>
            <S.WorklistSummary>
              <S.SectionTitle style={{ marginBottom: '1rem' }}>Worklist Summary</S.SectionTitle>
              {worklistSummary.map((item, index) => (
                <S.WorklistItem key={index}>
                  <S.WorklistType>{item.type}</S.WorklistType>
                  <S.WorklistCount priority={item.priority}>
                    {item.count}
                  </S.WorklistCount>
                </S.WorklistItem>
              ))}
            </S.WorklistSummary>

            <S.QuickActions>
              <S.SectionTitle style={{ marginBottom: '1rem' }}>Quick Actions</S.SectionTitle>
              <S.ActionButton>
                <Eye size={16} />
                Open Viewer
              </S.ActionButton>
              <S.ActionButton>
                <FileText size={16} />
                Create Report
              </S.ActionButton>
              <S.ActionButton>
                <Download size={16} />
                Export Studies
              </S.ActionButton>
              <S.ActionButton>
                <Brain size={16} />
                AI Assistance
              </S.ActionButton>
              <S.ActionButton>
                <ImageIcon size={16} />
                Compare Studies
              </S.ActionButton>
              <S.ActionButton>
                <CalendarIcon size={16} />
                Schedule Review
              </S.ActionButton>
            </S.QuickActions>
          </S.SidebarSection>
        </S.ContentGrid>
      </S.MainContent>
    </S.DashboardContainer>
  );
};

export default RadiologyDashboard;