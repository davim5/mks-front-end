import { useContext, useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { IProduct } from '../../App';
import { CartContext } from '../../App';
import { AmountButtons, ProductContainer } from './styles';
import styles from './styles.module.scss';

interface CartModalProps {
    onModalIsOpen: boolean, 
    onSetIsOpen: () => void,
    onCloseModal: () => void,
}

export function CartModal({onModalIsOpen,onSetIsOpen, onCloseModal}:CartModalProps) {

    const { products,totalPrice } = useContext(CartContext)

    useEffect(() => {},[products])

    return (
        <Modal
         className={styles.content}
         overlayClassName={styles.overlay}
         isOpen={onModalIsOpen}
         onRequestClose={onCloseModal}
         ariaHideApp={false}
       >
        <div>
         <h2>Carrinho de compras</h2>
         <button onClick={onCloseModal}>X</button>
        </div>
        <div>
        <ul>
            {products.map((product:IProduct) => {
                return (
                    <ProductContainer key={product.id}>
                        <img src={product.photo} alt="" />
                        <strong>{product.name}</strong>
                        <AmountButtons>
                            <button className='control-button'>-</button>
                            <span>1</span>
                            <button className='control-button'>+</button>
                        </AmountButtons>
                        <span>R${product.price}</span>
                    </ProductContainer>
                )
            })}
         </ul>   
        </div>
         <span>Total: R${totalPrice}</span>
         <button className={styles.finishButton}>Finalizar Compra</button>
       </Modal>
    );
}