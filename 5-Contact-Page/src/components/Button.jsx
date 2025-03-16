import styles from './Button.module.css';

const Button = ({ isThird, icon, text, ...rest }) => {
  return (
  <button {...rest} className={isThird ? styles.thirdBtn : styles.priBtn}>
    {icon}
    {text}
  </button>
  );
};

export default Button;