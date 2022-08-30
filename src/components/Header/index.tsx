import Modal, { Styles } from 'react-modal';
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { HeaderContainer, LogoContainer } from './styles';
import { CartModal } from '../CartModal';
import { CartContext } from '../../App';

export function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);
    const { products } = useContext(CartContext);

    function openModal() {
        setIsOpen(true);
      }
    
    function closeModal() {
        setIsOpen(false);
    }

    return(
        <>
        <HeaderContainer>          
            <LogoContainer> 
                <strong>MKS</strong>
                <span>Sistemas</span>
            </LogoContainer>
                
            <button onClick={openModal}><ShoppingCart color='#000' size={22}/> {products.length}</button>
            
        </HeaderContainer>
        <CartModal onModalIsOpen={modalIsOpen} onSetIsOpen={openModal} onCloseModal={closeModal}/>
       </>
    );
}