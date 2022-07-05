import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const KursyPage = () => {
  return (
    <>
      <MetaTags title="Kursy" description="Kursy page" />

      <h1>KursyPage</h1>
      <p>
        Find me in <code>./web/src/pages/KursyPage/KursyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>kursy</code>, link to me with `
        <Link to={routes.kursy()}>Kursy</Link>`
      </p>
    </>
  )
}

export default KursyPage
