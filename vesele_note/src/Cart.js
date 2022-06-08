import {useState, useEffect} from "react"
import {db} from './firebase-config'
import {collection,  getDocs,deleteDoc,doc} from 'firebase/firestore';
import { async } from '@firebase/util';


const Cart = () => {
    const [cart, setCart] = useState([])
    const cartsCollectionRef=collection(db, 'kosarica');

    const deleteCard = async(id)=>{
        const userDoc = doc(db,"kosarica", id)
        await deleteDoc(userDoc)
        const filtered=cart.filter((product)=>product.id!==id)
        setCart(filtered)
      }
      function total() {
        let x = 0
        cart.map((product) => {
          const str= product.price.split(" ") 
          const a=str[0];
          x +=parseFloat(a);
    
        })
        return x
    }




    useEffect(() => {
        const getCards = async () => {
          const data= await getDocs(cartsCollectionRef);
          setCart(data.docs.map((doc)=>({...doc.data(), id:doc.id}))); 
        };
    
    
        getCards();
      }, []);
    
    return (  
        <div className='container mt-2'>
        <div className='row mt-3'>
             <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">Proizvod</th>
              <th scope="col">Naziv Proizvoda</th>
              <th scope="col">Cijena</th>
              <th scope="col">Proizvođač</th>
              <th scope="col">Ukloni</th>
            </tr>
          </thead>
          <tbody>
              {cart.map((product)=>{
                  return(
                      <tr>
                    <th scope="row">
                        <img src={product.picture} style={{ width: '4rem' }} />
                    </th>
                     <td>{product.name}</td>
                     <td>
                       {product.price}
                     </td>
                     <td>
                        {product.manufacturer}
                    </td>
                    <td>
                    <button onClick={() => deleteCard(product.id)} className="btn btn-danger">
                      Ukloni
                      </button>
                  </td >
                     </tr>
                  );
              })}
          </tbody>
          
        </table>
        </div>
        
        <div class="row">
        <div class="col text-center">
          <h5>Ukupno: {total()} kn</h5>
        </div>
        </div>
        </div>
    );
}
 
export default Cart;