import React, { Component } from 'react';

export class Register extends Component {
    render() {
        return (
            <div>
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

                    <label>Confirm Password</label>
                    <input
                        type="text" 
                        name="confirm_password"
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

export default Register;
