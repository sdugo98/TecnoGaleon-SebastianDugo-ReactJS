import { pedirDatos } from "../../helpers/pedirDatos";
import {useState, useEffect} from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState("Productos");
    const tipo = useParams().categoria;

    useEffect(() => {
        pedirDatos()
        .then((res)=>{
            if(tipo){
                setProductos(res.filter((prod)=> prod.tipo === tipo));
            } else {
                setProductos(res);
                setNombre("Productos");
            }
         })
    }, [tipo])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
};

export default ItemListContainer;
