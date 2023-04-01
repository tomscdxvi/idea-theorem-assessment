import { React, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import "./form.css";


const FormContainer = styled.div`
    ${tw`
        p-6
    `}
`;

const Label = styled.h1`
    font-size: 16px;
    letter-spacing: 0.15px;
    line-height: 24px;
    ${tw`
        mb-2
        text-input-text
        font-bold
    `}
`

const LabelError = styled.label`
    position: absolute;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    color: #DA1E28;
    background-color: white;
    margin-left: 1rem;
    font-size: 12px;
    letter-spacing: 0.15px;
    line-height: 24px;
    ${tw`
        hidden
    `}
`

const Span = styled.span`
    color: #DA1E28;
    font-size: 12px;
    letter-spacing: 0.02em;
    ${tw`
        items-center
        hidden
    `}
`

export default function FormInput(props) {

    const [focus, setFocus] = useState(false);

    const { label, onChange, id, error, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocus(true);
    };

    return (
        <FormContainer>
            <Label>{label}</Label>
            {/* <LabelError>{label}</LabelError> */}
            <input 
                className="input-form" 
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus} 
                focus={focus.toString()} 
            /> 
            <Span>{error}</Span>
        </FormContainer>
    )
}