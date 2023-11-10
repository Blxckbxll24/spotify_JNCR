import { useState, useEffect } from 'react';
import styles from'../styles/login.module.css';
import FacebookLogin from 'react-facebook-login';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Registro() {

//Validación del logeo de Facebook
const responseFacebook = (response) =>{
    console.log(response);
}
const componentClicked=()=>{
    alert('Evento Click');
}

// validacion del logeo de Google
const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    


    return (
        <>
            <div class={styles.container}>
                <div class={styles.logo}>
                    <img src={require('../images/Untitled.png')} alt="Logo" />
                </div>
                <h2>Regístrate gratis para escuchar contenido</h2>
                <form>
                    <p>Ingresa tu correo</p>
                    <input type="email" placeholder="Email" />
                    <p>Ingresa tu contraeña</p>
                    <input type="password" placeholder="Contraseña" />
                    <p>¿Cómo quieres que te llamemos?</p>
                    <input type="text" placeholder="Nombre de Usuario" />
                    <p>Ingresa tu fecha de nacimiento</p>
                    <input type="date" placeholder="Fecha de Nacimiento" />
                    <p>Sexo:</p>
                    <label style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type="radio" name="sexo" value="Hombre" />
                        Hombre
                    </label>
                    <label style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type="radio" name="sexo" value="Hombre" />
                        Mujer
                    </label>
                    <label style={{display: 'inline-block'}}><input type="radio" name="sexo" value="Otro" /> Otro</label>
                    <button class={styles.registrobutton}>Registrarse</button>
                </form>
                
                <FacebookLogin appId="1283592775680508" 
                autoLoad={false} 
                fields="name,email,picture" 
                onClick={componentClicked} 
                callback={responseFacebook}
                textButton='Registrate con facebook'
                icon="fa-facebook" />

<div>
                     {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Cerrar sesión</button>
                </div>
            ) : (
                <button  className={styles.btng} onClick={() => login()}>Registrarse con google 🚀 </button>
            )}
            </div>

                <p id="inicio-sesion-link">¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>
                
            </div>
        </>

    )
}

export default Registro;