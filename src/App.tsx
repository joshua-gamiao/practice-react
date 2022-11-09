import React from "react";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;

let personName: unknown;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Joshua",
// };
// let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
