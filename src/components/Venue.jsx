import React from "react";
import styled from "styled-components";
import { Heading2 } from "./Common";
import nietImg from "../images/nietImg.png"


const VenuePage = styled.section`
  width: 100%;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;
const Para = styled.p`
  width: 80%;
  font-size: 1.7rem;
  text-align: center;
  color: #413b3b;
  font-family: var(--secondary-font);
  @media (max-width:720px) {
     font-size: 1.85rem;
    }

  line-height: 1.5;

`;
const Container = styled.div`
  width: 80%;
  height: 50rem;
  justify-content: space-between;
  @media (max-width:720px) {
    width: 90%;
    height: 95rem;
    flex-direction: column-reverse;
    gap: 5rem;
    }
`;
const Left = styled.div`
  width: 45%;
  height: 100%;
  @media (max-width:720px) {
     width: 85%;
    }
`;
const Right = styled.div`
  width: 45%;
  height: 100%;
  /* border: 1px solid red; */
  flex-direction: column;
  gap: 2rem;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${nietImg});
    background-size: cover;
    opacity: 0.65;
    z-index: -1;
  }
  @media (max-width:720px) {
     width: 85%;
    }
`;
const Heading3 = styled(Heading2)`
  width: 80%;
  font-size: 3.3rem;
`;
const Address = styled.p`
    width: 80%;
    font-size: 1.8rem;
    color: black;
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: bold;
`;

const Venue = () => {
  return (
    <VenuePage id="venue" >
      <Heading2 color="#413b3b">Event Venue</Heading2>
      <Para>
        NIET is one of the premier Engineering and Management institutes of
        India’s National Capital Region (NCR). Noida Institute of Engineering &
        Technology is first Autonomous Private college in Uttar Pradesh &
        accredited by NAAC (National Assessment and Accreditation Council)
        (Grade A) & all eligible courses (B.Tech. in CSE, ME, ECE, IT, Biotech,
        MCA, MBA and B. Pharm) are NBA (National Board of Accreditation)
        Accredited. NIET, Gr. Noida (Engineering) Institute is 145th & NIET Gr.
        Noida (Pharmacy Institute) is 39th Rank of the country as per NIRF
        (National Institute Ranking Framework) 2022 ranking awarded by Ministry
        of HRD, Govt. of India. NIET has got the QSiGauge Diamond rating.
        Institute is offering high standard quality education to students from
        all corners of the country and situated in Greater Noida (a hub of
        global MNC’s).
      </Para>

      <Para style={{fontWeight: 'bold', fontSize: '2rem'}} as='a' href="https://www.google.com/maps/place/NIET+Central+Library/@28.4624091,77.4895009,18z/data=!4m14!1m7!3m6!1s0x390cc1e05f604e6f:0x6c7916966cd49da8!2sNIET+Central+Library!8m2!3d28.4623331!4d77.4904739!16s%2Fg%2F1wb8s21s!3m5!1s0x390cc1e05f604e6f:0x6c7916966cd49da8!8m2!3d28.4623331!4d77.4904739!16s%2Fg%2F1wb8s21s?hl=en" target="_blank" >NIET LIBRARY, FIRST FLOOR, E-BLOCK</Para>

      <Container className="d-flex">
        <Left>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.7844499918801!2d77.48950092657378!3d28.462409128351126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e05f604e6f%3A0x6c7916966cd49da8!2sNIET%20Central%20Library!5e0!3m2!1sen!2sin!4v1679460354199!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </Left>

        <Right className="d-flex">
          <Heading3 color="black">
            Noida Institute of Enginnering and Technology, Greater Noida
          </Heading3>
          <Address>19, Knowledge Park- II, Institutional Area,Greater Noida (UP)-201306, INDIA</Address>
        </Right>
      </Container>
    </VenuePage>
  );
};

export default Venue;

