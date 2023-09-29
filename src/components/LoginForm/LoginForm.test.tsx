import { render, screen } from '@testing-library/react'
import LoginForm from '.';

describe('test login form', () => {
    const mockProps = jest.fn();

    test('Email form render correctly', async () => {
        render(<LoginForm onSubmit={mockProps} />)
        const title = screen.getByText('Email')
        const form = screen.getByPlaceholderText('Enter Your Email')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Password form render correctly', async () => {
        render(<LoginForm onSubmit={mockProps} />)
        const title = screen.getByText('Password')
        const form = screen.getByPlaceholderText('Enter Your Password')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Submit button render correctly', async () => {
        render(<LoginForm onSubmit={mockProps} />)
        const title = screen.getByText('Login')
        expect(title).toBeDefined();
    })
})