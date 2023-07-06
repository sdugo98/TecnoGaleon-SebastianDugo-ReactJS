import Item from "./Item/Item";
import { capitalLetter } from "../../../helpers/capitalLetter";

const ItemList = ({productos, nombre}) => {
  return (
    <div class= "container">
        <h2 class ="main-title">{nombre}</h2>
        <div className="productos">
            { productos.map((prod)=> <Item producto= {prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList;