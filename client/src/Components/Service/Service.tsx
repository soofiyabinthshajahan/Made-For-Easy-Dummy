import React from 'react';
import {
  Heart,
  Calendar,
  Bell,
  Pill,
  Building2,
  Stethoscope,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import {
  Section,
  Content,
  ServicesContainer,
  ServicesGrid,
  ServiceCard,
  IconContainer,
  ServiceTitle,
  ServiceDescription,
  FeaturesList,
  FeatureItem,
  LearnMoreButton
} from './ServicesStyles';

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