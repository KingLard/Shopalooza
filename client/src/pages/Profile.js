import React, {Component} from "react";
import Card, { Logo } from "../components/Card";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";


class Profile extends Component {
    state = {
        savedItem: [],
        results: [],
    }
    componentDidMount() {
        this.load();
      }
    load = () => {
        API.getSaved()
        .then(res =>
            this.setState({results: res.data})
            )
    }
    handleFormDel = data => {
        API.delete(data._id)
        .then(res => this.load())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron>
                <h1 className="display-4">Shopalooza</h1>
                <hr className="my-4"></hr>
                <p className="lead">All your saved items!</p>
                </Jumbotron>
                <Card
                results={this.state.results}
                handleFormDel={this.handleFormDel}
                />
            </div>
        )
    }

}

export default Profile;