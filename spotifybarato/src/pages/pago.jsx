import React from "react";
import styles from '../styles/pago.module.css'



function Pago() {
    return (
        <><body>

       
        <header class={styles.Cabecilla}>
            <p class={styles.Idioma}> México (Español)</p>
        </header>
    
        
        <section class={styles.Ramt}>
            <div class={styles.Yess}>
            <img src={require('../images/Untitled.png')} class={styles.Logo} alt="logo"/>
            <p class={styles.App}>Yeezy</p>
            <ul class={styles.Liss}>
                <li><img src="" class={styles.Perf} alt=""/>Perfil</li>
                <li class={styles.Li}>Cuenta</li>
                <li class={styles.Li}>Cerrar sesión</li>
            </ul>
        </div>
    
        
        <article class={styles.Mediante}>
            <div class={styles.nest}>
                <p class={styles.Plan}>Tu plan</p>
                <p class={styles.Cambiar}>Cambiar</p>
            </div>
            <div class={styles.cajamedio}>
            <div class={styles.Par1}>
                <p class={styles.PILL}>Premium Individual</p>
                <p class={styles.PILLS}>Cuenta Premium</p>
            </div>
            <div class={styles.Par2}>
                <p class={styles.PILL2}>Apartr de Hoy</p>
                <p class={styles.PILL2}>Proxima fecha de facturación</p>
                <p class={styles.PILL2}>129,00 MXN al mes</p>
                <p class={styles.PILL2}>28-Sep-23</p>
            
            <div class={styles.Par3}>
                <p class={styles.PILL3}>Luego, tu fecha de facturación será el 20 sep 2023</p>
                <p class={styles.PILL3}>Cancela cuando quieras. Se aplican <a href="#" class="Ter">Términos de la oferta</a></p>
            </div>
        </div>
            </div>
        </article>
    </section>
    </body>
    

        </>
    )
}

export default Pago;
