import { render, screen } from '@testing-library/react'
import Header from '.';

describe('test header container', () => {
    test('Header container render correctly', async () => {
        render(<Header />)
        const title = screen.getByText('Category App')
        expect(title).toBeDefined();
    })
})