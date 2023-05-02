import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import { useContexto } from "../hooks";
import "./Principal.css";

function Principal(){
    const { megasena } = useContexto();
    const { lotofacil } = useContexto();
    const { quina } = useContexto();
    return (
        <body>
            {
            megasena.numeroDoConcurso&&
            lotofacil.numeroDoConcurso&&
            quina.numeroDoConcurso?

                <div>
                    <Megasena />
                    <Lotofacil />
                    <Quina />
                </div>
                :
                <div className="LoadingPage">Carregando...</div>
            }
        </body>
    );
}

export default Principal;