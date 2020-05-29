import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className={"col-12 col-md-6 mt-5"}>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className={"container"}>
                <div className={"row mb-5"}>
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;
