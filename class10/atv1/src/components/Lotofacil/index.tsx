import { useContexto } from "../../hooks";
import "./index.css"
import TrevoLotofacil from "../../assets/trevo-lotofacil.png"


function Lotofacil(){
    const {lotofacil} = useContexto();

    return (
        <>
        <body className="lotofacil">
            <img src={TrevoLotofacil} id="l_trevo" alt="Trevo da Lotofacil"/>
        <div className="l_tipo">
                {"LOTOFÁCIL"}
            </div>
            <div className="l_dezena">
                {lotofacil.dezenas.map((dezena, pairs) => (
                    <div className="l_matriz" key={pairs}>
                    {dezena}
                    </div>
                ))}
            </div>

            <div className="l_estimativa">
            {`Estimativa de prêmio do próximo
                consurso. Sorteio em ${lotofacil.dataProximoConcurso}`}
            </div>
            <div className="l_ganha">
                {lotofacil.acumulado ?
                "ACUMULOU!"
                :
                `${lotofacil.quantidadeGanhadores} GANHADORES`
                }
            </div>
            <div className="l_valor">
                {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            <div className="l_data">
                {`Concurso ${lotofacil.numeroDoConcurso} - 
                ${lotofacil.dataPorExtenso}`}
            </div>
            </body>
        </>
    );
}

export default Lotofacil;