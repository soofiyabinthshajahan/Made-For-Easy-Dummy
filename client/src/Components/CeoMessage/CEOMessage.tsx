import React from "react"
import {
  Section,
  VideoBackground,
  GlassContainerBox,
  MessageBox,
  ImageBox
} from './CeoMessage.styles';


const CEOMessage: React.FC = () => {
  return (
    <Section>
      <GlassContainerBox>
        <MessageBox>
          <h2>Message from Our CEO</h2>
          <p>
            At Made4Easy, our vision is to transform healthcare into something intuitive, accessible, and truly patient-first. We believe that every individual deserves seamless access to medical care — without the complexity.
          </p>
          <p>
            In a world where services are just a tap away, healthcare should be no different. That’s why we built Made4Easy — to unify hospitals, diagnostics, and pharmacies under one intelligent and secure platform.
          </p>
          <p>
            This isn’t just about technology — it’s about trust. We’re here to humanize healthcare through smart systems that empower both patients and providers, where your health records are always within your control.
          </p>
          <p>
            With every feature we build, we strive to make care simpler, faster, and more compassionate.
          </p>
          <p>
            Thank you for believing in our mission. Together, we’re creating a future where healthcare feels as it should — easy, connected, and made for you.
          </p>
          <div className="signature">– Soofiya Binth Shajahan, CEO & Founder</div>

        </MessageBox>

        <ImageBox>
          <img
            src="https://scontent.ftrv6-1.fna.fbcdn.net/v/t39.30808-1/509423035_748876571279404_3882385214412642815_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=jHpdXWd6Wm8Q7kNvwFK7Io0&_nc_oc=AdlEkVgoRzQOZtyKGUCSxlFmXHAlGMoziBVOwZG2R2C5iy-clS3IDZYZlxUqomNRQ9lWqIA2RNW4f1WUq7w0NYGE&_nc_zt=24&_nc_ht=scontent.ftrv6-1.fna&_nc_gid=bcy8BXMugTggP6aVxAZQOw&oh=00_AfPV9ZXt1oLxLGzEMPmLWOYLp21kCxoat4WlfyIbiQRS9w&oe=68614B48"
            alt="Soofiya - CEO"
          />
          <span>Soofiya Binth Shajahan</span>
          <span>CEO & Founder</span>
        </ImageBox>
      </GlassContainerBox>
    </Section>
  );
};

export default CEOMessage;
