import React, { Component } from 'react';

export class Register extends Component {
    render() {
        return (
            <div className="form_container">
                <form > 
                    <label className="label_text">Email</label>
                    <input 
                        className="input_box"
                        type="text" 
                        name="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off" 
                    />

                    <label className="label_text">Password</label>
                    <input
                        className="input_box"
                        type="text" 
                        name="password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off" 
                    />

                    <label className="label_text">Confirm Password</label>
                    <input
                        className="input_box"
                        type="text" 
                        name="confirm_password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off" 
                    />

                    <button
                        className="submit_button" 
                        type="submit">
                            Register
                    </button>
                </form>
            </div>
        )
    }
}

export default Register;
