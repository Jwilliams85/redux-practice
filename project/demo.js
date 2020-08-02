// 3 Principles of Redux
// 1. The Store
// 2. Immutability: clone the state then modify the clone and then replace the original with the modified copy
// **NEVER mutate the original object and you NEVER write over you store object
// 3. Pure functions are what change our state
// take in some state along with a description of what changes are happening -> copy of state 

//Store (sets up the state) -> event (like pressing a button) ->Action creater is called that dispatches an action -> Middleware->
//action tells us what change to expect from the event -> Reducers handles these actions and replace the store accordingly

//Redux is SYNCHRONOUS
//Where does asynchronous side effects fit into all of this?
//Middleware -> Redux-Thunk

//**Middleware allows you to be able to add asynchronouse side effects such as calling for an API by using Redux-Thunk  */