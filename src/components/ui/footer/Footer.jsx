import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <p className={styles['footer-text-info']}>
        Проект выполнен в рамках стажировки <a href="https://preax.ru"
                                               className={styles['footer-text-info__link']}
                                               target="_blank">PREAX</a>
      </p>
    </footer>
  );
};