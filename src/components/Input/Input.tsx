import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'
import styles from './input.module.css'
interface InputProps {
    style?: 'form' | 'simple'
    Icon?: FC
    type?: HTMLInputTypeAttribute
    placeholder?: string
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    labelText?:string,
    error?: string
}

const Input:FC<InputProps> = ({ error, style, labelText, Icon, type, placeholder, value, onChange }) => {
  return (
    <>
    <label className={`${styles.base_label} ${style === 'form' && styles.clean_label}`}>{labelText}</label>
    <div className={`${styles.base_input_container} ${style === 'form' && styles.clean_input_container}`}>
      {Icon && <Icon/>}
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange && onChange}
      />
    </div>
    {style === 'form' && <p className={styles.form_error}>{error}</p>}
    </>
  )
}

Input.defaultProps = {
  style: 'form',
  type: 'text',
  value: undefined,
  error: ''
}

export default Input
