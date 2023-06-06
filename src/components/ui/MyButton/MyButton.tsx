import styles from '@/components/ui/MyButton/MyButton.module.scss';
import { FC, MouseEventHandler, PropsWithChildren  } from 'react';
import ReactIcon from './../ReactIcon/ReactIcon';

interface IMyButton {
  type?: 'button' | 'submit',
  buttonClick: (e: any) => void,
  isLoading: boolean
}

export const MyButton: FC<PropsWithChildren<IMyButton>> = ({children, type = 'button', buttonClick, isLoading = false}) => {
  return (
    <button
      type={type}
      onClick={buttonClick}
      className={`px-[10px] py-[5px] rounded-[10px] ${styles['my-button']} relative`}
    >
      <span style={{color: isLoading ? 'transparent' : ''}}>{children}</span>
      {isLoading && <ReactIcon
        className={`absolute top-[50%] ${styles['icon-position']}`}
      />}
    </button>
  )
}