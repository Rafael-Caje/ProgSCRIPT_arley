import useExemplo from "../hooks/useExemplo";


function C(){
    const {nome,idade} = useExemplo();
    return <div><div>Nome: {nome} Idade:{idade} </div></div>;
  }

export default C;