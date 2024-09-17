import React from "react";
import ReactDOM from "react-dom";

// React Element
const jsxHeading = (
    <h1 id="heading" className="head" tabIndex="5">Namaste react from JSX❤️</h1>
);
console.log(jsxHeading);

// React functional component syntaxes
const HeadingComponent1 = () => {
    return <h1 className="heading">Namaste Javascript from functional component1</h1>
};

const number = 5000;
const HeadingComponent2 = () => (
    <div id="container">
        {jsxHeading}
        {1000}
        {number}
        {HeadingComponent1()}       
        <HeadingComponent1/>
        <h1 className="">Namaste Javascript from functional component🚀</h1>
    </div>
);
// Both the above syntax are same it is returning a JSX.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);





// PRACTICE
// import React from 'react';
// import ReactDOM from 'react-dom';

// const ele = (
//     <h1> react Element</h1>
// );

// const Component1= () => (
//         <h1 id="heading">react component1</h1>
// );

// const Component2 = () => (
//     <div>
//         <Component1 />
//         <h2> after rendering component1 its comp2</h2>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component2 />);