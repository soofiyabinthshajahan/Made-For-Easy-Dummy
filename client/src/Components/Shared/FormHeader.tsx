import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background: rgba(23, 23, 23, 0.1);
  backdrop-filter: blur(8px);
  padding: 2rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const ProgressContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProgressStep = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressCircle = styled.div<{ active: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
`;

const ProgressLabel = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProgressLine = styled.div<{ active: boolean }>`
  width: 4rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)'};
  
  @media (max-width: 768px) {
    width: 2rem;
  }
`;

interface FormHeaderProps {
  title: string;
  subtitle: string;
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  currentStep,
  totalSteps,
  stepLabels
}) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      
      <ProgressContainer>
        {stepLabels.map((label, index) => (
          <React.Fragment key={index}>
            <ProgressStep>
              <ProgressCircle active={currentStep >= index + 1}>
                {index + 1}
              </ProgressCircle>
              <ProgressLabel>{label}</ProgressLabel>
            </ProgressStep>
            {index < totalSteps - 1 && (
              <ProgressLine active={currentStep >= index + 2} />
            )}
          </React.Fragment>
        ))}
      </ProgressContainer>
    </Header>
  );
};

export default FormHeader;