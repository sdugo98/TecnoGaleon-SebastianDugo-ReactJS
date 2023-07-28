import './ItemDetailContainer.css'
// import {Productos} from '../../data/data' //Utilizado en caso de no emplear FireBase.
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
import {collection, getDocs, doc, getDoc} from "firebase/firestore";
import {db} from '../../utils/firebase'




export const ItemDetailContainer = () => {


    const [itemDetailCont, setItemDetailCont ] = useState([])

    const {id} = useParams ();

    useEffect(()=>{

        const getData = async() =>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
            // const data = response.docs.map(doc=>doc.data())



            console.log('dataItems', dataItems)

            const queryDoc = doc(db, "items", id)
            const responseDoc = await getDoc(queryDoc)
            const dataDoc = responseDoc.data()

            const filteredById = dataItems.filter(prod=>prod.id==id)
            setItemDetailCont (filteredById)


            console.log('id', responseDoc.id)
            console.log('dataDoc', dataDoc)

        }
        getData();
    }, [])


    // Utilizado en caso de no emplear Firebase
    
    // useEffect(()=>{
    //     const promise = getItems()
    //     promise.then(json => {setItemDetailCont(json)})
    // }, [itemDetailCont, id])

    // const getItems = () =>{
    //     const promise = new Promise((resolve,reject) =>{
    //         const filteredById = Productos.filter(prod=>prod.id==id)
    //         setTimeout(()=>{ // original: resolve(Productos)
    //             resolve(filteredById)

    //         }, 2000)
    //     })

    //     return promise
    // }
    
    
    return ( 
        <div>

        {
        !!itemDetailCont.length? 

        
            <Container className="mt-5 itemDetailContainer">

                {itemDetailCont.map((product)=>{

                        return(
                        
                            <ItemDetail item={product}/>  

                                )
                        })
                    
                }
                
                
            </Container>
            :

            <div className="loader">
                <Loader type={"balls"} color= {"#0D6EFD"} />
            </div>
            }
        </div>
        )
    }