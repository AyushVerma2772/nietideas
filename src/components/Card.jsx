import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex-direction: column;
    padding: 4rem 1.5rem;
    gap: 2.5rem;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 30rem;
    background-color: #fff;
    @media (max-width:540px) {
        width: 25rem;
    }
`;

const Name = styled.h3`
    font-size: 2.3rem;
    color: #ed228d;
    font-family: var(--primary-font);
    text-align: center;
`;

const Image = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    object-fit: fill;  
`;

const About = styled.p`
    font-size: 1.9rem;
    color: #555555;
    font-family: var(--secondary-font);
`;

const Card = ({img, name, about}) => {
    return (
        <>
            <Wrapper className='d-flex' >
                <Image src={img} alt='img' />

                <Name>{name}</Name>

                <About>{about}</About>

            </Wrapper>
        </>
    )
}

export default Card
