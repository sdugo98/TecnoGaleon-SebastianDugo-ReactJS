import {collection, getDocs} from "firebase/firestore";
import {useEffect} from 'react';
import {db} from '../../utils/firebase'


export const UsarFirebase = () => {
    useEffect(()=>{
    const getData = async() =>{
        const query = collection(db, 'items');
        const response = await getDocs(query);
        const data = response.docs.map(doc=>{return {id:doc.id, ...doc.data()}});
        console.log('data', data)
    }
    getData();
}, [])

}