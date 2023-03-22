import React from "react";
import styled from "styled-components";
import { Clip, RegButton } from "./Common";
import logo from "../images/logo.png"


const HomePage = styled.section`
    width: 100%;
    height: 90vh;
    background-color: white;
    position: relative;
    @media (max-width:720px) {
     align-items: flex-start;
    }
`;

const Main = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    z-index: 1;

    @media (max-width:720px) {
        align-items: center;
        justify-content: space-between;
        flex-direction:column-reverse ;
        margin-top: 6rem;
    }
`;
const Left = styled.div`
    width: 50%;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width:720px) {
        width:95%;
        align-items: center;
    }
`;


const Title = styled.h2`
    font-size: 5.5rem;
    color: snow;
    font-family: var(--primary-font);
    width: 90%;
    font-weight: bolder !important;
    span{
        color: #f12f97;
    }

    @media (max-width:720px) {
     text-align: center;
    }
`;
const Para = styled.p`
    font-size: 2rem;
    color: snow;
    font-family: var(--secondary-font);
    width: 80%;
    margin: 5rem 0;
    letter-spacing: 0.1rem;
    @media (max-width:720px) {
     text-align: center;
     width: 100%;
    }
`;


const Right = styled.div`
    width: 50%;
`;

const LogoImg = styled.img`
    width: 36rem;
    filter: drop-shadow(0 0 1.2rem #ed228d);
`

const Home = () => {
    return (
        <HomePage id="home" className="d-flex">
            <Main>
                <Left className="d-flex" >
                    <Title>
                        NIET IDEAS 2023 <br /> <span>TECH FEST</span>
                    </Title>
                    <Para>
                        NIET IDEAS-2K23 is here to give you all  a scintillating platform and opportunity to upgrade your knowledge of different emerging technologies. All the enthusiasts will get a disparate platform to  showcase their working model and the one with major performance efficiency and exhibiting the same will definitely get an edge. <br/><br /> <span style={{fontFamily:"Oswald"}}>LOOKING FORWARD FOR MORE AND MORE WORKING PROTOTYPE !</span>
                        <br/><br /> <span style={{fontFamily:"Oswald"}}>Final Project Exhibition: <strong style={{color: '#15bd15'}} >21st April, 2023</strong></span>
                    </Para>



                    <RegButton href="https://forms.office.com/r/e68e4BNCbC" target="_blank" rel="noreferrer">Register Now</RegButton>

                </Left>
                <Right className="d-flex">
                    <LogoImg src={logo} alt="" />
                </Right>
            </Main>
            <Clip polygon="polygon(0 0, 100% 0%, 100% 73%, 0% 100%)" bg="linear-gradient(90deg, hsla(252, 57%, 49%, 1) 9%, hsla(235, 89%, 70%, 1) 72%);" />
        </HomePage>
    );
};

export default Home;
