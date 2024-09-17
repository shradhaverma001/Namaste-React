// {} is an obeject which represents attributes of the element.
// createElement basically returns a JavaScript object.

/*
 CREATE THIS STRUCTURE USING REACT ELEMENT
 <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
 </div>

 React.createElement(Object) => HTML(Browser Understands)
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React🚀");
// console.log(heading);


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react!");
console.log(parent); //returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
