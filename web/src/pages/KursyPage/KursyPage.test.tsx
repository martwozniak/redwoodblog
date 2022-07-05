import { render } from '@redwoodjs/testing/web'

import KursyPage from './KursyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KursyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KursyPage />)
    }).not.toThrow()
  })
})
