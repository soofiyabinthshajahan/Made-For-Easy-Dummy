import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight, User } from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Animations
const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const LoginContainer = styled.div`
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

const SuccessContainer = styled.div`
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

const Header = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 2rem;
  color: white;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
`;

const FormContent = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
`;

const Input = styled.input<{ hasError?: boolean; hasIcon?: boolean }>`
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

const PasswordToggle = styled.button`
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

const ErrorMessage = styled.p`
  color: #fca5a5;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: rgba(255, 255, 255, 0.8);
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

const ForgotPassword = styled.a`
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

const LoginButton = styled.button<{ isLoading?: boolean }>`
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

const Divider = styled.div`
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

const DividerText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
`;

const SignUpPrompt = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const SignUpText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const SignUpButton = styled.button`
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

const SuccessIcon = styled.div`
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

const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const DashboardButton = styled.button`
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

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      console.log('Login successful:', formData);
    }, 2000);
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  const handleSignUp = () => {
    alert('Sign up functionality would be implemented here');
  };

  if (isLoggedIn) {
    return (
      <>
        <BackgroundContainer>
          <VideoBackground autoPlay muted loop playsInline>
            <source src="https://videos.pexels.com/video-files/20481076/20481076-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoBackground>
          <Overlay />
        </BackgroundContainer>
        
        <Container>
          <SuccessContainer>
            <SuccessIcon>
              <CheckCircle size={40} />
            </SuccessIcon>
            <SuccessTitle>Welcome Back!</SuccessTitle>
            <SuccessMessage>
              You have successfully logged in to your account.
            </SuccessMessage>
            <DashboardButton onClick={() => alert('Navigate to dashboard')}>
              <User size={20} />
              Go to Dashboard
            </DashboardButton>
          </SuccessContainer>
        </Container>
      </>
    );
  }

  return (
    <>
      <BackgroundContainer>
        <VideoBackground autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/20481076/20481076-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
        <Overlay />
      </BackgroundContainer>
      
      <Container>
        <LoginContainer>
          <Header>
            <Title>Welcome Back</Title>
            <Subtitle>Sign in to your account</Subtitle>
          </Header>

          <FormContent>
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Email Address</Label>
                <InputWrapper>
                  <InputIcon>
                    <Mail size={20} />
                  </InputIcon>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    hasError={!!errors.email}
                    hasIcon={true}
                    placeholder="Enter your email"
                  />
                </InputWrapper>
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <InputWrapper>
                  <InputIcon>
                    <Lock size={20} />
                  </InputIcon>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    hasError={!!errors.password}
                    hasIcon={true}
                    placeholder="Enter your password"
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </PasswordToggle>
                </InputWrapper>
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </InputGroup>

              <CheckboxContainer>
                <CheckboxWrapper>
                  <Checkbox
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="rememberMe">
                    Remember me
                  </CheckboxLabel>
                </CheckboxWrapper>
                <ForgotPassword onClick={handleForgotPassword}>
                  Forgot password?
                </ForgotPassword>
              </CheckboxContainer>

              <LoginButton type="submit" disabled={isLoading} isLoading={isLoading}>
                {isLoading ? 'Signing in...' : (
                  <>
                    Sign In
                    <ArrowRight size={20} />
                  </>
                )}
              </LoginButton>
            </Form>

            <Divider>
              <DividerText>or</DividerText>
            </Divider>

            <SignUpPrompt>
              <SignUpText>Don't have an account?</SignUpText>
              <SignUpButton onClick={handleSignUp}>
                Create Account
              </SignUpButton>
            </SignUpPrompt>
          </FormContent>
        </LoginContainer>
      </Container>
    </>
  );
};

export default LoginPage;