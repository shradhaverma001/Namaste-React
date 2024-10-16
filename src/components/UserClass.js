import React from "react";

class UserClass extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "dummy",
                location: "default",
                bio: "hello there!",
            },
            
        };
        // console.log(this.props.name+"Constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shradhaverma001");
        const json = await(data.json());
        console.log(json);

        this.setState({
            userInfo: json,
        });

        // console.log(this.props.name+"Child Did Mount");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        // console.log(this.props.name+"Child Rendered");
        const {name, location, bio} = this.state.userInfo;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                {/* <h2>Count: {count}</h2>
                <button onClick ={()=> {
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Count Incrementar</button>
                <h2>Count: {count2}</h2> */}

                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: {bio}</h3>
            </div>
        );
    };
};

export default UserClass;