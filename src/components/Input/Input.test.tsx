import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input tests', () => {
  test('Inner input exist and contain the provided placeholder and value', () => {
    render(<Input placeholder='place' value='value'/>)
    const element = screen.getByPlaceholderText('place') as HTMLInputElement
    expect(element).toBeInTheDocument()
    expect(element.value).toBe('value')
  })
  test('Error message should exist', () => {
    render(<Input error='Hola manola' />)
    const errorTag = screen.getByText('Hola manola')
    expect(errorTag).toBeInTheDocument()
  })
})
