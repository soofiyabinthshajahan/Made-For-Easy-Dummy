import styled from 'styled-components';

/* === Header Component === */
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(15, 23, 42, 0.9); /* dark navy with slight transparency */
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1000;
  color: white;
  font-weight: 600;
`;

/* === Page Section === */
export const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 160px 5% 100px; /* ⬅ enough top space for fixed header */
  font-family: "Segoe UI", sans-serif;
  z-index: 0;

  @media (max-width: 768px) {
    padding: 120px 24px 60px;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const CTATitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const IconContainer = styled.div<{ gradient: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${props => `linear-gradient(135deg, ${props.gradient})`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 24px;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;

  ${ServiceCard}:hover & {
    color: #93c5fd;
  }
`;

export const ServiceDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 12px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #60a5fa;
    border-radius: 50%;
    margin-right: 12px;
    flex-shrink: 0;
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  color: #93c5fd;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #bfdbfe;
  }

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;