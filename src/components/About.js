import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Did Mount");
    }

    render(){
        // console.log("Parent rendered");
        return (
            <div>
                <h1>About Us</h1>
                <h1>This is Namaste React web series</h1>
                <UserClass name= {"First child"}/>
                {/* <UserClass name= {"Second child"}/>
                <UserClass name= {"Third child"}/>
                <User name = {"Shradha (function)"}/> */}

                <UserContext.Consumer>
                    {({loggedInUser}) => (<h1 className="font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>

            </div>
        );
    };
};

// FUNCTION BASED COMPONENT
// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h1>This is Namaste React web series</h1>
//             <User name = {"Shradha (function)"}/>
//             <UserClass name= {"Shradha (class)"}/>
//         </div>
//     )
// };

export default About;