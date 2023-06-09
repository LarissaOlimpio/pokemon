import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.divNavBar}>
      <ul className={styles.listNavBar}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>Sobre</li>
        </Link>
      </ul>
    </div>
  )
}
