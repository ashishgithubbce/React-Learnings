import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
//import { UserContext } from "../utils/UserContext.js";
import UseContext from "../utils/UserContext.js";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount called");
    // This is where you can fetch data or perform side effects after the component mounts
  }
  render() {
    console.log("Parent render called");
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to our food delivery app! We are dedicated to bringing you the
          best dining experience right at your doorstep. Our mission is to
          connect you with a wide variety of restaurants and cuisines, ensuring
          that you can enjoy delicious meals from the comfort of your home.
        </p>
        <p>
          Whether you're craving pizza, sushi, or a hearty burger, we've got you
          covered. Our user-friendly interface makes ordering food quick and
          easy, so you can focus on enjoying your meal.
        </p>
        {/* <User /> */}
        <UserClass name={"Ashish "} location={"Bihar"} />
        <UseContext.Consumer>
          {(value) => <h1 className="text-red-500">{value.loggedInUser}</h1>}
        </UseContext.Consumer>
        {/* <UserClass name={"Kumar"} location={"Bihar"} /> */}
        {/* The constructor runs automatically, props are passed to super(props) so this.props is set */}
        {/* component mounting is having two phases 
        1. reder phase
        2. commit phase
        in render phase, the component is created and the constructor is called then render method is called
        in commit phase, the component is mounted on the DOM and the componentDidMount method is called 
        react will batch render phase/mounting phase for all the  child components  as updting DOM is expensive
        so first render phase will be called for all the child components
        then commit phase will be called for all the child components
        so the componentDidMount method will be called only once for each component
        componentDidMount method is called only once when the component is mounted on the DOM
        */}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>
//         Welcome to our food delivery app! We are dedicated to bringing you the
//         best dining experience right at your doorstep. Our mission is to connect
//         you with a wide variety of restaurants and cuisines, ensuring that you
//         can enjoy delicious meals from the comfort of your home.
//       </p>
//       <p>
//         Whether you're craving pizza, sushi, or a hearty burger, we've got you
//         covered. Our user-friendly interface makes ordering food quick and easy,
//         so you can focus on enjoying your meal.
//       </p>
//       <User />
//       <UserClass name={"Ashish Kumar"} location={"Bihar"} />
//       {/* The constructor runs automatically, props are passed to super(props) so this.props is set */}
//     </div>
//   );
// };
export default About;
