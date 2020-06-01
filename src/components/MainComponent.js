import React from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    renderDish = () => {
        if(this.state.selectedDish !== null) {
            return (
                <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
            );
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                { this.renderDish() }
                <Footer />
            </div>
        );
    }
}

export default Main;
