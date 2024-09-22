import styles from './logo.module.css';
import logoPic from '@/assets/logo.svg';
import logoMobilePic from '@/assets/logo-mobile.svg';

export const Logo = () => {
  return (
    <a href='/' className={styles.logo}>
      <picture>
        <source srcSet={logoMobilePic} media={'(max-width: 767px)'} />
        <img src={logoPic} alt='Логотип' />
      </picture>
    </a>
  );
};