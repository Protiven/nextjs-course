import { FC, ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import APP_ROUTES from '../../constants/AppRoutes'
import styles from './styles.module.css'

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
            <nav className={styles.navbar}>
                <div>
                    <Link href={APP_ROUTES.root}>Главная страница</Link>
                    <Link href={APP_ROUTES.posts}>Блог</Link>
                </div>
            </nav>
            <main className={styles.content}>
                {children}
            </main>
        </>
  )
}

export default MainLayout
