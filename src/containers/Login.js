import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (<div class="container px-4 py-5 mx-auto">
                <div class="card card0">
                    <div class="d-flex flex-lg-row flex-column-reverse">
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">
                                    <div class="row justify-content-center px-3 mb-3"><h1><i
                                        class="fas fa-record-vinyl"></i></h1></div>
                                    <h3 class="mb-5 text-center heading">Welcome To VinylStore</h3>
                                    {this.props.act === "login" ?
                                        <h6 class="msg-info">Please login to your account</h6> :
                                        <h6 class="msg-info">Create An Account With Us</h6>}
                                    <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">Username</label> <input
                                            type="text" id="email" name="username" value={this.state.username}
                                            onChange={this.handleChange} placeholder="Enter user name"
                                            class="form-control"></input></div>
                                        <div class="form-group"><label
                                            class="form-control-label text-muted">Password</label> <input
                                            type="password" id="psw" name="password" placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange} class="form-control"></input></div>
                                        <input type="submit" value="Join VinylStore"/></form>
                                    {/*{this.props.act === "login" ?*/}
                                    {/*    <div class="row justify-content-center my-3 px-3">*/}
                                    {/*        <button class="btn-block btn-color">*/}
                                    {/*            Login to VinylStore*/}
                                    {/*        </button>*/}

                                    {/*    </div> : <div class="row justify-content-center my-3 px-3">*/}
                                    {/*        <button class="btn-block btn-color">*/}
                                    {/*            Join VinylStore*/}
                                    {/*        </button>*/}

                                    {/*    </div>}*/}


                                    {this.props.act === "login" ?
                                        <div class="row justify-content-center my-2"><a href="#"><small
                                            class="text-muted">Forgot Password?</small></a></div> : null}
                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                {this.props.act === "login" ?
                                    <div class="row justify-content-center my-2"><a href="#"><small class="text-muted">Don't
                                        have an acount?</small></a></div> : null}
                                {this.props.act === "login" ? <div>
                                    <Link to={'/signup'}>
                                        <button class="btn btn-white ml-2">Register</button>
                                    </Link>
                                </div> : null}
                            </div>
                        </div>
                        <div class="card card2">
                            <div class="my-auto mx-md-5 px-md-5 right">
                                <h3 class="text-white">Listen To Music ...</h3> <small class="text-white">
                                “If you don't know what to play, play nothing.” <br/>
                                Miles Davis</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}

export default Login

