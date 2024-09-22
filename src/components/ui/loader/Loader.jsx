import styles from './loader.module.css';
import loaderElemCircle from '@/assets/loader-element-circle.svg';
import loaderElemCircleMobile from '@/assets/loader-element-circle-mobile.svg';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <picture>
        <source srcSet={loaderElemCircleMobile} media={'(max-width: 767px)'} />
        <img className={styles['loader__circle']} src={loaderElemCircle} alt={'LoaderCircleElement'}
             id={styles['circle-first']} />
      </picture>
      <picture>
        <source srcSet={loaderElemCircleMobile} media={'(max-width: 767px)'} />
        <img className={styles['loader__circle']} src={loaderElemCircle} alt={'LoaderCircleElement'}
             id={styles['circle-second']} />
      </picture>
      <picture>
        <source srcSet={loaderElemCircleMobile} media={'(max-width: 767px)'} />
        <img className={styles['loader__circle']} src={loaderElemCircle} alt={'LoaderCircleElement'}
             id={styles['circle-third']} />
      </picture>
    </div>
  );
};