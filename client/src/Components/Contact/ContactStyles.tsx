import styled, { keyframes } from "styled-components";

// Animations
export const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Section = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  animation: ${slideInFromRight} 0.5s ease-out;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

export const Feature = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #0ea5e9;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureContent = styled.div`
  h4 {
    font-size: 1.125rem;
    margin: 0 0 0.5rem;
    color: white;
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`;

export const FormCard = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
  option {
    background: #465d7e;
    color: white;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;