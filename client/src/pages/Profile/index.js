import React from "react";
import Nav from "../../components/Nav"
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";


function Profile(){
    const {isAuthenticated, user} = useAuth0();
    return(
        <div>
            <Nav />
            <br />
            <Container header={'PROFILE'}  icon='profile'>
                {!isAuthenticated && <h5 className="text-center text-danger font-weight-bold">YOU NEED TO LOG IN TO SEE YOUR PROFILE.</h5>}
                {isAuthenticated &&
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='profile-img' src={user.picture} alt='avatar' />
                        </div>
                        <div className='col-md-8 mt-2'>
                            <h5>Nickname:</h5>
                            <p> {user.nickname}</p>
                            <h5>Emails:</h5>
                            <p> {user.email}</p>
                        </div>
                    </div>
                </div>
                }
            </Container>
            <Footer />
        </div>
    )
}

export default Profile;
