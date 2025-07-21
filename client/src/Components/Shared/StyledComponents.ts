import styled, { keyframes } from 'styled-components';

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

export const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Background Components
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
  background: rgba(0, 0, 0, 0.4);
`;

// Layout Components
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  background: rgba(16, 16, 16, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  max-width: 64rem;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const SelectionContainer = styled.div`
  background: rgba(27, 27, 27, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  max-width: 80rem;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

// Form Components
export const StepContainer = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${props => props.direction === 'right' ? slideInFromRight : slideInFromLeft} 0.3s ease-out;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    border-color: ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.4)'};
  }
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

export const Select = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.4)'};
  }
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
  option {
    background: #1f2937;
    color: white;
  }
`;

export const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 100px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    border-color: ${props => props.hasError ? 'rgba(248, 113, 113, 0.6)' : 'rgba(255, 255, 255, 0.4)'};
  }
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

export const ErrorMessage = styled.p`
  color: #fca5a5;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

// Button Components
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'success' }>`
  background: ${props => {
    if (props.variant === 'secondary') return 'rgba(255, 255, 255, 0.1)';
    if (props.variant === 'success') return 'rgba(34, 197, 94, 0.2)';
    return 'rgba(255, 255, 255, 0.2)';
  }};
  backdrop-filter: blur(8px);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${props => {
    if (props.variant === 'success') return 'rgba(34, 197, 94, 0.3)';
    return 'rgba(255, 255, 255, 0.3)';
  }};
  transition: all 0.2s ease;
  transform: scale(1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: ${props => {
      if (props.variant === 'secondary') return 'rgba(255, 255, 255, 0.2)';
      if (props.variant === 'success') return 'rgba(34, 197, 94, 0.3)';
      return 'rgba(255, 255, 255, 0.3)';
    }};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: scale(1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
`;