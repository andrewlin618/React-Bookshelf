import React from "react";
import Nav from "../../components/Nav"
import Container from "../../components/Container";
import { useAuth0 } from "../../react-auth0-spa";


function Profile(){
    const {isAuthenticated, user} = useAuth0();
    return(
        <div>
            <Nav />
            <br />
            {isAuthenticated &&
                <Container header={'PROFILE'}  icon='profile'>
                    <h1>{user.email}</h1>
                    <h1>{user.nickname}</h1>
                    <img src={user.picture} alt='avator'></img>
                </Container>
            }
            {!isAuthenticated && <h1 className="text-center">Profile......</h1>}
        </div>
    )
}

export default Profile;
