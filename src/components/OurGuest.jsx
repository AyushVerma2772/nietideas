import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Heading2 } from './Common';
import a from '../images/1.jpeg';
import b from '../images/2.jpg';
import c from '../images/3.jpg';
import d from '../images/4.jpeg';
import e from '../images/5.jpeg';
import f from '../images/6.jpeg';
import g from '../images/7.jpeg';
import h from '../images/8.jpeg';
import i from '../images/9.jpeg';


const Wrapper = styled.section`
    margin: 5rem 0;
    padding: 5rem 0;
    background-color: #f5f5f5;
`;

const H2 = styled(Heading2)`
    margin-bottom: 5rem;
`;

const CardContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    column-gap: 3rem;
    row-gap: 3rem;

    @media (max-width:720px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
`;


const OurGuest = () => {

    const guest = [
        {id: 1, img: a, name: "Mr. Raman Batra", about: "Executive Vice President"},
        {id: 2, img: b, name: "Dr. Vinod M. Kapse", about: "Director"},
        {id: 3, img: c, name: "Dr. D.R. Somashekar", about: "Dean Admin"},
        {id: 4, img: d, name: "Dr. Chandra Shekhar Yadav", about: "Dean, MCA"},
        {id: 5, img: e, name: "Dr. Kumud Saxena", about: "HoD CSE/IT/M.tech Integrated"},
        {id: 6, img: f, name: "Dr. Priyanka Chandani", about: "HoD AI/DS/CSBS"},
        {id: 8, img: h, name: "Dr. Mohammad Shahid", about: "HoD AIML"},
        {id: 7, img: g, name: "Ms. Bhawna Wadhwa", about: "HoD CS"},
        {id: 9, img: i, name: "Mr. Mayank Deep Khare", about: "HoD IoT"},
    ]

    return (
        <>
            <Wrapper id='guest' >
                <H2 color='#5235C3' >Our Guests</H2>
                <CardContainer >
                    
                    {
                        guest.map(ele => (

                            <Card key={ele.id} name={ele.name} about={ele.about} img={ele.img} />
                        ))
                    }
                </CardContainer>

            </Wrapper>
        </>
    )
}

export default OurGuest
