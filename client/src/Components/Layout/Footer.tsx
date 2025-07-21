import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterSection = styled.footer`
  position: relative;
  padding: 60px 20px 0px 20px;
  overflow: hidden;
  color: #f1f5f9;
  text-align: center;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 1;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 40px 20px;
`;

const MainHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #f1f5f9;
  margin-bottom: 8px;
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  margin-bottom: 32px;
`;

const LinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const LinkItem = styled.a`
  font-size: 14px;
  color: #f1f5f9;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #60a5fa;
  }
`;

const Address = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  margin-bottom: 24px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const Icon = styled.a`
  color: #60a5fa;
  font-size: 18px;
  transition: color 0.3s;
  &:hover {
    color: #3b82f6;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 13px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Overlay>
        <MainHeading>Made For Easy</MainHeading>
        <SubHeading>Making people's life easy</SubHeading>

        <LinksRow>
          <LinkItem href="#home">Home</LinkItem>
          <LinkItem href="#home">About</LinkItem>
          <LinkItem href="#hospitals">Hospitals</LinkItem>
          <LinkItem href="#labs">Laboratories</LinkItem>
          <LinkItem href="#scans">Scanning</LinkItem>
          <LinkItem href="#pharmacy">Pharmacy</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </LinksRow>

        <Address>Kochi, Kerala, India | customercareatmade4ec@gmail.com
          | +91 949538947</Address>

        <SocialIcons>
          <Icon href="#"><FaFacebookF /></Icon>
          <Icon href="#"><FaTwitter /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
          <Icon href="#"><FaLinkedinIn /></Icon>
        </SocialIcons>

        <Copyright>
          © {new Date().getFullYear()} Made For Easy. All rights reserved.
        </Copyright>
      </Overlay>
    </FooterSection>
  );
};

export default Footer;