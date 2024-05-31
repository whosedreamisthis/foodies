import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
export default function mainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImage} alt="A plain with food on it" priority></Image>
        NextLevel food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
