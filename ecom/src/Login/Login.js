import React, { useEffect, useState } from 'react';
import './Login.css';

const Login = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
        setActive(true);
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
        setActive(false);
      });
    }

    return () => {
      if (container && registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', () => {
          container.classList.add('active');
          setActive(true);
        });
        loginBtn.removeEventListener('click', () => {
          container.classList.remove('active');
          setActive(false);
        });
      }
    };
  }, []);



  return (
    <div className="main-login">

    <div className="container" id='container'>
        <div className="form-container sign-up">
            <form>
                <h1>Craete Acocunt</h1>
                <div className="social-icon">
                <a href=""><i class="fa-brands fa-square-google-plus"></i></a>
               <a href=""> <i class="fa-brands fa-facebook"></i></a>
               <a href=""> <i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Eamil' />
                <input type="password" placeholder='Password' />
                <button>Sign Up</button>
            </form>

        </div>

        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div className="social-icon">
                <a href=""><i class="fa-brands fa-square-google-plus"></i></a>
               <a href=""> <i class="fa-brands fa-facebook"></i></a>
               <a href=""> <i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder='Eamil' />
                <input type="password" placeholder='Password' />
                <a href="">Forget Your Password</a>
                <button>Sign In</button>
            </form>

        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features </p>
                    <button className="hidden" id='login'>Sign In</button>

                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello ! </h1>
                    <p>Register with your personal details to use all of site features </p>
                    <button className="hidden" id='register'>Sign Up</button>

                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Login