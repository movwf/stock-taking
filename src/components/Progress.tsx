import {timer} from '../app/counter';
import styles from "./Progress.module.css";

function Progress() {
  const prog = timer.use();
  return (
  <progress className={styles.progressBar} id="file" value={prog} max="100" />
  )
}

export default Progress
