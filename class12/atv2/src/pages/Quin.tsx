import Quina from "../components/Quina";
import { useContexto } from "../hooks";

function Quin(){
    const { quina } = useContexto();

    return (
        <>
            {
            quina.numeroDoConcurso?
                <>
                    <Quina />
                    <hr color = "#ddd"  />
                </>
                :
                <div className="LoadingPage">Carregando...</div>
            }
        </>
    );
}

export default Quin;