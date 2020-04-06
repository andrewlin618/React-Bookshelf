import React from "react";
import Nav from "../../components/Nav"
// import Jumbotron from "../../components/Jumbotron"
// import {AuthContainer} from "../../components/Container"
import './style.css';
// import Container from "../../components/Container";
import $ from "jquery";


class Auth extends React.Component{
    state = {
        isLoginOpened:true,
    }

    openLogin(){
        this.setState({
            isLoginOpened : true
        })
        $('#openLogin').addClass('font-weight-bold');
        $('#openSignUp').removeClass('font-weight-bold');
    }

    openSignUp(){
        this.setState({
            isLoginOpened : false
        })
        $('#openSignUp').addClass('font-weight-bold');
        $('#openLogin').removeClass('font-weight-bold');
    }


    render(){
        return(
            <>
                <Nav />
                <div class="container">
                    <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-auth my-5">
                        <div className="card-body">
                            <div className="card-title row">
                                <div className='col-6'>
                                <h5 id="openLogin" className="card-title text-center font-weight-bold" onClick={ () => this.openLogin()}>Login</h5>
                                </div>
                                <div className='col-6'>
                                <h5 id="openSignUp" className="card-title text-center" onClick={ () => this.openSignUp()}>Sign up</h5>
                                </div>
                            </div>
                            {this.state.isLoginOpened ? <Login /> : <Signup />}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

}

class Login extends React.Component{
    render(){
        return(
            <>
                <form className="form-auth">
                <div className="form-label-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" required autofocus />
                </div>
                <div className="form-label-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" required />
                </div>
                <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login in</button>
                <hr className="my-4" />
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Login in with Google</button>
                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Login in with Facebook</button>
                </form>
            </>
        )
    }
}

class Signup extends React.Component{
    render(){
        return(
            <>
                <form className="form-auth">
                <div className="form-label-group">
                    <label for="inputUsername2">Username</label>
                    <input type="text" id="inputUsername2" className="form-control" required autofocus />
                </div>
                <div className="form-label-group">
                    <label for="inputEmail2">Email address</label>
                    <input type="email" id="inputEmail2" className="form-control" required autofocus />
                </div>
                <div className="form-label-group">
                    <label for="inputPassword2">Password</label>
                    <input type="password" id="inputPassword2" className="form-control" required />
                </div>
                <div className="form-label-group">
                    <label for="inputConfirmPassword">Password</label>
                    <input type="password" id="inputConfirmPassword" className="form-control" required />
                </div>
                <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                    <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign up</button>
                </form>
            </>
        )
    }


}

export default Auth;
