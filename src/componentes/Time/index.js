import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        //Para o JSX é tudo uma linha só! Para ele se deu false ele nem roda o da direita!
        //ou (props.colaboradores.length) ? '' : '' -> operador ternário
        (props.colaboradores.length > 0) && <section className='time' style={css}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} corDeFundo={props.corPrimaria} imagem={colaborador.imagem} key={colaborador.nome}/>)}
        </div>
    </section>)
}

export default Time