import React, { useState } from 'react';
import {
  Camera,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Monitor,
  Search as SearchIcon,
  Filter,
  Download,
  Activity,
  Calendar as CalendarIcon,
  Settings
} from 'lucide-react';
import * as S from './ImagingDashboard.style';

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
    <S.DashboardContainer>
      <S.Header>
        <S.HeaderLeft>
          <S.WelcomeText>Good Morning, Imaging Team!</S.WelcomeText>
          <S.SubText>You have {scans.filter(s => s.status === 'scheduled').length} scheduled scans and {scans.filter(s => s.status === 'urgent').length} urgent scans today</S.SubText>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.SearchContainer>
            <S.SearchIcon as={SearchIcon} />
            <S.SearchInput
              type="text"
              placeholder="Search scans, patients..."
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
          <S.ScansSection>
            <S.SectionHeader>
              <S.SectionTitle>Today's Scan Schedule ({scans.length})</S.SectionTitle>
              <S.FilterButton>
                <Filter size={16} />
                Filter
              </S.FilterButton>
            </S.SectionHeader>
            {scans.map((scan) => (
              <S.ScanItem key={scan.id}>
                <S.ScanInfo>
                  <S.ScanName>{scan.type}</S.ScanName>
                  <S.ScanDetails>Patient: {scan.patient} • {scan.time} • Room: {scan.room}</S.ScanDetails>
                </S.ScanInfo>
                <S.ScanStatus status={scan.status}>
                  {scan.status === 'in-progress' && <Activity size={12} />}
                  {scan.status === 'completed' && <CheckCircle size={12} />}
                  {scan.status === 'scheduled' && <Clock size={12} />}
                  {scan.status === 'urgent' && <AlertTriangle size={12} />}
                  {scan.status === 'reviewing' && <Monitor size={12} />}
                  {scan.status.replace('-', ' ').toUpperCase()}
                </S.ScanStatus>
              </S.ScanItem>
            ))}
          </S.ScansSection>

          <S.SidebarSection>
            <S.EquipmentStatus>
              <S.SectionTitle style={{ marginBottom: '1rem' }}>Equipment Status</S.SectionTitle>
              {equipment.map((item, index) => (
                <S.EquipmentItem key={index}>
                  <S.EquipmentName>{item.name}</S.EquipmentName>
                  <S.EquipmentStatusBadge status={item.status}>
                    {item.status.toUpperCase()}
                  </S.EquipmentStatusBadge>
                </S.EquipmentItem>
              ))}
            </S.EquipmentStatus>

            <S.QuickActions>
              <S.SectionTitle style={{ marginBottom: '1rem' }}>Quick Actions</S.SectionTitle>
              <S.ActionButton>
                <Camera size={16} />
                Schedule Scan
              </S.ActionButton>
              <S.ActionButton>
                <Monitor size={16} />
                View Images
              </S.ActionButton>
              <S.ActionButton>
                <Download size={16} />
                Export Studies
              </S.ActionButton>
              <S.ActionButton>
                <Settings size={16} />
                Equipment Settings
              </S.ActionButton>
              <S.ActionButton>
                <CalendarIcon size={16} />
                Maintenance Schedule
              </S.ActionButton>
            </S.QuickActions>
          </S.SidebarSection>
        </S.ContentGrid>
      </S.MainContent>
    </S.DashboardContainer>
  );
};

export default ImagingDashboard;