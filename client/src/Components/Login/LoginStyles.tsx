import styled, { keyframes } from 'styled-components';
import { Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight, User } from 'lucide-react';

// Animations
export const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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
  background: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  max-width: 28rem;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  animation: ${slideInFromBottom} 0.6s ease-out;
`;

export const SuccessContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${slideInFromBottom} 0.6s ease-out;
`;

export const Header = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 2rem;
  color: white;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
`;

export const FormContent = styled.div`
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
`;

export const Input = styled.input<{ hasError?: boolean; hasIcon?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: ${props => props.hasIcon ? '3rem' : '1rem'};
  padding-right: ${props => props.type === 'password' ? '3rem' : '1rem'};
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
    
    & + ${InputIcon} {
      color: white;
    }
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

export const ErrorMessage = styled.p`
  color: #fca5a5;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: rgba(255, 255, 255, 0.8);
`;

export const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button<{ isLoading?: boolean }>`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  transform: scale(1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  ${props => props.isLoading && `
    animation: ${pulse} 1.5s infinite;
  `}
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const DividerText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
`;

export const SignUpPrompt = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const SignUpText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const SignUpButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  font-size: 0.875rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

export const SuccessIcon = styled.div`
  width: 5rem;
  height: 5rem;
  background: rgba(34, 197, 94, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 1px solid rgba(34, 197, 94, 0.3);
  
  svg {
    color: #4ade80;
  }
`;

export const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

export const DashboardButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;