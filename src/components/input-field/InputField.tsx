import styles from '@/components/input-field/InputField.module.scss';
import { FC, forwardRef } from 'react';

interface IInputField {
  title: string,
  type: 'text' | 'password' | 'email',
  errorMessage?: string,
  error?: {message?: string}
}

export const InputField = forwardRef<HTMLInputElement, IInputField>(
  (props, ref) => {
    const {title, type, error, ...rest} = props;
    return (
      <div
        className='w-full max-w-[400px]'
      >
        <h4 className={`${styles['input-title']}`}>{title}</h4>
        <input 
          type={type} 
          className=
          {`
            ${styles['input']} 
            ${error && styles['input-error']}
          `}
          ref={ref}
          {...rest}
        />
        <div style={{minHeight: '18px'}}>
          {error && <p className={`${styles['error']}`}>{error.message}</p>}
        </div>
      </div>
    )
  }
)

InputField.displayName = 'InputField';