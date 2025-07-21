import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CheckCircle } from 'lucide-react';
import { UserType } from './Types/Registration';

const SuccessContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  max-width: 32rem;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SuccessIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: rgba(34, 197, 94, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  border: 1px solid rgba(34, 197, 94, 0.3);
  
  svg {
    color: #4ade80;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'success' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `;
      case 'success':
        return `
          background: #10b981;
          color: white;
          
          &:hover {
            background: #059669;
          }
        `;
      default:
        return `
          background: #3b82f6;
          color: white;
          
          &:hover {
            background: #2563eb;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface SuccessPageProps {
  firstName: string;
  userType: UserType;
  onRegisterAnother: () => void;
  onLogin?: () => void;
}

const getUserTypeLabel = (type: UserType): string => {
  const labels = {
    patient: 'Patient',
    hospital: 'Hospital',
    doctor: 'Doctor',
    pharmacy: 'Pharmacy',
    insurance: 'Insurance Provider',
    diagnostic: 'Diagnostic Center',
    imaging: 'Imaging Center',
    radiology: 'Radiology Center'
  };
  return labels[type];
};

const SuccessPage: React.FC<SuccessPageProps> = ({
  firstName,
  userType,
  onRegisterAnother,
  onLogin
}) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      // Navigate to appropriate login page based on user type
      switch (userType) {
        case 'doctor':
          navigate('/doctor/login');
          break;
        case 'patient':
          navigate('/patient/login');
          break;
        case 'hospital':
          navigate('/hospital/login');
          break;
        default:
          navigate('/');
          break;
      }
    }
  };

  return (
    <SuccessContainer>
      <SuccessIcon>
        <CheckCircle size={48} />
      </SuccessIcon>
      <SuccessTitle>Registration Successful!</SuccessTitle>
      <SuccessMessage>
        Welcome, {firstName}! Your {getUserTypeLabel(userType).toLowerCase()} account has been created successfully. 
        You can now access all the features and services available in our healthcare platform.
      </SuccessMessage>
      <ButtonGroup>
        <Button variant="success" onClick={onRegisterAnother}>
          Register Another {getUserTypeLabel(userType)}
        </Button>
        <Button variant="secondary" onClick={handleLogin}>
          Login
        </Button>
      </ButtonGroup>
    </SuccessContainer>
  );
};

export default SuccessPage;