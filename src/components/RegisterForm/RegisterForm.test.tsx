import { render, screen } from '@testing-library/react'
import RegisterForm from '.';

describe('test register form', () => {
    const mockProps = jest.fn();

    test('Name form render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Name')
        const form = screen.getByPlaceholderText('Enter Your Name')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Email form render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Email')
        const form = screen.getByPlaceholderText('Enter Your Email')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Password form render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Password')
        const form = screen.getByPlaceholderText('Enter Your Password')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Submit button render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })
})