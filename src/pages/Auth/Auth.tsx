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
        <div>
          <form>
            <p>SingIn</p>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
          </form>
        </div>
    </div>
  )
}

Auth.defaultProps = {
  mode: 'sing-in'
}

export default Auth
