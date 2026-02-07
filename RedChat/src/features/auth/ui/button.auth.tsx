import type { MouseEventHandler } from 'react';
import styles from '../styles/Button.module.css';
import type { JSX } from 'react/jsx-runtime';

interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ label, disabled, onClick }: ButtonProps): React.ReactElement => {

  const UserPlus: JSX.Element  = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" x2="19" y1="8" y2="14"/>
      <line x1="22" x2="16" y1="11" y2="11"/>
    </svg>
  );
  
  const LogIn: JSX.Element = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#ffffff" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m10 17 5-5-5-5"/>
      <path d="M15 12H3"/>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    </svg>
  );

  const iconsMap: Record<ButtonProps['label'], JSX.Element> = {
    'Зарегистрироваться': UserPlus,
    'Войти': LogIn,
  };

  const Icon = iconsMap[label] || null;

  return (
    <button
      type="submit"
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <span>{Icon}</span>}
      {label}
    </button>
  );
};

export default Button;