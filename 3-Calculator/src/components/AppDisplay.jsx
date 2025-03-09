import styles from './AppDisplay.module.css'

function AppDisplay({displayValue}){
  return(
    <input type='text' className={styles.display} value={displayValue} readOnly></input>
  )
}

export default AppDisplay;