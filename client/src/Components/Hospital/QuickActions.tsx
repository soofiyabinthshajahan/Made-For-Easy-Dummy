import React from 'react';
import {
    PlusCircle,
    Calendar,
    Users,
    FileText,
    Stethoscope,
    Pill
} from 'lucide-react';
import {
    QuickActionsGrid,
    QuickActionCard,
    QuickActionIcon,
    QuickActionLabel
} from '../Shared/DashboardStyledComponent';

const QuickActions: React.FC = () => {
    const actions = [
        { icon: PlusCircle, label: 'Add Patient', color: '#3B82F6' },
        { icon: Calendar, label: 'Schedule Appointment', color: '#10B981' },
        { icon: Users, label: 'Staff Management', color: '#8B5CF6' },
        { icon: FileText, label: 'Medical Records', color: '#F59E0B' },
        { icon: Stethoscope, label: 'Equipment', color: '#EF4444' },
        { icon: Pill, label: 'Inventory', color: '#06B6D4' }
    ];

    return (
        <QuickActionsGrid>
            {actions.map((action, index) => (
                <QuickActionCard key={index}>
                    <QuickActionIcon color={action.color}>
                        <action.icon size={20} />
                    </QuickActionIcon>
                    <QuickActionLabel>{action.label}</QuickActionLabel>
                </QuickActionCard>
            ))}
        </QuickActionsGrid>
    );
};

export default QuickActions;