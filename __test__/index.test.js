import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../components/LoginForm';

test('submits user_email and password', () => {
  const email = 'admin@admin.com';
  const password = 'admin';
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  userEvent.type(screen.getByLabelText(/user_email/i), email);

  userEvent.type(screen.getByLabelText(/password/i), password);

  userEvent.click(screen.getByRole('button', { name: /log in/i }));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    email,
    password
  });
});