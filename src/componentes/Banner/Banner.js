import './Banner.css'
/**Função e export = Javascrit! */
export const Banner = () => {
    //JSX -> Parece HTML mas não é... O react entende o que é isso e da um append no DOM
    //Aqui no JSX usamos className para o nome de classes
    return (<header className="banner">
        <img src="./imagens/banner.png" alt="Banner principal"/>
    </header>)
}
