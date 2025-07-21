import React from "react";
import styled from "styled-components";

interface ExploreCardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 30px 30px;
  color: #f9fafb;
  width: 100%;
  max-width: 260px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(to right, #97b3d5, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 20px;
  min-height: 60px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: linear-gradient(to right top, #7394b8, #a1c1dd);
  color: #0f172a;
  border: none;
  border-radius: 30px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(115, 148, 184, 0.3);

  &:hover {
    background: linear-gradient(to right top, #5f7e9c, #8fb7d1);
    box-shadow: 0 6px 16px rgba(115, 148, 184, 0.5);
    transform: translateY(-2px);
  }
`;

const getButtonLabel = (title: string) => {
  switch (title.toLowerCase()) {
    case "hospital":
    case "doctors":
      return "Book an Appointment";
    case "pharmacy":
      return "Order Now";
    case "laboratory":
      return "Book Lab Test";
    case "scanning":
    case "diagnostics":
      return "Schedule Scan";
    default:
      return "Explore Services";
  }
};

const getEnhancedDescription = (title: string) => {
  switch (title.toLowerCase()) {
    case "hospital":
      return "Access top-rated hospitals 24x7 for emergencies, admissions, and scheduled care.";
    case "doctors":
      return "Find doctors available around the clock and book appointments seamlessly.";
    case "pharmacy":
      return "Order medicines anytime, anywhere — 24x7 delivery from verified pharmacies.";
    case "laboratory":
      return "Book tests at labs operating 24x7. Get reports online with timely notifications.";
    case "scanning":
    case "diagnostics":
      return "Schedule your scans anytime with 24x7 diagnostic centers using modern equipment.";
    default:
      return "Discover health services available 24x7 for your comfort and convenience.";
  }
};

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  description,
  onClick,
}) => {
  const buttonLabel = getButtonLabel(title);
  const enhancedDescription = description || getEnhancedDescription(title);

  return (
    <Card>
      <Title>{title}</Title>
      <Description>{enhancedDescription}</Description>
      <Button onClick={onClick}>{buttonLabel}</Button>
    </Card>
  );
};

export default ExploreCard;
