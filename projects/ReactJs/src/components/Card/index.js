import { useState } from "react";
import Button from '../Button'

const Card = () => {

    const [valor, setValor] = useState(0)
    function Adicionar(){
        setValor(valor + 1)
    }

    function Remover(){
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu Card
            </div>
            <div className="card-body">            
                <h2>{valor}</h2>

               <Button className ="btn btn-success" onClick={Adicionar}>
                   Adicionar
               </Button>
                <button type="button" className="btn btn-danger"
                onClick={Remover}>
                    Remover
                </button>
               
            </div>
        </div>
    )
}

export default Card;