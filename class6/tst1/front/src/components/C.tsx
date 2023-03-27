import { useContext } from "react";
import Contexto from "../contexts/Contexto";

function C(){
    const {idade,nome} = useContext(Contexto);
    return <div><div>Nome: {nome} Idade:{idade} </div></div>;
  }

export default C;