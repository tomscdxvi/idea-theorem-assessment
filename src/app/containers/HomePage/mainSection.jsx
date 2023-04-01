import { React, useState } from 'react'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from '../../components/responsive';
import tw from 'twin.macro';
import FormInput from '../../components/form';
import { Button }   from '../../components/button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

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
        full_name: "",
        contact_number: "",
        email: "",
        date_of_birth: "",
        password: "",
        confirm_password: ""
    });

    const inputs = [
        {
            id: 1,
            name: "full_name",
            type: "text",
            placeholder: `Full Name ${RequiredStar}`,
            pattern: "^[_A-z0-9]*((-|\s)*[_A-z0-9])*$",
            error: "Please refrain from using symbols and spaces around your name, please try again.",
            label: "Full Name",
            required: true,
        },
        {
            id: 2,
            name: "contact_number",
            type: "tel",
            placeholder: `Phone Number ${RequiredStar}`,
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            error: "Sorry, this phone number is not valid. Please follow this format: 111-111-1111",
            label: "Phone Number",
            required: true
        },
        {
            id: 3,
            name: "email",
            type: "text",
            placeholder: `Email Address`,
            pattern: "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+[.])+[a-z]{2,5}$",
            error: "Sorry, this email is not valid. Please try again.",
            label: "Email Address",
            required: true
        },
        {
            id: 4,
            name: "date_of_birth",
            type: "date",
            label: `Date of Birth`,
            // required: true -> Commented to test error alert.
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: `Create Password ${RequiredStar}`,
            pattern: "[A-Za-z0-9]{8,}$",
            error: "Password should only contain letters, numbers, and must have atleast 8 characters.",
            label: "Password",
            required: true
        },
        {
            id: 6,
            name: "confirm_password",
            type: "password",
            placeholder: `Re-type Password ${RequiredStar}`,
            pattern: user.password,
            error: "Sorry, this password does not match.",
            label: "Confirm Password",
            required: true
        }
    ];

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };


    const options = {
        url: "https://fullstack-test-navy.vercel.app/api/users/create",
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            full_name: user.full_name,
            contact_number: user.contact_number,
            email: user.email,
            date_of_birth: user.date_of_birth,
            password: user.password,
            confirm_password: user.confirm_password
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios(options).then(res => {
            console.log(user.full_name)
            if (user.full_name != "" && user.contact_number != "" && user.email != "" && user.date_of_birth != "" && user.password != "" && user.confirm_password != "") {
                toast.success(res.data.title + ": " + res.data.description, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            } else {
                toast.error("There was an error creating this account.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    style: {
                        background: "#CDFADC",
                        color: '#333333' 
                    }
                }); 
            }
        }).catch((error) => {
            toast.error("There was an error creating this account.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: {
                    background: "#CDFADC",
                    color: '#333333' 
                }
            }); 
        })
    };

    const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.small});

    if(isMobile) {
        return (
            <PageContainer>
                    <MainContainer>
                        <Title style={{ marginLeft: '1.5rem', fontSize: '18px' }}>Create User Account</Title>

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />

                        <Form onSubmit={handleSubmit}>
                            <FormContainer style={{ }}>
                                {inputs.map((input) => (
                                    <FormInput key={input.id} {...input} value={user[input.name]} onChange={onChangeHandler} style={{ width: 200}} />
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

    return (
        <PageContainer>
            <MainContainer>
                <Title>Create User Account</Title>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

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