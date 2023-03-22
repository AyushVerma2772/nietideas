import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    font-size: 1.7rem;
    font-family: var(--primary-font);
    padding: 2rem;
    text-align: center;
    color: white;
    letter-spacing:.1rem;
    line-height: 2.5rem;

    background-color: #080f27;
    a{
        color: #ed228d;
        text-decoration: none;
    }
`

const Footer = () => {
  return (
        <Container>
            © Copyright Tech Ideas. All Rights Reserved <br />
            Developed by <a href='https://www.instagram.com/ayushh._.verma/' rel="noreferrer" target="_blank">Ayush Verma</a> & <a href='https://www.instagram.com/gaurav_as_gm/' rel="noreferrer" target="_blank">Gaurav Maurya</a>. Designed by <a rel="noreferrer" href="/">Vishal Yadav</a> & Powered by Dept. of AIML, NIET
        </Container>
  )
}

export default Footer