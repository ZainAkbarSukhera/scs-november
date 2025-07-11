import styles from './TextInput.module.css';

function TextInput(props){
  return(
    <div className={styles.textInputWrapper}>
      <input {...props} />
      {props.error && <p className={styles.errorMessage}>{props.errorMessage}</p>}
    </div>

  );
};

export default TextInput;