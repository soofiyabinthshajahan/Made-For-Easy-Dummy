import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaShieldAlt, FaFlask, FaHeartbeat } from "react-icons/fa";

// Animations
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  background: rgba(0, 0, 0, 0.3);
`;

const Section = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem ;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  animation: ${slideInFromRight} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const Feature = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #0ea5e9;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureContent = styled.div`
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

const FormCard = styled.form`
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

const Input = styled.input`
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

const Select = styled.select`
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

const Button = styled.button`
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

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    role: "",
    priority: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <>
      <BackgroundContainer>
        <VideoBackground autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/20481076/20481076-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
        <Overlay />
      </BackgroundContainer>

      <Section id="contact">
        <Container>
          <LeftColumn>
            <Title>Reach Out to US </Title>
            <Subtitle>
              Connecting you to the right care at the right time.
            </Subtitle>

            <Feature>
              <IconWrapper>
                <FaShieldAlt />
              </IconWrapper>
              <FeatureContent>
                <h4>Secure Medical Data</h4>
                <p>
                  All your records are safely stored and shared only with consent.
                </p>
              </FeatureContent>
            </Feature>

            <Feature>
              <IconWrapper>
                <FaFlask />
              </IconWrapper>
              <FeatureContent>
                <h4>Lab & Scan Integration</h4>
                <p>
                  Book diagnostics and receive results seamlessly on your dashboard.
                </p>
              </FeatureContent>
            </Feature>

            <Feature>
              <IconWrapper>
                <FaHeartbeat />
              </IconWrapper>
              <FeatureContent>
                <h4>Appointment Priority</h4>
                <p>
                  We make sure your appointments are quick, timely and reliable.
                </p>
              </FeatureContent>
            </Feature>
          </LeftColumn>

          <RightColumn>
            <FormCard onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="contact"
                placeholder="Your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">I am a...</option>
                <option value="patient">Patient</option>
                <option value="hospital">Hospital</option>
                <option value="lab">Laboratory</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="other">Other</option>
              </Select>
              <Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">What is your main concern?</option>
                <option value="appointment">Book an Appointment</option>
                <option value="followup">Request a Follow-up</option>
                <option value="help">Just Need Medical Help</option>
              </Select>
              <Button type="submit">Submit Request</Button>
            </FormCard>
          </RightColumn>
        </Container>
      </Section>
    </>
  );
};

export default ContactSection;