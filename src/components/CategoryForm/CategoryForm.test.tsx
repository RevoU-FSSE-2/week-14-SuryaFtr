import { render, screen } from '@testing-library/react'
import RegisterForm from '.';

describe('test category form', () => {
    const mockProps = jest.fn();

    test('Category name form render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Category Name')
        const form = screen.getByPlaceholderText('Enter Category Name')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Status form render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Status')
        const form = screen.getByText('Select Status')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('Submit button render correctly', async () => {
        render(<RegisterForm onSubmit={mockProps} />)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })
})