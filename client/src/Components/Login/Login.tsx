import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight, User } from 'lucide-react';
import {
  BackgroundContainer,
  VideoBackground,
  Overlay,
  Container,
  LoginContainer,
  SuccessContainer,
  Header,
  Title,
  Subtitle,
  FormContent,
  Form,
  InputGroup,
  Label,
  InputWrapper,
  InputIcon,
  Input,
  PasswordToggle,
  ErrorMessage,
  CheckboxContainer,
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
  ForgotPassword,
  LoginButton,
  Divider,
  DividerText,
  SignUpPrompt,
  SignUpText,
  SignUpButton,
  SuccessIcon,
  SuccessTitle,
  SuccessMessage,
  DashboardButton
} from './LoginStyles';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

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