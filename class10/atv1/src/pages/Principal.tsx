import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";
import "./Principal.css";

function Principal(){
    const { megasena } = useContexto();
    const { lotofacil } = useContexto();
    return (
        <body>
            {
            megasena.numeroDoConcurso&&
            lotofacil.numeroDoConcurso?

                <div>
                    <Megasena />
                    <Lotofacil />
                </div>
                :
                <div className="LoadingPage">Carregando...</div>
            }
        </body>
    );
}

export default Principal;