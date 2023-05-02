import { useContexto } from "../../hooks";
import "./index.css";
import TrevoQuina from "../../assets/trevo-quina.png"

function Quina(){
    const {quina} = useContexto();

    return (
        <div className="quina">
            <img src={TrevoQuina} id="q_trevo" alt="Trevo da Quina"/>
        <div className="q_tipo">
            {"QUINA"}
        </div>
            <div className="q_dezena">
                {quina.dezenas.map((q_dezena, q_pairs) => (
                    <div className="q_circle" key={q_pairs}>
                    {q_dezena}
                    </div>
                ))}
            </div>
            <div className="q_estimativa">
                {`Estimativa de prêmio do próximo
                consurso. Sorteio em ${quina.dataProximoConcurso}`}
            </div><div  className="q_ganha">
            {quina.acumulado ?
                "ACUMULOU!"
                :
                `${quina.quantidadeGanhadores} GANHADORES`
                }
            </div><div className="q_valor">
                {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            <div className="q_data">
                {`Concurso ${quina.numeroDoConcurso} - 
                ${quina.dataPorExtenso}`}
            </div>
        </div>

    );
}

export default Quina;