import styles from "./PaginaInicial.module.scss"

import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";



export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main >
                <section className={styles.principal}>
                    <Menu />
                    <Banner />    
                </section>
                <div className={styles.principal}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />

        </>

    )
}