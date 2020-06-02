import React from "react";
import Menu from "./MenuComponent";
// import DishDetail from "./DishdetailComponent";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
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

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    // renderDish = () => {
    //     if(this.state.selectedDish !== null) {
    //         return (
    //             <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
    //         );
    //     }
    // }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter(d => d.featured)[0]}
                    promotion={this.state.promotions.filter(p => p.featured)[0]}
                    leader={this.state.leaders.filter(l => l.featured)[0]} />
            );
        };

        return (
            <div>
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* { this.renderDish() } */}
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/contactus" component={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
