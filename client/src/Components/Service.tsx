import React from 'react';
import styled from 'styled-components';
import {
  Heart,
  Calendar,
  Bell,
  Pill,
  Building2,
  Stethoscope,
  ShoppingCart,
  ArrowRight,
  Star,
  Clock,
  Shield
} from 'lucide-react';

/* === Header Component === */
const Header = styled.header`
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
const Section = styled.section`
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

const VideoBackground = styled.video`
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

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ServiceCard = styled.div`
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

const IconContainer = styled.div<{ gradient: string }>`
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

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;

  ${ServiceCard}:hover & {
    color: #93c5fd;
  }
`;

const ServiceDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

const FeatureItem = styled.li`
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

const LearnMoreButton = styled.button`
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

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Centralized Health Records",
      description: "Secure, comprehensive digital health records accessible anytime, anywhere. Your complete medical history in one place.",
      features: ["Encrypted data storage", "Easy sharing with doctors", "Complete medical history"],
      gradient: "#ef4444, #ec4899"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Appointment System",
      description: "Book appointments with top-rated doctors. View qualifications, ratings, and availability in real-time.",
      features: ["Real-time availability", "Doctor ratings & reviews", "Instant booking confirmation"],
      gradient: "#3b82f6, #06b6d4"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Automated Health Reminders",
      description: "Never miss important health checkups. Smart reminders and follow-up notifications keep you on track.",
      features: ["Personalized reminders", "Follow-up scheduling", "Health milestone tracking"],
      gradient: "#eab308, #f97316"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Medicine Availability Checker",
      description: "Check medicine availability across pharmacies. Compare prices and find the best deals near you.",
      features: ["Real-time stock updates", "Price comparison", "Pharmacy locator"],
      gradient: "#22c55e, #10b981"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Hospital Comparison",
      description: "Compare hospitals based on specialties, ratings, facilities, and patient reviews to make informed decisions.",
      features: ["Detailed hospital profiles", "Patient reviews", "Facility comparisons"],
      gradient: "#a855f7, #8b5cf6"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Diagnostic Center Comparison",
      description: "Find and compare diagnostic centers. Check test availability, pricing, and book lab appointments easily.",
      features: ["Test availability", "Price transparency", "Quality ratings"],
      gradient: "#6366f1, #3b82f6"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Online Medicine Ordering",
      description: "Order medicines online with prescription uploads. Fast delivery and genuine medications guaranteed.",
      features: ["Prescription upload", "Genuine medicines", "Fast delivery"],
      gradient: "#14b8a6, #06b6d4"
    }
  ];

  return (
    <>
    

      {/* Services Section */}
      <Section>
    
        <Content>

          <ServicesContainer>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <IconContainer gradient={service.gradient}>
                    {service.icon}
                  </IconContainer>

                  <ServiceTitle>{service.title}</ServiceTitle>

                  <ServiceDescription>{service.description}</ServiceDescription>

                  <FeaturesList>
                    {service.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>

                  <LearnMoreButton>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </LearnMoreButton>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ServicesContainer>
        </Content>
      </Section>
    </>
  );
};

export default ServicesPage;
