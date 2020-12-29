import('./bootstrap')

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Container App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
        <h1>Container Header</h1>
      </footer>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to Container Micro Frontend App
        </h3>
      </main>

      <footer className={styles.footer}>
        Container Footer
      </footer>
    </div>
  )
}