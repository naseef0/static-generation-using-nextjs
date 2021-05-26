import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome
      </h1>
      <div className={styles.card}>
        <h1>Click
          <Link href="/">
            <a>
              here
          </a>
          </Link>
        </h1>
      </div>
    </div>
  )
}
export default Home;