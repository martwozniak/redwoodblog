import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomeepagePage = () => {
  return (
    <>
      <MetaTags title="Homeepage" description="Homeepage page" />

      <h1>Hello from HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomeepagePage/HomeepagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>homeepage</code>, link to me with `
        <Link to={routes.homeepage()}>Homeepage</Link>`
        <Link to={routes.kursy()}>Kursy</Link>`
      </p>
    </>
  )
}

export default HomeepagePage
