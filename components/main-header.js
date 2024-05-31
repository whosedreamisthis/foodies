import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
export default function mainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImage.src} alt="A plain with food on it"></img>
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
