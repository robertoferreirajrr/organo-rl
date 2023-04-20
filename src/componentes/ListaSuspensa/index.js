import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (<div className='lista-suspensa'>
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.valor)}>
            <option value="">Selecione...</option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa;