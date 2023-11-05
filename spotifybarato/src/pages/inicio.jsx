import React from "react";
import '../styles/inicio.css'
import { Link } from "react-router-dom";

function Inicio() {
    return (
        <>
            <body>


                <div className="container">
                    <aside>
                        <div className="menu">
                            <Link className="active" to="#"><span><img src={require('../images/home.svg')} alt="" /></span>Inicio</Link>
                            <Link to='/buscador'><span><img src={require('../images/search.svg')} alt="" /></span>Buscar</Link>
                            <Link to="#"><span><img src={require('../images/library.svg')} alt="" /></span>Tu biblioteca</Link> <br />
                            <Link to="#"><span><img src={require('../images/add.svg')} alt="" /></span>Crear lista</Link>
                            <Link to="#"><span><img src={require('../images/heart.svg')} alt="" /></span>Canciones que te gustan</Link>
                        </div>
                    </aside>
                    <section className="casco">
                        <header>
                            <div className="botones_prev_next">
                                <span className="btn_prev"><img src={require('../images/prev.svg')} alt="" /></span>
                                <span className="btn_next"><img src={require('../images/next.svg')} alt="" /></span>
                            </div>

                            <div className="suscribcion">
                                <div className="perfil">
                                    <span className="circulo"><img src={require('../images/user.svg')} alt="" /></span>
                                    <span className="nombre">Tu perfil</span>
                                    <span><img src={require('../images/salir.svg')} alt="" /></span>
                                </div>
                            </div>
                        </header>
                        <div className="contenedor_degradado">
                            <div className="banner">
                                <div className="cancion">
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className="cancion">
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className="cancion">
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                                <div className="cancion">
                                    <figure>
                                        <img src={require('../images/Copia de Leoncito.png')} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor_contenido">
                            <div className="titulos">
                                <h1>¡Buenos días!</h1>
                            </div>
                            <div className="generos">
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/Jimena.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>:)</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/RauwMix.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>Rauw Alejandro mix</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/RHLM.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>Real hasta la muerte</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/Rdia23.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>Rdia23</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/VST.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>Un verano sin ti</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="cards">
                                    <div className="card_imagen"><img src={require('../images/Scorp.png')} alt="" /></div>
                                    <div className="card_text">
                                        <h4>Scorpion</h4>
                                        <img src={require('../images/play.svg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="titulos">
                                <h2>Tus podcast</h2>
                                <span>Aquí tienes tu contenido preferido</span>
                            </div>

                            <div className="podcast">
                                <div className="card_podcast">
                                    <img src={require('../images/F1L.png')} alt="" />
                                    <h4>F1nal lap</h4>
                                    <p>troop audio</p>
                                </div>
                                <div className="card_podcast">
                                    <img src={require('../images/FutP.png')} alt="" />
                                    <h4>Fútbol picante</h4>
                                    <p>ESPN deportes</p>
                                </div>
                                <div className="card_podcast">
                                    <img src={require('../images/Edge.png')} alt="" />
                                    <h4>F1 On The Edge</h4>
                                    <p>The Ringer</p>
                                </div>
                                <div className="card_podcast">
                                    <img src={require('../images/Cuent.png')} alt="" />
                                    <h4>Cuentos para dormir</h4>
                                    <p>Cuentos AMG</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className="controles">
                            <img src={require('../images/prev_footer.svg')} alt="" />
                            <img src={require('../images/play_footer.svg')} alt="" />
                            <img src={require('../images/next_footer.svg')} alt="" />
                        </div>
                        <div className="progreso">
                            <span>0:00</span>
                            <div className="barra_progreso"></div>
                            <span>5:00</span>
                        </div>
                    </footer>
                </div>
                </body>
            </>
            )
}

            export default Inicio;
