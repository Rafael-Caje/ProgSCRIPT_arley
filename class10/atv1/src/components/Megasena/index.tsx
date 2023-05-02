import { useContexto } from "../../hooks";
import "./index.css";
import TrevoMegasena from "../../assets/trevo-megasena.png"

function Megasena(){
    const {megasena} = useContexto();

    return (
        <>
        <body className="megasena">
            <img src={TrevoMegasena} id="m_trevo" alt="Trevo da Megasena"/>
        <div className="m_tipo">
            {"MEGA-SENA"}
        </div>
            <div className="m_dezena">
                {megasena.dezenas.map((m_dezena, m_pairs) => (
                    <div className="m_circle" key={m_pairs}>
                    {m_dezena}
                    </div>
                ))}
            </div>
            <div className="m_estimativa">
                {`Estimativa de prêmio do próximo
                consurso. Sorteio em ${megasena.dataProximoConcurso}`}
            </div><div  className="m_ganha">
            {megasena.acumulado ?
                "ACUMULOU!"
                :
                `${megasena.quantidadeGanhadores} GANHADORES`
                }
            </div><div className="m_valor">
            {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            <div className="m_data">
            {`Concurso ${megasena.numeroDoConcurso} - 
                ${megasena.dataPorExtenso}`}
            </div>
        </body>
        </>
    );
}

export default Megasena;