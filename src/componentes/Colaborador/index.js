import "./Colaborador.css";
import { AiFillCloseCircle,AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  
  const favoritar = () => {
    aoFavoritar(colaborador.id);
  }

  const propsFavoritos = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">{colaborador.favorito ?  <AiFillHeart {...propsFavoritos} color='red'/> : <AiOutlineHeart {...propsFavoritos}/>}</div>
      </div>
    </div>
  );
};

export default Colaborador;
