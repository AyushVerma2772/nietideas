import styled from "styled-components";

export const Clip = styled.div`
    clip-path: ${(props) => props.polygon};
    background: ${(props) => props.bg};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
`;

export const RegButton = styled.a`
    background-color: #ed228d;
    border: none;
    border-radius: 3rem;
    padding: 1.2rem 3.5rem;
    color: snow;
    cursor: pointer;
    font-size: 2.2rem;
    font-family: var(--primary-font);
    text-decoration: none;  
`;

export const Heading2 = styled.h2`
    width: 100%;
    font-size: 5rem;
    font-family: var(--primary-font);
    text-align: center;
    color: ${(props) => props.color};
`;