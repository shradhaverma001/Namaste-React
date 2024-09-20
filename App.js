import React from "react";
import ReactDOM from "react-dom";

/**  Planning
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Cards
 *    - Name, cuisine, ETA(Estimatedc time of arrival)
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact

*/

// React Element

const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" 
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kitchen-logo%2Ccooking-logo%2Cchef-logo%2Crestauran-design-template-f541859629a27bdd23d132ff96e3b311_screen.jpg?ts=1662813437" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-img" alt="res-img" src="https://ethnomed.org/wp-content/uploads/2009/08/Ethiopian-Food.jpg"></img>
            <h3>Murthal</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.8 stars</h4>
            <h4>30 mins</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

