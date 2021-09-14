import styles from './button.module.css'

type ButtonProps = {
    isFilled?: boolean;
    onClick: () => void;
    children: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
