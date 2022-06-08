import { render } from '@testing-library/react'
import Auth from './Auth'

describe('Test for Auth component', () => {
  const auth = render(<Auth mode='sing-in'/>)
  test('The login or singin button should start deactive', () => {
  })
  test('Should not exist any input error message on first render', () => {

  })
})
