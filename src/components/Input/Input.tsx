import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'
import styles from './input.module.css'
interface InputProps {
    style?: 'form' | 'settings'
    Icon?: FC
    type?: HTMLInputTypeAttribute
    placeholder?: string
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    labelText?:string
}

const Input:FC<InputProps> = ({ style, labelText, Icon, type, placeholder, value, onChange }) => {
  return (
    <>
    <label className={`${styles.base_label} ${style === 'form' && styles.form_label}`}>{labelText}</label>
    <div className={styles.base_input_container}>
      {Icon && <Icon/>}
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange && onChange}
      />
    </div>
    </>
  )
}

Input.defaultProps = {
  style: 'form',
  type: 'text',
  value: undefined
}

export default Input
