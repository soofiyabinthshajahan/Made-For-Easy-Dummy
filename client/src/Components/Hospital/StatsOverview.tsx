import React from 'react';
import {
    Users,
    Calendar,
    Bed,
    UserCheck,
    DollarSign,
    TrendingUp
} from 'lucide-react';
import { StatsContainer,
  StatCard,
  StatIcon,
  StatContent,
  StatValue,
  StatLabel,
  StatTrend,
  StatsGrid } from '../Shared/DashboardStyledComponent'; 

interface StatsOverviewProps {
    stats: {
        totalPatients: number;
        todayAppointments: number;
        availableBeds: number;
        totalStaff: number;
        monthlyRevenue: number;
        patientSatisfaction: number;
    };
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
    const statsData = [
        {
            icon: Users,
            label: 'Total Patients',
            value: stats.totalPatients.toLocaleString(),
            trend: '+12%',
            color: '#3B82F6'
        },
        {
            icon: Calendar,
            label: 'Today\'s Appointments',
            value: stats.todayAppointments.toString(),
            trend: '+8%',
            color: '#10B981'
        },
        {
            icon: Bed,
            label: 'Available Beds',
            value: stats.availableBeds.toString(),
            trend: '-5%',
            color: '#F59E0B'
        },
        {
            icon: UserCheck,
            label: 'Total Staff',
            value: stats.totalStaff.toString(),
            trend: '+3%',
            color: '#8B5CF6'
        },
        {
            icon: DollarSign,
            label: 'Monthly Revenue',
            value: `$${stats.monthlyRevenue.toLocaleString()}`,
            trend: '+15%',
            color: '#EF4444'
        },
        {
            icon: TrendingUp,
            label: 'Patient Satisfaction',
            value: `${stats.patientSatisfaction}%`,
            trend: '+2%',
            color: '#06B6D4'
        }
    ];

    return (
        <StatsContainer>
            <StatsGrid>
                {statsData.map((stat, index) => (
                    <StatCard key={index}>
                        <StatIcon color={stat.color}>
                            <stat.icon size={24} />
                        </StatIcon>
                        <StatContent>
                            <StatValue>{stat.value}</StatValue>
                            <StatLabel>{stat.label}</StatLabel>
                            <StatTrend positive={!stat.trend.includes('-')}>
                                {stat.trend} from last month
                            </StatTrend>
                        </StatContent>
                    </StatCard>
                ))}
            </StatsGrid>
        </StatsContainer>
    );
};

export default StatsOverview;