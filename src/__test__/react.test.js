import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import LoginForm from '../components/LoginForm';
import AuthProvider from "../contexts/auth";

describe("<LoginForm />", () => {
    test('render email input', () => {
        // render(<AuthProvider />);
        render(<LoginForm />);
        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    });


    // test('pass valid email to test email input field', () => {
    //     render(<LoginForm />);
    //     const inputEl = screen.getByTestId("username-input");
    //     userEvent.type(inputEl, "test@mail.com");
    //     expect(screen.getByTestId("username-input")).toHaveValue("test@mail.com");
    //     expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    // });
});