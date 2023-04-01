import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Logo } from '../logo';

const NavbarContainer = styled.div`
    min-height:68px;
    ${tw`
        min-w-full
        flex
        items-center
        large:pl-48
        bg-navbar-bg
    `}
`;

export function Navbar() {
    return (
        <NavbarContainer>
            <Logo />
        </NavbarContainer>
    )
}