import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";

class SavedPage extends React.Component {
    state = {
        
    }

    handleDelete(){
    }


    render(){
        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                <h4 style={{fontWeight:'bold'}}>SAVED BOOKS</h4>
                <h4>Book Shelf Under Construction...</h4>
                </Container>
            </div>
        )
    }
}

export default SavedPage;
