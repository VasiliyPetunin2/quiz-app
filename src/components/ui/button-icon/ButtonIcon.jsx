import styles from "./button-icon.module.css";

export const ButtonIcon = ({ className, onClick, text, isAble = true, ariaLabel }) => {
  return (
    <button className={`${className ? className : styles['btn-icon']} ${!isAble && styles['btn-unavailable']}`}
            onMouseDown={isAble ? onClick : () => {
            }} aria-label={ariaLabel} disabled={!isAble}>
      {text}
    </button>
  );
};