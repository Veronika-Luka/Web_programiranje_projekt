import { db } from "./firebase-config";
import {useState, useEffect} from "react"
import {collection,  getDocs,}
 from 'firebase/firestore';
import { async } from '@firebase/util';
const Cards = () => {
    const [products, setProducts] = useState([])
    const productsCollectionRef=collection(db, 'gitare')


    useEffect(() => {
        const getProducts = async () => {
          const data= await getDocs(productsCollectionRef);
          setProducts(data.docs.map((doc)=>({...doc.data(), id:doc.id}))); 
        };
    
    
        getProducts();
      }, []);

    return (
        <div className="Cards">
        {products.map((product) =>{
            return (
                <div className="container py-5">
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img src={product.picture}
                                className="w-100"/>
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>{product.name}</h5>
                           
                             
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>{product.manufacturer}</span>
                              
                            </div>
                         
                            <p className="text-truncate mb-4 mb-md-0">
                                {product.description}
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">{product.price}</h4>
                              
                            </div>
                           
                            <div className="d-flex flex-column mt-4">
                              
                              <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                Dodaj u košaricu
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            );
        })}
        </div>
       
       

      );
}
 
export default Cards;