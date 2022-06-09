import { FC, MouseEvent, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps {
    children: ReactNode
    onClick: (e:MouseEvent<HTMLElement>) => void
}

const Button:FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  )
}

export default Button
