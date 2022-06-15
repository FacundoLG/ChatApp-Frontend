import styles from './header.module.css'
import LOGO from '../../assets/svgs/Logo.svg'
import { FC } from 'react'
import { AiFillSetting, AiFillBell } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
interface HeaderProps {
  username: string
  notifications_length?: number
}

const Header:FC<HeaderProps> = ({ username }) => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div>
        <img onClick={() => {
          navigate('/')
        }} className={styles.logo} src={LOGO} alt="Chat app logo" />
        <p>{username}</p>
      </div>
      <nav className={styles.nav}>
        <a href=""> <AiFillBell/> </a>
        <a href=""> <AiFillSetting/> </a>
      </nav>
    </header>
  )
}

export default Header
