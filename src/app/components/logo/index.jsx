import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from '../responsive';
import LogoImage from '../../assets/logo.svg';

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
        ml-12
    `}
`;

const ImageContainer = styled.div`
    width:auto;
    ${tw`
        h-6
        medium:h-9
    `}
    img{
        width:auto;
        height:100%;
    }
`; 


export function Logo() {
    return (
        <LogoContainer>
            <ImageContainer>
                <img src={LogoImage} alt="" />
            </ImageContainer> 
        </LogoContainer> 
    )
}