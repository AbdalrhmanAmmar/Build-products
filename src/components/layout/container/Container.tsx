import { ReactNode } from 'react';
import styles from './styles.module.css';

const { container } = styles;

interface IProp{
  children: ReactNode
}
const Container = ({children}:IProp)=>{
  return (
    <div className={container}>
{/* container block */}

{ children }
    
{/* end container block */}



    </div>
  )
}

export default Container