import { ReactNode } from "react"
import styles from "./Button.module.css"

interface Props {
    children: ReactNode
    onClick: () => void;
}

const Button = ({children, onClick}: Props) => {
  return (
    <button type="submit" className={[styles.btn, styles.btnBg].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button