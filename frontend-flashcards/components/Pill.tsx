
import styles from './pill.module.css'

type PillProps = {
  text: string;
  family: string;
}

export default function Pill(props: PillProps) {
  return (
    <span className={styles.pill} >
      {props.text}
    </span>
  )
}
