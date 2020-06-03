import React from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: COMMENTS,
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter(d => d.featured)[0]}
                    promotion={this.state.promotions.filter(p => p.featured)[0]}
                    leader={this.state.leaders.filter(l => l.featured)[0]} />
            );
        };

        const DishWithId = ({ match, location, history }) => {
            return (
                <DishDetail 
                    dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
