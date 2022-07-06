import { Link, routes } from '@redwoodjs/router'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
