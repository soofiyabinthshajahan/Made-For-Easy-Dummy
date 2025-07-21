import React from 'react';
import styled from 'styled-components';
import { LucideIcon } from 'lucide-react';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  svg {
    color: white;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
`;

interface SectionHeaderProps {
  icon: LucideIcon; 
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <Header>
      <Icon size={24} />
      <Title>{title}</Title>
    </Header>
  );
};

export default SectionHeader;
