import { FC, useState, useEffect } from 'react'
import styles from './auth.module.css'
import LOGO from '../../assets/svgs/Logo.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
interface AuthProps {
  mode: 'sing-in' | 'sing-up'
}

interface InputInfo {
  value: string,
  error: string
}
const defaultInputInfo: InputInfo = {
  value: '',
  error: ''
}

const Auth:FC<AuthProps> = ({ mode }) => {
  const [username, setUsername] = useState<InputInfo>(defaultInputInfo)
  const [password, setPassword] = useState<InputInfo>(defaultInputInfo)
  const [confirmationPassword, setConfirmationPassword] = useState<InputInfo>(defaultInputInfo)
  const [name, setName] = useState<InputInfo>(defaultInputInfo)

  const navigate = useNavigate()

  const reset = () => {
    setUsername(defaultInputInfo)
    setPassword(defaultInputInfo)
    setConfirmationPassword(defaultInputInfo)
    setName(defaultInputInfo)
  }

  useEffect(() => {
    return () => {
    }
  }, [])

  const SingIn = () => {

  }

  const SingUp = () => {

  }

  return (
    <div className={styles.auth}>
        <img src={LOGO} alt="" onClick={() => { navigate('/') }}/>
          <form className={styles.form}>
            {
              mode === 'sing-in'
                ? <p className={styles.form_title}>SingIn</p>
                : <p className={styles.form_title}>SingUp</p>
            }
            <Input
            placeholder='Username'
            error=''
            onChange={(e) => { setUsername({ error: '', value: e.target.value }) }}
            value={username?.value}
            />
            <Input
            placeholder='Password'
            error=''
            onChange={(e) => { setPassword({ error: '', value: e.target.value }) }}
            value={password.value}
            />
        {
          mode === 'sing-up' &&
          <>
            <Input
            placeholder='Confirmation Password'
            error=''
            onChange={(e) => { setConfirmationPassword({ error: '', value: e.target.value }) }}
            value={confirmationPassword.value}
            />
            <Input
            placeholder='Name'
            error=''
            onChange={(e) => { setName({ error: '', value: e.target.value }) }}
            value={name.value}
            />
          </>
        }

            <div className={styles.button_container}>
        {
          mode === 'sing-in'
            ? <>
            <Button onClick={SingIn}>Singin</Button>
            <p className={styles.auth_message}>Don&apos;t have an account? <Link className={styles.link} onClick={reset} to={'/singup'}>Sing up</Link>  </p>
          </>
            : <>
            <Button onClick={SingUp}>SingUp</Button>
            <p className={styles.auth_message}>Don&apos;t have an account? <Link className={styles.link} onClick={reset} to={'/singin'}>Sing in</Link>  </p>
          </>
        }
            </div>
          </form>
    </div>
  )
}

Auth.defaultProps = {
  mode: 'sing-in'
}

export default Auth
