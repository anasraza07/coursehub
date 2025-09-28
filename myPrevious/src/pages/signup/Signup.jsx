import "./Signup.css";

function Signup() {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-header">
                    <h2>Sign up</h2>
                    <p>Learn on your own time from top universities and businesses.</p>
                </div>

                <form action="#" className="form">
                    <div>
                        <label htmlFor="">Full Name <span>*</span></label>
                        <input type="text" placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label htmlFor="">Email <span>*</span></label>
                        <input type="email" placeholder="name@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="">Password <span>*</span></label>
                        <p>Between 8 and 72 characters</p>
                        <input type="password" placeholder="Create password" required />
                    </div>
                    <button className="signup-btn">Join for Free</button>
                </form>

                <div className="or-divider">
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>

                <div className="signup-social-container">
                    <div className="signup-social">
                        <img className="social-icon" src="../../public/icons/facebook.png" alt="" />
                        Continue with Google</div>

                    <div className="signup-social">
                        <img className="social-icon" src="../../public/icons/search.png" alt="" />
                        Continue with Facebook</div>
                    <div className="signup-social">
                        <img className="social-icon" src="../../public/icons/apple-logo.png" alt="" />
                        Continue with Apple</div>

                    <p className="center">Already on Coursera? <a href="#">Log in</a></p>
                </div>

                <div className="divider"></div>

                <div className="signup-footer">

                    <p className="center">
                        <a href="#">Sign up with your organization</a>
                    </p>

                    <p className="center footer-para">I accept Coursera's Terms of Use and Privacy Notice. Having trouble logging in? Learner help center</p>
                    <p className="center footer-para">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;