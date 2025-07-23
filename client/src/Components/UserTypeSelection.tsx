import React from 'react';
import styled from 'styled-components';
import { 
  User, 
  Building2, 
  Stethoscope, 
  Pill, 
  Shield, 
  Activity, 
  Camera, 
  Zap 
} from 'lucide-react';
import { UserType,UserTypeConfig  } from './Types/Registration'; 
import { fadeIn } from './Shared/StyledComponents';

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const TypeCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div<{ color: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: ${props => props.color};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

interface UserTypeSelectionProps {
  onSelectType: (type: UserType) => void;
}

const userTypeConfigs: UserTypeConfig[] = [
  {
    type: 'patient',
    title: 'Patient',
    description: 'Register as a patient to book appointments, access medical records, and manage your healthcare.',
    icon: 'User',
    color: 'rgba(34, 197, 94, 0.2)'
  },
  {
    type: 'hospital',
    title: 'Hospital',
    description: 'Register your hospital to manage patient records, staff, and healthcare services.',
    icon: 'Building2',
    color: 'rgba(59, 130, 246, 0.2)'
  },
  {
    type: 'doctor',
    title: 'Doctor',
    description: 'Register as a healthcare professional to manage patients and provide medical services.',
    icon: 'Stethoscope',
    color: 'rgba(168, 85, 247, 0.2)'
  },
  {
    type: 'pharmacy',
    title: 'Pharmacy',
    description: 'Register your pharmacy to manage prescriptions, inventory, and patient medication needs.',
    icon: 'Pill',
    color: 'rgba(245, 101, 101, 0.2)'
  },
  {
    type: 'insurance',
    title: 'Insurance Provider',
    description: 'Register as an insurance provider to manage policies, claims, and customer services.',
    icon: 'Shield',
    color: 'rgba(251, 146, 60, 0.2)'
  },
  {
    type: 'diagnostic',
    title: 'Diagnostic Center',
    description: 'Register your diagnostic center to offer laboratory tests and medical diagnostics.',
    icon: 'Activity',
    color: 'rgba(236, 72, 153, 0.2)'
  },
  {
    type: 'imaging',
    title: 'Imaging Center',
    description: 'Register your imaging center to provide medical imaging services and scans.',
    icon: 'Camera',
    color: 'rgba(14, 165, 233, 0.2)'
  },
  {
    type: 'radiology',
    title: 'Radiology Center',
    description: 'Register your radiology center to offer specialized radiology services and interpretations.',
    icon: 'Zap',
    color: 'rgba(132, 204, 22, 0.2)'
  },
   {
    type: 'laboratory',
    title: 'Laboratory',
    description: 'Register your radiology center to offer specialized radiology services and interpretations.',
    icon: 'Zap',
    color: 'rgba(132, 204, 22, 0.2)'
  }
];

const getIcon = (iconName: string) => {
  const icons = {
    User,
    Building2,
    Stethoscope,
    Pill,
    Shield,
    Activity,
    Camera,
    Zap, 
    

  };
  return icons[iconName as keyof typeof icons] || User;
};

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelectType }) => {
  return (
    <>
      <Title>Healthcare Registration Portal</Title>
      <Subtitle>Choose your registration type to get started</Subtitle>
      
      <SelectionGrid>
        {userTypeConfigs.map((config) => {
          const IconComponent = getIcon(config.icon);
          return (
            <TypeCard
              key={config.type}
              onClick={() => onSelectType(config.type)}
            >
              <IconContainer color={config.color}>
                <IconComponent size={32} color="white" />
              </IconContainer>
              <CardTitle>{config.title}</CardTitle>
              <CardDescription>{config.description}</CardDescription>
            </TypeCard>
          );
        })}
      </SelectionGrid>
    </>
  );
};

export default UserTypeSelection;