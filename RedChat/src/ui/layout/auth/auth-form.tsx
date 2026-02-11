import InputAuth from '@/ui/layout/auth/input.auth'
import Button , { ButtonType }  from '@/ui/layout/auth/button.auth'
import { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AuthForm = () => {
const location = useLocation();
const currentPath = location.pathname
const buttonType = currentPath.includes('/login') ? ButtonType.LOGIN : ButtonType.REGISTER;
 
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState<Record<string, string>>({})

const isFormValid = Object.keys(errors).every((key) => errors[key].trim().length > 0);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {}
    if(!name.trim()) newErrors.name = 'Имя пользователя обязательно';
    if(!password.trim()) newErrors.password = 'Пароль обязателен';
      setErrors(newErrors);
    if(Object.keys(newErrors).length === 0){
       console.log('Форма отправлена', { name, password });
    handleLoginClick();
    }
    
}

const handleLoginClick = ():void => {
  console.log('залогинился')
}

  return (
    <form onSubmit={handleSubmit}> 
<InputAuth
label='Имя пользователя'
type='text'
placeholder='Введите имя пользователя'
icon={User}
value={name}
onChange={(e) => {
    setName(e.target.value);
}}
 error={errors.name}

/>
<InputAuth
label='Пароль'
type='password'
placeholder='Введите пароль'
icon={Lock}
value={password}
onChange={(e) => {
    setPassword(e.target.value);
}}
error={errors.password}
/>
<Button
        disabled={!isFormValid}
       buttonType={buttonType}
        onClick={handleLoginClick}
      />

    </form>
  )
}

export default AuthForm
