import "../login/Login.css";

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">
                    <h2>Welcome back</h2>
                </div>

                <form action="#" className="form">
                    <div>
                        <label htmlFor="">Email <span>*</span></label>
                        <input type="email" placeholder="name@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="">Password <span>*</span></label>
                        <input type="password" placeholder="Create password" required />
                        <a className="forgot-password-link" href="#">Forgot password?</a>
                    </div>
                    <button className="login-btn">Login</button>
                </form>

                <div className="or-divider">
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>

                <div className="login-social-container">
                    <div className="login-social">
                        <img className="social-icon" src="../../public/icons/facebook.png" alt="" />
                        Continue with Google</div>

                    <div className="login-social">
                        <img className="social-icon" src="../../public/icons/search.png" alt="" />
                        Continue with Facebook</div>
                    <div className="login-social">
                        <img className="social-icon" src="../../public/icons/apple-logo.png" alt="" />
                        Continue with Apple</div>

                    <p className="center">New to Coursera? <a href="../signup/Signup">Sign up</a></p>
                </div>

                <div className="divider"></div>

                <div className="login-footer">

                    <p className="center">
                        <a href="#">Login in with your organization</a>
                    </p>

                    <p className="center footer-para">Having trouble logging in? Learner help center</p>
                    <p className="center footer-para">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;