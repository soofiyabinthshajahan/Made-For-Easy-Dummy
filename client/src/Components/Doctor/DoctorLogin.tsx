import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Stethoscope } from 'lucide-react';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  width: 100%;
  max-width: 28rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TextCenter = styled.div`
  text-align: center;
`;

const LinkText = styled.p`
  color: #6b7280;
`;

const LinkButton = styled.button`
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
  }
`;

const BackButton = styled.button`
  color: #6b7280;
  font-size: 0.875rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #374151;
  }
`;

const Divider = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

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