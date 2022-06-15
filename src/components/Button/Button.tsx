import { FC, MouseEvent, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps {
    style?: 'fill' | 'clean'
    children: ReactNode
    onClick: (e:MouseEvent<HTMLElement>) => void
}

const Button:FC<ButtonProps> = ({ style, children, onClick }) => {
  switch (style) {
    case 'clean':
      return (
        <button onClick={onClick} className={styles.button_clean}>{children}</button>
      )
    default:
      return (
        <button onClick={onClick} className={styles.button}>{children}</button>
      )
  }
}

export default Button
