import styles from './Input.module.css'

const Input = ({ label, id, ...props }) => {
  return (
    <div className={styles.control}>
      <div className={styles.input}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}></input>
      </div>
    </div>
  );
};

export default Input;
