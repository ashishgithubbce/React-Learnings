const User = () => {
  useEffect(() => {
    console.log("User component mounted");
    const timer = setInterval(() => {
      console.log("This will run every second");
    }, 1000);
    return () => {
      clearInterval(timer); // Cleanup the interval on component unmount
    };
    // This is where you can fetch data or perform side effects after the component mounts
    // For example, fetching user data from an API
  }, []);
  return (
    <div className="user-card">
      <h2>Name : Ashish</h2>
      <h2>Location: Bihar</h2>
      <h2>Contact:@ashish.com</h2>
    </div>
  );
};
export default User;
