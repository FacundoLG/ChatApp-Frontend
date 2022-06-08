import { FC } from 'react'
import styles from './auth.module.css'
import LOGO from '../../assets/svgs/Logo.svg'
import Input from '../../components/Input/Input'
interface AuthProps {
  mode: 'sing-in' | 'sing-up'
}

const Auth:FC<AuthProps> = () => {
  return (
    <div className={styles.auth}>
        <img src={LOGO} alt="" />
          <form className={styles.form}>
            <p className={styles.form_title}>SingIn</p>
            <Input placeholder='Username' error='Uwuwu'/>
            <Input placeholder='Password'/>
            <div className={styles.button_container}>
              <button>Singin</button>
              <p>Don&apos;t have an account? Sinup </p>
            </div>
          </form>
    </div>
  )
}

Auth.defaultProps = {
  mode: 'sing-in'
}

export default Auth
