import { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from '../src/layouts/MainLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>Главная страница | {process.env.NEXT_PUBLIC_APP_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Главная страница</h1>
        <pre>Ознакомительный проект, который использует функции Next.js</pre>
      </div>
    </MainLayout>
  )
}

export default Home
