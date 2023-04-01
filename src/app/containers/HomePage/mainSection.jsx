import { React, useState } from 'react'
import styled from 'styled-components';
import { SCREEN_SIZES } from '../../components/responsive';
import tw from 'twin.macro';
import FormInput from '../../components/form';
import { Button }   from '../../components/button';
import axios from 'axios';

const PageContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-center
        w-full
        max-w-screen-2xlarge
        large:pl-12
        large:pr-12
    `}
`;

const MainContainer = styled.div`
    width: 502px;
    margin-top: 10%;
    margin-bottom: 10%;
    ${tw`
        flex
        flex-col
    `}
`;

const Title = styled.h1`
    ${tw`
        font-bold
        text-text
        mb-4
        xlarge:text-xl 
        xlarge:leading-relaxed
    `}
`;

const Form = styled.form`
    ${tw`
        text-xs
        overflow-hidden
        max-h-full
        xlarge:text-lg
    `}
`;

const FormContainer = styled.div`
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    ${tw`
        
    `}
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-6
        items-center
        justify-center
    `}
`;

const RequiredStar = "*";


export function MainSection() {

    const [user, setUser] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        dob: "",
        password: "",
        confirm: ""
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: `Full Name ${RequiredStar}`,
            pattern: "^[_A-z0-9]*((-|\s)*[_A-z0-9])*$",
            error: "Please refrain from using symbols and spaces around your name, please try again.",
            label: "Full Name",
            required: true,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "tel",
            placeholder: "Phone Number",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            error: "Sorry, this phone number is not valid. Please try again.",
            label: "Phone Number",
            required: true
        },
        {
            id: 3,
            name: "email",
            type: "text",
            placeholder: "Email Address",
            pattern: "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+[.])+[a-z]{2,5}$",
            error: "Sorry, this email is not valid. Please try again.",
            label: "Email Address",
            required: true
        },
        {
            id: 4,
            name: "dob",
            type: "date",
            label: "Date of Birth",
            required: true
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Create Password",
            pattern: "[A-Za-z0-9]{8,}$",
            error: "Password should only contain letters, numbers, and must have atleast 8 characters.",
            label: "Password",
            required: true
        },
        {
            id: 6,
            name: "confirm",
            type: "password",
            placeholder: "Re-type Password",
            pattern: user.password,
            error: "Sorry, this password does not match.",
            label: "Confirm Password",
            required: true
        }
    ];

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(url, {
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email,
            dob: user.dob,
            password: user.password,
            confirm: user.confirm
        }).then(res => {
            console.log(res.user);
        })
    };

    const url = "https://fullstack-test-navy.vercel.app/api/users/create";
    // For testing console.log(user);
    return (
        <PageContainer>
            <MainContainer>
                <Title>Create User Account</Title>

                <Form onSubmit={handleSubmit}>
                    <FormContainer>
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={user[input.name]} onChange={onChangeHandler} />
                        ))}
                    </FormContainer>
                    <ButtonsContainer>
                        <Button theme="outline" text="Cancel" />
                        <Button theme="filled" text="Submit" /> 
                    </ButtonsContainer>
                </Form>

            </MainContainer>
        </PageContainer>
    )
}