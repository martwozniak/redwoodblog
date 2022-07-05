import { render } from '@redwoodjs/testing/web'

import HomeepagePage from './HomeepagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeepagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeepagePage />)
    }).not.toThrow()
  })
})
