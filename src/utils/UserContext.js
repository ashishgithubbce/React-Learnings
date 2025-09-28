import { createContext, useState } from "react";
const UserContext = createContext({
  loggedInUser: "Unknown User",
});
export default UserContext;
