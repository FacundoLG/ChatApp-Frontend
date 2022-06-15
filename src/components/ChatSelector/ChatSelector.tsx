import { FC } from 'react'
import Button from '../Button/Button'
import styles from './chatselector.module.css'
import { AiOutlineClose } from 'react-icons/ai'

export interface UserMock {
  username: string
  user_url: string
  last_message: string
}

interface ChatSelectorProps {
  friends?: UserMock[],
  onSetActiveChat?: (friend: UserMock) => void
}
const ChatSelector:FC<ChatSelectorProps> = ({ friends }) => {
  const MAX_MESSAGE_LENGTH = 10
  return (
    <div className={styles.chat_selector}>
      <div className={styles.close_button_container}>
        <Button style='clean' onClick={() => {}}> <AiOutlineClose/> </Button>
      </div>
      {friends?.map((friend, index) =>
        <div className={styles.chat_card} key={index + friend.username}>
          <img src={friend.user_url || 'http://www.medqualityassurance.org/views/images/default_user.png'} alt="" />
          <div>
            <p className={styles.user_name}>{friend.username}</p>
            <p className={styles.last_message}>{friend.last_message.slice(0, MAX_MESSAGE_LENGTH) + (friend.last_message.length >= MAX_MESSAGE_LENGTH ? '...' : '') }</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatSelector
