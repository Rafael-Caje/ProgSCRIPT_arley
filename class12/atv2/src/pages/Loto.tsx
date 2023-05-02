import Lotofacil from "../components/Lotofacil";
import { useContexto } from "../hooks";

function Loto(){
    const { lotofacil } = useContexto();

    return (
        <>
            {
            lotofacil.numeroDoConcurso?
                <>
                    <Lotofacil />
                    <hr color = "#ddd" />
                </>
                :
                <div className="LoadingPage">Carregando...</div>
            }
        </>
    );
}

export default Loto;