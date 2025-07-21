// CEOMessageStyles.ts
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 5%;
  font-family: "Segoe UI", sans-serif;

  @media (max-width: 768px) {
    padding: 48px 24px;
    height: auto;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 1;
`;

export const GlassContainerBox = styled.div`
  position: relative;
  z-index: 0.5;
  margin-top: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 20px;
  width: 90%;
  max-width: 1200px;
  padding: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const MessageBox = styled.div`
  flex: 1.5;

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #93c5fd;
  }

  p {
    font-size: 17px;
    color: #f1f5f9;
    line-height: 1.7;
    margin-bottom: 18px;
  }

  .signature {
    margin-top: 24px;
    font-weight: 600;
    color: #60a5fa;
    font-size: 16px;
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    margin-top: 14px;
    font-size: 18px;
    font-weight: 600;
    color: #e2e8f0;
  }
`;
