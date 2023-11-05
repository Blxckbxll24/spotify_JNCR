import React from "react";
import styles from '../styles/busqueda.module.css';

function Busqueda() {

    return (
        <>
            <body className={styles.bodi}>



                <div class={styles.conjunto}>
                    <div class={styles.homesearch}>
                        <ul class={styles.casabuscador}>
                            <li class={styles.lilist}>Inicio</li>
                            <li class={styles.lilist}>Buscar</li>
                        </ul>
                    </div>

                    <div class={styles.listeningmusic}>
                        <p class={styles.text}>Tu biblioteca</p>
                        <ul class={styles.txt}>
                            <li class={styles.beatit}>Listas</li>
                            <li class={styles.beatit}>Álbumes</li>
                            <li class={styles.beatit}>Artistas</li>
                            <li class={styles.beatit}>Descargado</li>
                        </ul>
                        <p class={styles.recient}>Recientes</p>
                        <ul class={styles.musicas}>
                            <li class={styles.biblioteca}>Canciones que te gustan</li>
                            <li class={styles.biblioteca}>Mix de Reggueton</li>
                            <li class={styles.biblioteca}>Mix diario 5</li>
                            <li class={styles.biblioteca}>Mix diario 2</li>
                            <li class={styles.biblioteca}>Mix pop</li>
                            <li class={styles.biblioteca}>Karaoke Mexicano</li>
                            <li class={styles.biblioteca}>Radio Jose Jose</li>

                        </ul>
                    </div>

                </div>


                <section class={styles.bottomsection}>


                    <section class={styles.middlesection}>
                        <button class={styles.searchbutton} aria-placeholder="Volver">{'<'}</button>
                        <button class={styles.searchbutton} aria-placeholder="Avanzar">{'>'}</button>
                        <input type="text" src="img/busqueda.png" class={styles.searchbar} placeholder="¿Qué deseas escuchar?" />
                        <a href="/pago"><button class={styles.searchbutton} >Suscribete</button></a>
                    </section>


                    <div class={styles.imagerow}>
                        <p class={styles.recentsearches}>Explorar todo</p>
                        <img class={styles.imagerows} src={require('../images/podcasts.png')} alt="Imagen 1" />
                        <img class={styles.imagerows} src={require('../images/Evento_Directo.png')} alt="Imagen 2" />
                        <img class={styles.imagerows} src={require('../images/Especial_Parati.png')} alt="Imagen 3" />
                        <img class={styles.imagerows} src={require('../images/Novedades.png')} alt="Imagen 4" />
                        <img class={styles.imagerows} src={require('../images/Dia_demuertos.png')} alt="Imagen 5" />
                        <img class={styles.imagerows} src={require('../images/Musica_Mexicana.png')} alt="Imagen 6" />
                        <img class={styles.imagerows} src={require('../images/Latina.png')} alt="Imagen 7" />
                        <img class={styles.imagerows} src={require('../images/Musica_DeMexico.png')} alt="Imagen 8" />
                        
                    </div>
                </section>
            </body>
        </>
    )
}

export default Busqueda;