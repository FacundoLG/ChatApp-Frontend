import { FC } from 'react'
import styles from './auth.module.css'
import LOGO from '../../assets/svgs/Logo.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
interface AuthProps {
  mode: 'sing-in' | 'sing-up'
}

const Auth:FC<AuthProps> = () => {
  const SingIn = () => {

  }

  return (
    <div className={styles.auth}>
        <img src={LOGO} alt="" />
          <form className={styles.form}>
            <p className={styles.form_title}>SingIn</p>
            <Input placeholder='Username' error='Uwuwu'/>
            <Input placeholder='Password'/>
            <div className={styles.button_container}>
              <Button onClick={SingIn}>Singin</Button>
              <p className={styles.auth_message}>Don&apos;t have an account? <Link className={styles.link} to={'/singup'}>Sing up</Link>  </p>
            </div>
          </form>
    </div>
  )
}

Auth.defaultProps = {
  mode: 'sing-in'
}

export default Auth
