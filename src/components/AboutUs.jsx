import React from "react";
import styled from "styled-components";
import { Heading2, RegButton } from "./Common";
import aboutusimg from "../images/aboutusimg.png"

const AboutPage = styled.section`
    width: 100%;
    margin: 7rem 0;
    padding-top: 2rem;
`;

const Container = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    @media (max-width:720px) {
     flex-direction: column-reverse;
     align-items: center;
    }
`;

const Left = styled.div`
    width: 40%;
    font-size: 1.9rem;
    font-family: var(--secondary-font);
    text-align: center;
    flex-direction: column;
    gap: 3.5rem;
    line-height: 1.5;
    font-weight: bold;
    @media (max-width:720px) {
        width: 80%;
        justify-content: center;
        font-size: 2rem;
    }
`;

const Right = styled.img`
    width: 60rem;
`;

const AboutUs = () => {
    return (
        <AboutPage id="about" >
            <Heading2 color='#5235C3'>About Us</Heading2>
            <Container>
                <Left className="d-flex">
                    NIET is one of the premier Engineering and Management institutes of
                    India’s National Capital Region (NCR). Noida Institute of Engineering &
                    Technology is first Autonomous Private college in Uttar Pradesh &
                    accredited by NAAC & all eligible courses (B.Tech. in CSE, ME, ECE, IT, Biotech,
                    MCA, MBA and B. Pharm) are NBA
                    Accredited. NIET, Gr. Noida (Engineering) Institute is 145th & NIET Gr.
                    Noida (Pharmacy Institute) is 39th Rank of the country as per NIRF
                    (National Institute Ranking Framework) 2022 ranking awarded by Ministry
                    of HRD, Govt. of India. 
                    Institute is offering high standard quality education to students from
                    all corners of the country and situated in Greater Noida.<br /> <br />
                    
                    <span style={{fontFamily:"Oswald"}}>
                    School of Computer Science and Engineering  in Emerging Technologies (SOCSET) is an interdisciplinary, problem-solving school that teaches students how to apply scientific methods to real world issues. It incorporates trendy developing tools and algorithms that allign with modern problem solving approach.
                    </span>
                    <RegButton href="https://forms.office.com/r/e68e4BNCbC" target="_blank" rel="noreferrer">Register Now</RegButton>
                </Left>
                <div className="d-flex" >
                    <Right src={aboutusimg} />
                </div>
            </Container>
        </AboutPage>
    );
};

export default AboutUs;
