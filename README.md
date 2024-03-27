# useEffect && APIs

## useEffect

- runs the passed in function after the first render of the page
- will re-run the useEffect function based on second argument's array
- the second argument's array will list state variables that the useEffect will watch for changes on

## APIs in useEffects

- fetch is an asynchronous function which requires us to use await
- React does not allow us to await the anonymous function that we pass into useEffect
- we need to create a new asynchronous function that can call the fetch
- we then need to call that function in the useEffect