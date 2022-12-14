import { FC, ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import APP_ROUTES from '../../constants/AppRoutes'

interface MainLayoutProps {
  children?: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
        <>
            <Head>
                <title>Some title | {process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta name="description" content="course next app" />
            </Head>
            <nav>
                <Link href={APP_ROUTES.root}>Главная страница</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
  )
}

export default MainLayout
