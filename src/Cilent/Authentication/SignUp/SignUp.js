import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../assets/scss/style.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName:'',
            lastName:''
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = () => {
        alert(this.state.email)
        alert(this.state.password)
        alert(this.state.firstName)
        alert(this.state.lastName)
    }
    render() {
        return (

            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-user-plus auth-icon" />
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <h3 className="mb-4">Sign up</h3>
                                <div className="input-group mb-3">
                                    <input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={this.onChange} required />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={this.onChange} required />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange} required />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" name="password" className="form-control" placeholder="password" onChange={this.onChange} required />
                                </div>
                                <div className="form-group text-left">
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" ><NavLink to="/signUp">Sign Up</NavLink></button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/signIn">Sign In</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;