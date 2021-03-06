
import {useState, useEffect} from "react"
import {db} from './firebase-config'
import {collection,  getDocs,deleteDoc,doc} from 'firebase/firestore';
import { async } from '@firebase/util';



const Favorites  = () => {
    const [favorit, setFavorit] = useState([])
    const favoritesCollectionRef=collection(db, 'favoriti');

    const deleteFavorit = async(id)=>{
        const userDoc = doc(db,"favoriti", id)
        await deleteDoc(userDoc)
        const filtered=favorit.filter((product)=>product.id!==id)
        setFavorit(filtered)
      }


    useEffect(() => {
        const getFavorites = async () => {
          const data= await getDocs(favoritesCollectionRef);
          setFavorit(data.docs.map((doc)=>({...doc.data(), id:doc.id}))); 
        };
    
    
        getFavorites();
      }, []);


    return ( 
        <div className="Favorites">
        {favorit.map( (product) =>{
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
                              <span>Proizvo??a??: {product.manufacturer}</span>
                              
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
                              
                              <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={()=>{deleteFavorit(product.id)}}>
                                Ukloni
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
 
export default Favorites;