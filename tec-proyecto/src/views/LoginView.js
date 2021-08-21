import React from "react";
import { Component } from "react";
import "../styles/styles.css";
import axios from "axios";
import md5 from "md5";
import Cookies from 'universal-cookie';

// import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();


class LoginView extends Component {
    state = {
        form: {
        username: "",
        password: "",
        },
    };

    handleChange = async (e) => {
        await this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
        });
    };

    iniciarSesion = async () => {
        
        await axios
        .get(baseUrl, {
            params: {
            username: this.state.form.username,
            password: md5(this.state.form.password),
            },
        })
        .then(response => {
            
            return response.data;
        })
        .then(response=>{
          if(response.length>0){
            let respuesta=response[0]
            cookies.set('id', respuesta.id, {path:"/"} )
            cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
            cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('username', respuesta.username, {path: "/"});
            alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`)
            window.location.href="/login/admin"

        }else{
            alert('El usuario o la contraseña no son correctos');
        }
        })
        .catch(error => {
            console.log(error);
        });
    };

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./login/admin";
        }
    }



  render() {
    return (
      // <div>
      //   <NavTop />
      //   <div className="containerPrincipal">
      //     <div className="containerSecundario">
      //       <div className="form-group">
      //         <label>Usuario: </label>
      //         <br />
      //         <input
      //           type="text"
      //           className="form-control"
      //           name="username"
      //           onChange={this.handleChange}
      //         />
      //         <br />
      //         <label>Contraseña: </label>
      //         <br />
      //         <input
      //           type="password"
      //           className="form-control"
      //           name="password"
      //           onChange={this.handleChange}
      //         />
      //         <br />
      //         <button
      //           className="btn btn-primary"
      //           onClick={() => this.iniciarSesion()}
      //         >
      //           Iniciar Sesión
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>

        
        
          <div Name="container1">
          <div className="forms-container1">
            <div className="signin-signup1">
              <form action="#" className="sign-in-form1 form1">
                <h2 className="title1">Ingresa</h2>
                <div className="input-field1">
                  <i className="fas fa-user"></i>
                  <input type="text" className="form-control"
                  name="username"
                  onChange={this.handleChange} placeholder="Nombre de usuario" />
                </div>
                <div className="input-field1">
                  <i className="fas fa-lock"></i>
                  <input type="password" className="form-control"
                  name="password"
                  onChange={this.handleChange}  placeholder="contraseña" />
                </div>
                {/* <input type="submit" value="Login" class="btn solid" /> */}
                <button  className="btn-danger " onClick={() => this.iniciarSesion()}  style={{padding:'4px 20px', borderRadius:'5px'}}> Ingresar </button>
                <p className="social-text1">O registrate con una de tus redes sociales</p>
                <div className="social-media1">
                  <a href="#" className="social-icon1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon1">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
              <form action="#" className="sign-up-form1 form1">
                <h2 className="title1">Registrate</h2>
                <div className="input-field1">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Usuario" />
                </div>
                <div className="input-field1">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="correo electrónico" />
                </div>
                <div className="input-field1">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" className="btn1" value="Registrate" />
                <p className="social-text1">O ingresa con tus redes sociales</p>
                <div className="social-media1">
                  <a href="https://www.facebook.com/" className="social-icon1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/?lang=es" className="social-icon1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="social-icon1">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="https://pe.linkedin.com/" className="social-icon1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    )
  }
}

export default LoginView;