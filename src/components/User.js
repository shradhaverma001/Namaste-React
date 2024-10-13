// import { useState } from "react";

// const User = ({name}) => {

//     const [count, setCount] = useState(0);
//     const [count2] = useState(2);
    
//     return (
//         <div className="user">
//             <h2>Count = {count}</h2>
//             <button onClick={()=>{setCount(count+1)}}>Count Incrementar</button>
//             <h2>Count2 = {count2}</h2>
//             <h2>Name: {name} </h2>
//             <h2>Location: Noida</h2>
//             <h3>Contact: shradha__verma__</h3>
//         </div>
//     )
// };

// export default User;

import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("new child constructor");
    }
    componentDidMount() {
        console.log("new child did mount");
    }
    render(){
        console.log("new child render");
        return (
            <div>
                <h2>another child</h2>
            </div>
        );
    };
};

export default User;