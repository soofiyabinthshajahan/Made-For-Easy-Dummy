import React, { useState } from "react";
import { FaShieldAlt, FaFlask, FaHeartbeat } from "react-icons/fa";
import {
  BackgroundContainer,
  VideoBackground,
  Overlay,
  Section,
  Container,
  LeftColumn,
  RightColumn,
  Title,
  Subtitle,
  Feature,
  IconWrapper,
  FeatureContent,
  FormCard,
  Input,
  Select,
  Button
} from "./ContactStyles";

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
            <Title>Reach Out to US</Title>
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