import styles from './button.module.css';
import { forwardRef } from "react";
import { useKeyPress } from "@/hooks/index.js";
import { Loader } from "@/components/ui/index.js";

export const Button = forwardRef(({ className, onClick, text, isAble = true, ariaLabel, loading }, ref) => {

  const handleClick = () => {
    if (!loading) onClick();
    ref?.current.blur();
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && isAble) {
      handleClick();
    }
  }

  useKeyPress(handleKeyPress, [isAble, onClick]);

  return (
    <section className={`${styles['btn-wrapper']} ${!isAble || loading ? styles['btn-wrapper_disable'] : ''}`}>
      <button className={className ? className : styles.btn} onClick={isAble ? handleClick : () => {
      }} aria-label={ariaLabel} ref={ref} disabled={!isAble}>
        {loading ? <Loader /> : text}
      </button>
      <p className={styles['btn-caption']}>или нажми <span className={styles['btn-caption_bold']}>Enter ↵</span></p>
    </section>
  );
});

Button.displayName = 'Button';