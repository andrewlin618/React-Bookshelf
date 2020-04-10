import React from "react";
import Nav from "../../components/Nav"
// import Jumbotron from "../../components/Jumbotron"
// import Carousel from "../../components/Carousel"
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import {BtnSubmit} from "../../components/Button"
import './style.css';


class MainPage extends React.Component {
    state = {
        value: '',
        toResults:false,
        books:[],
        results:[],
        isCollapsed:false,
        message:''
    };

    componentDidMount() {
        this.setState({
            toResults:false,
        })
    }

    handleChange = event => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = () => {
        this.props.history.push({
            pathname: '/search',
            state: { value: this.state.value }
        })
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleSubmit();
            console.log('enter press here! ')
        }
    }

    render() {
        return(
            <div className='main'>
                <Nav />
                <br /><br /><br /><br /><br />
                <h1 className='text-light text-center display-4'>Search the books you like</h1>
                <h2 className='text-light text-center font-weight-light'>Save them to your personal online bookshelf</h2>
                <br />
                <Container header={'SEARCH'} icon='search'>
                    <div className="input-group my-3">
                        <input type="text" className="form-control title" placeholder="" aria-label="Book's Keyword" aria-describedby="button-addon2" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                        <div className="input-group-append">
                            <BtnSubmit className="btn btn-primary search" type="button" id="button-addon2" onClick={this.handleSubmit} >SEARCH</BtnSubmit>
                        </div>
                    </div>
                </Container>
                <Footer />
                <br />
            </div>
        )
    }
};

export default MainPage;

