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

const LogoContainerMobile = styled.div`
    margin: auto;
    ${tw`
        flex
        items-center
    `}
`;

const ImageContainer = styled.div`
    width:auto;
    ${tw`
        h-6
        medium:h-9
    `}
    img {
        width:auto;
        height:100%;
    }
`; 


export function Logo() {

    const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.small});

    if(isMobile) {
        return (
            <LogoContainerMobile>
                <ImageContainer>
                    <img src={LogoImage} alt="" />
                </ImageContainer> 
            </LogoContainerMobile> 
        )
    }

    return (
        <LogoContainer>
            <ImageContainer>
                <img src={LogoImage} alt="" />
            </ImageContainer> 
        </LogoContainer> 
    )
}