import { useState } from "react";
import { Bloco } from "./components/Bloco";
import { Header } from "./components/Header";
import { Msg } from "./components/Msg";
import { Propriedade } from "./components/Propriedade";
import { reduceEachLeadingCommentRange } from "typescript";
import { ThemeProvider } from "styled-components";

const cores = {
    fonte: "red",
    fundo: "yellow"
};

function App() {
  const [nome,setNome] = useState("");
  const [idade,setIdade] = useState("");
  return (
    <ThemeProvider theme={cores}>
      <Header />
      <Msg>OLÁ</Msg>
      <Bloco>
        <p>Bom dia</p>
        <div>Boa noite</div>
      </Bloco>
      <Propriedade rotulo="Nome" value={nome} set={setNome} />
      <Propriedade rotulo="Idade" value={idade} set={setIdade} />
    </ThemeProvider>
  );
}

export default App;
