import "./Formulario.css";
import CampoDeTexto from "../CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  //Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função.
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Formulário foi submetido", cargo, nome, imagem, time);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <CampoDeTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio="{true}"
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoDeTexto
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio="{true}"
          label="Cargo"
          placeholder="Digite o cargo"
        />
        <CampoDeTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Entre com o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          label="Times"
          itens={props.times}
        />
        <Botao>Enviar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
