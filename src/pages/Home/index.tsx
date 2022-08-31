import { ProductItem, ProductList, HomeContainer } from './styles';
import { ShoppingCart } from 'phosphor-react';
import { api } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import { CartContext, IProduct } from '../../App';
import { Shimmer } from '../../components/Shimmer';



export function Home() {
    const [products,setProducts] = useState<IProduct[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const { addCart } = useContext(CartContext);

    // Load products
    useEffect(()=>{
        api.get('products/?page=1&rows=8&sortBy=id&orderBy=ASC').then((response => {
            setProducts(response.data.products);
            setIsLoading(false);
        }))
    },[])

    return (
        <HomeContainer>
            {isLoading ? 
            (
                <Shimmer />
            ) 
            : 
            (
                <ProductList>
                    {
                    products.length > 0 ? (
                        products.map(product => {
                            return (
                                <ProductItem key={product.id} addToCart={addCart}>
                                    <img src={product.photo} alt="" />
                                    <div>
                                        <h3>{product.name}</h3>
                                        <span>R${product.price}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <button onClick={() => addCart(product)}><ShoppingCart/> COMPRAR</button>
                                </ProductItem>
                            )
                        })
                    ) :
                    (
                       'O carrinho está vazio'
                    )
                }
                </ProductList>
            )
            }
                
        </HomeContainer>
    )
}