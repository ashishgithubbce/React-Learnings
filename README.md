React learning First lecture

#redux toolkit
-Install npm i @reduxjs/toolkit and react-redux

- Build our store
- connect our store to our app
- create slice (cart slice)
  -dispatch(action)
  -Selector

## Summary

reducers: { ... } in the slice → you define case logic.

cartSlice.reducer → RTK compiles those into a real reducer function.

export default cartSlice.reducer → you export that function for the store.

cartSlice.actions → auto-generated action creators you export separately.

## types of testing developer can do:

## setting up testing in our app

---

1. install React testing library --- url: https://testing-library.com/docs/react-testing-library/intro/
2. Installed jest : npm i -dev jest@latest
3. Installed Babel Dependencies // it required when we use jest with babel : npm install --save-dev babel-jest @babel/core @babel/preset-env
4. configure babel (add babel.config.js file)---use jest url : https://jestjs.io/docs/getting-started
5. Configure parcel config file to disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.
   // this step required to use explicit babel configuration we did and to disable the default parcel config else it will conflict with the default parcel config
   url: https://parceljs.org/languages/javascript/#babel
6. Jest configuration -- npx create-jest
   // jsdom : to run test case

7. Install js dom library for the jest version > 28, we need to install it seperately
   ----If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
   url: https://testing-library.com/docs/react-testing-library/setup

8. start writing test cases
9. Install @babel/preset-react --to make jsx work in the test cases
10. Include @babel/preset-react inside the babel config
11. Install @testing-library/jest-dom : 
