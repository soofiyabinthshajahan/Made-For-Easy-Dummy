import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  /* background: rgba(30, 41, 59, 0.95); */
  /* backdrop-filter: blur(20px); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: #f8fafc;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; */
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* &:hover {
    background: rgba(30, 41, 59, 0.98);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  } */

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 64px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1000;
  cursor: pointer;
  /* transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover {
    transform: translateY(-1px);
  } */

  img {
    width: 62px;
    height: 62px;
    border-radius: 12px;
    object-fit: cover;
    /* box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); */

    /* &:hover {
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.25);
      transform: scale(1.05);
    } */

    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
      border-radius: 10px;
    }
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  .brand {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(135deg, #f2f8ffff 0%, #3b82f6 50%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .slogan {
    font-size: 12px;
    font-weight: 500;
    color: #ffffffff;
    margin-top: 2px;
    letter-spacing: 0.02em;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

export const Nav = styled.nav<{ mobileOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    text-decoration: none;
    color: #e2e8f0;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    letter-spacing: 0.01em;

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #60a5fa);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(-50%);
      border-radius: 1px;
    }

    &:hover {
      color: #ffffff;
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-1px);

      &::before {
        width: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 1000px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    transform: ${({ mobileOpen }) =>
      mobileOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 998;
    padding-top: 80px;

    a {
      padding: 16px 24px;
      font-size: 18px;
      width: 280px;
      text-align: center;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
      background: rgba(30, 41, 59, 0.5);
      backdrop-filter: blur(8px);
      font-weight: 500;

      &:hover {
        background: rgba(59, 130, 246, 0.15);
        border-color: rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }

      &::before {
        display: none;
      }
    }
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 280px;
    margin-top: 32px;
    gap: 12px;
  }
`;

export const MobileIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;

  svg {
    color: #94a3b8;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #60a5fa;
      background: rgba(59, 130, 246, 0.1);
      transform: scale(1.1);
    }
  }
`;

export const SearchBar = styled.div<{ expanded: boolean; showMobileSearch: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ expanded }) => (expanded ? "520px" : "380px")};

  input {
    background: rgba(51, 65, 85, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 16px;
    padding: 12px 48px 12px 20px;
    font-size: 14px;
    color: #f8fafc;
    width: 100%;
    font-weight: 400;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.01em;

    &::placeholder {
      color: #94a3b8;
      font-weight: 400;
    }

    &:focus {
      outline: none;
      border-color: #3b82f6;
      background: rgba(51, 65, 85, 0.8);
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
      transform: translateY(-1px);
    }
  }

 
  @media (max-width: 1200px) {
    width: ${({ expanded }) => (expanded ? "360px" : "280px")};
  }

  @media (max-width: 768px) {
    display: ${({ showMobileSearch }) => (showMobileSearch ? "flex" : "none")};
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    padding: 16px 20px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);

    input {
      width: 100%;
      border-radius: 12px;
      padding: 14px 48px 14px 20px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border-radius: 12px;
  }
`;

export const SecondaryButton = styled(Button)`
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(51, 65, 85, 0.9);
    border-color: rgba(59, 130, 246, 0.5);
    color: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  position: relative;

  &:hover {
    color: #60a5fa;
    background: rgba(59, 130, 246, 0.1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`;

export const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const MobileSearchButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
    margin-right: 16px;
  }
`;

export const NotificationDot = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid #1e293b;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
    }
  }
`;