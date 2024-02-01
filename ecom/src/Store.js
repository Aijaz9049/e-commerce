// import mainreducers from "./redux/Reducer/mainreducers";
import mainreducers from "./Pages/Reducer/mainreducers"
import { createStore } from "redux";

const store = createStore(mainreducers)


export default store