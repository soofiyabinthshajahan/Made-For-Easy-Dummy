import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import {
  LoginContainer,
  LoginCard,
  Header,
  IconContainer,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  TextCenter,
  LinkText,
  LinkButton,
  BackButton,
  Divider,
  LoadingSpinner
} from './DoctorLogin.styles';

const DoctorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Navigate directly to doctor dashboard
      navigate('/doctor/dashboard');
    }, 1000);
  };

  const handleRegisterRedirect = () => {
    navigate('/doctor/register');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Header>
          <IconContainer>
            <Stethoscope className="w-8 h-8 text-blue-600" />
          </IconContainer>
          <Title>Doctor Portal</Title>
          <Subtitle>Please sign in to access your dashboard</Subtitle>
        </Header>

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading && <LoadingSpinner />}
            {isLoading ? 'Signing In...' : 'Sign In'}
          </SubmitButton>

          <TextCenter>
            <LinkText>
              Don't have an account?{' '}
              <LinkButton type="button" onClick={handleRegisterRedirect} disabled={isLoading}>
                Register here
              </LinkButton>
            </LinkText>
          </TextCenter>

          <TextCenter>
            <Divider>
              <BackButton type="button" onClick={() => navigate('/')} disabled={isLoading}>
                ← Back to Home
              </BackButton>
            </Divider>
          </TextCenter>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default DoctorLogin;