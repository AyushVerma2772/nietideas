import React from 'react';
import styled from 'styled-components';
import ideasLogo from "../images/ideasLogo.png"

const ContactWrapper = styled.section`
    background-color: #040919;    
    width: 100%;
    height: 40rem;
    margin-top: 7rem;
    @media (max-width:720px) {
        height: 75rem;
    }
`;

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width:720px) {
        flex-direction: column;
        gap:5rem;
    }
`;

const Left = styled.div`
    img {
        width: 50rem;
        border-radius: 0.8rem;
    }
`;

const Right = styled.div`
    width: 40rem;
    color: snow;
    padding: 1.5rem;
    flex-direction: column;
    gap: 2.5rem;
    align-items: flex-start;
    h4 {
        font-family: var(--primary-font);
        font-size: 2.3rem;
        border-bottom: 0.2rem solid #ed228d;
        display: inline;
        padding-right: 1rem;
    }

    p {
        font-size: 1.6rem;
        font-family: var(--secondary-font);
        letter-spacing: 0.1rem;
    }
    @media (max-width:720px) {
     width:50rem;
    }
`;

const Contact = () => {
    return (
        <>
            <ContactWrapper className='d-flex' id='contact' >
                <Wrapper className='d-flex' >
                    <Left>
                        <img src={ideasLogo} alt="" />
                    </Left>

                    <Right className='d-flex' >
                        <h4>Contact Us</h4>
                        <p>Noida Institute of Engineering & Technology <br /> 19, Knowledge Park- II, Institutional Area,
                            Greater Noida (UP)-201306 <br />
                            INDIA</p>
                        <p>
                            <span>Phone: </span><br />
                            +91-8076433712 <br />
                            +91-9528504920 <br />
                        </p>
                        <p>
                            <span>Email: </span><br />
                            vishalydv202@gmail.com
                        </p>

                    </Right>
                </Wrapper>
            </ContactWrapper>
        </>
    )
}

export default Contact