import React from 'react';
import { User, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import {
    PatientsList,
    PatientCard,
    PatientInfo,
    PatientName,
    PatientDetails,
    PatientStatus,
    ViewAllButton
} from '../Shared/DashboardStyledComponent';

interface Patient {
    id: number;
    name: string;
    age: number;
    condition: string;
    status: string;
    lastVisit: string;
}

interface RecentPatientsProps {
    patients: Patient[];
}

const RecentPatients: React.FC<RecentPatientsProps> = ({ patients }) => {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'critical':
                return <AlertCircle size={16} />;
            case 'recovered':
                return <CheckCircle size={16} />;
            default:
                return <Clock size={16} />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'critical':
                return '#EF4444';
            case 'recovered':
                return '#10B981';
            case 'stable':
                return '#3B82F6';
            default:
                return '#F59E0B';
        }
    };

    return (
        <PatientsList>
            {patients.map((patient) => (
                <PatientCard key={patient.id}>
                    <PatientInfo>
                        <PatientName>{patient.name}</PatientName>
                        <PatientDetails>
                            Age: {patient.age} • {patient.condition}
                        </PatientDetails>
                        <PatientDetails>
                            Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
                        </PatientDetails>
                    </PatientInfo>
                    <PatientStatus color={getStatusColor(patient.status)}>
                        {getStatusIcon(patient.status)}
                        {patient.status}
                    </PatientStatus>
                </PatientCard>
            ))}
            <ViewAllButton>View All Patients</ViewAllButton>
        </PatientsList>
    );
};

export default RecentPatients;