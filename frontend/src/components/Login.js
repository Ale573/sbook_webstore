import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (
            <div className="login_container">
                <form>
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off" 
                    />

                    <label>Password</label>
                    <input
                        type="text" 
                        name="password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off" 
                    />

                    <button 
                        type="submit">
                            Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;
