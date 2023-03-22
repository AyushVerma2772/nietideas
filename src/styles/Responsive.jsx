import { css } from 'styled-components'

export const mobile1 = (resCss) => {
    return css`
        @media screen and (max-width: 720px) {
            ${resCss}
        }
    `;
}

export const mobile2 = (resCss) => {
    return css`
        @media only screen and (max-width: 540px) {
            ${resCss};
        }
    `;
};