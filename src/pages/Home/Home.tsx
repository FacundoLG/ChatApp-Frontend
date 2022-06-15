import React from 'react'
import ChatSelector, { UserMock } from '../../components/ChatSelector/ChatSelector'
import styles from './home.module.css'
const Home = () => {
  const FakeFriends:UserMock[] = [
    {
      last_message: 'Holaa',
      user_url: '',
      username: 'Fachero32'
    },
    {
      last_message: 'Wii wuu wii wuu wii wuu',
      user_url: '',
      username: 'Dante Al'
    }
  ]

  return (
    <div className={styles.home}>
      <ChatSelector friends={FakeFriends}/>
    </div>
  )
}

export default Home
