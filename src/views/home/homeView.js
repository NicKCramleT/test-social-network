import { authController} from '../../controllers/authController'
import { SignupView } from '../signup/signupView'
import '../../styles/login.css';

export class HomeView {
  constructor(container) {
    this.container = container;
    this.template = `
    <div class="container">
      <div class="box">
        <h1>Social-Network-APP</h1>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
          <button type="submit">Log in</button>
        </form>
        <hr/>
        <div class="google-login">
          <button class="btn-google">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
            Iniciar sesión con Google
          </button>
        </div>
        <div class="signup-section">
          <p>¿No tienes una cuenta? <a href="#" class="signup-link">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
    `;
  }

  render() {
    this.container.innerHTML = this.template;
    applySubmitListener(this.container);
    applyGoogleLoginListener(this.container);
    applySignupListener(this.container);
  }

  update() {
    // Esta función se encargaría de actualizar la vista si hay algún cambio
  }
}

function applySubmitListener(container) {
  const form = container.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    authController.doLogin(email, password);
  });
}

function applyGoogleLoginListener(container) {
  const googleBtn = container.querySelector('.btn-google');
  googleBtn.addEventListener('click', (event) => {
    authController.signInWithGoogle();
  });
}

function applySignupListener(container) {
  const signupLink = container.querySelector('.signup-link');
  signupLink.addEventListener('click', (event) => {
    const signupView = new SignupView(document.querySelector('#app'))
    signupView.render()
  });
}