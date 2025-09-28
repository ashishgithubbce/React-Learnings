import react from "react";
class UserClass extends react.Component {
  constructor(props) {
    super(props); // calls the constructor of parent class react.Component or to set the props to parent class
    //The this keyword is just how JavaScript lets you access the current object’s data.
    //React creates an instance of your class, like:
    //const comp = new UserClass(props);
    //Why super(props) matters in classes
    // When you extend another class (like React.Component), the parent’s constructor needs to run before you can use this.
    //whenevr the class component get called, it create an instance of the class and it call contrctor and it is the place where we can receive props and cretae the state variable
    // so we call super(props) to run the parent class constructor
    // and the constructor runs automatically, props are passed to super(props) so this.props is set
    //this.props = props; // this line is not necessary, as super(props) already sets this.props
    // console.log(this.props); // you can use this.props to access the properties passed to the component
    // To create stae variables  , we can use this.state = { key: value } inside the constructor
    this.state = {
      userInfo: {
        name: "unknown",
        location: "unknown",
        login: "unknown",
      },
      count: 0,
      count2: 100,
    };
    //this state variable can manage many steate variables
    //this.state = { key1: value1, key2: value2, ... }
    //this.state is an object that holds the state of the component
    //when instance of class component created first constructor get called then render method get called
    console.log("child constructor called");
    //console.log(props.name);
  }
  async componentDidMount() {
    console.log("child componentDidMount called");
    const data = await fetch("https://api.github.com/users/ashishgithubbce");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        count2: this.state.count2 - 1,
      });
    }, 1000);

    // This is where you can fetch data or perform side effects after the component mounts
    // this will call only once when the component is  completely mounted on the DOM or web page
    // it is similar to useEffect with empty dependency array in functional component
    // this is the place where we can fetch data from API or perform side effects
    // this is the place where we can set the state variable
    // this is the place where we can set the state variable using setState method
  }
  coponentDidUpdate() {
    console.log("child componentDidUpdate called");
    // This method is called after the component is updated
    // It is called after the render method is called
    // It is called after the component is mounted on the DOM
    // It is called after the component is updated on the DOM
    // It is called after the component is re-rendered on the DOM
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount called");
    clearInterval(this.timer); // Clear the interval to prevent memory leaks
    // This method is called before the component is unmounted from the DOM
    // It is called before the component is removed from the DOM
    // It is called before the component is destroyed
    // It is called before the component is removed from the web page
    // It is called before the component is removed from the React tree
  }
  render() {
    console.log("child render called");
    const { name, location, login, avatar_url } = this.state.userInfo; // destructuring the props object to get the name property
      // this will pause the execution of the code and open the developer tools in the browser
    return (
      <div className="user-card">
        <img
          src={avatar_url}
          alt="User Avatar"
          style={{ width: "100px", height: "100px" }}
        />
        <h2>Name : {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Login Id: {login}</h2>

        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <button
          //never update stste variables directly, always use setState method
          //this.setState is an asynchronous function, so it will not update the state immediately
          //it will schedule the update the state variable and then re-render the component
          //this.setState update only the state variable that is passed to it
          //this.setState({ key: value }) is used to update the state variable
          //this.setState({ key1: value1, key2: value2, ... }) is used to update multiple state variables
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Location: {location}</h2>
        <h2>Contact:@ashish.com</h2>
      </div>
    );
  }
}
export default UserClass;
