import { ReactNode } from 'react';
import Container from '../container/Container';
import styles from './styles.module.css';

const {wrapper} = styles

interface IProp{
    show: boolean;
    closeFunc: ()=> void;
    children: ReactNode;

}

const Modal = ({show,children,closeFunc}:IProp)=>{
    if (!show) {
        return;
      }
  return (
    <>
    <div className={wrapper} onClick={closeFunc}> </div>
    <Container >

    { children }

    </Container>
    </>
  )
}

export default Modal