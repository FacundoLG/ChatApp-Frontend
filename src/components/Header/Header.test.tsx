import { render } from '@testing-library/react'
import Header from './Header'

describe('Tests for Header', () => {
  const username = 'Facundo'
  test('Header should render the username', async () => {
    const header = render(<Header username={username}/>)
    const text = header.getByText(username)
    expect(text).toBeInTheDocument()
  })
})
