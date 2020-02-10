import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import API from "../../utils/API";

class SavedPage extends React.Component {
    state = {
        
    }

    handleDelete(){
    }

    openBookshelf(){
        API.getSavedBooks()
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    }

    render(){

        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                <h4 style={{fontWeight:'bold'}}>SAVED BOOKS</h4>
                <button onClick={this.openBookshelf} >lalala</button>
                </Container>
            </div>
        )
    }
}

export default SavedPage;
