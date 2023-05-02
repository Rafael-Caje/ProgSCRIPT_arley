import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";

function Mega(){
    const { megasena } = useContexto();

    return (
        <>
            {
            megasena.numeroDoConcurso?
                <>
                    <Megasena />
                    <hr color = "#ddd" />
                </>
                :
                <div className="LoadingPage">Carregando...</div>
            }
        </>
    );
}

export default Mega;