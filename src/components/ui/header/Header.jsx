import styles from "./header.module.css";
import { Logo } from "@/components/ui/index.js";
import illustrationWelcomePageMobile from "@/assets/illustration-welcome-page-mobile.svg";
import illustrationWelcomePage from "@/assets/illustration-welcome-page.svg";
import { ButtonIcon } from "@/components/ui/index.js";

export const Header = ({ page, setPage }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {page === 'welcome' &&
        <picture>
          <source srcSet={illustrationWelcomePageMobile} media={'(max-width: 767px)'} />
          <img src={illustrationWelcomePage} alt='Иллюстрация с человеком на летающей ракете'
               data-id='illustrationWelcomePage' />
        </picture>}
      {page === 'question' &&
        <ButtonIcon className={styles['btn-cross']} onClick={() => setPage('welcome')} />}
    </header>
  );
};