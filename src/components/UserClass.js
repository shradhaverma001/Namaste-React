import React from "react";

class UserClass extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
        console.log(this.props.name+"Constructor");
    }

    componentDidMount(){
        console.log(this.props.name+"Child Did Mount");
    }

    render() {
        console.log(this.props.name+"Child Rendered");
        const {name} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user">
                <h2>Count: {count}</h2>
                <button onClick ={()=> {
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Count Incrementar</button>
                <h2>Count: {count2}</h2>
                <h2>Name: {name}</h2>
                <h2>Location: Noida</h2>
                <h3>Contact: shradha__verma__</h3>
            </div>
        );
    };
};

export default UserClass;