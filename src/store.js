import { createStore } from "redux";
import cardList from "./reducers/cardList"

const store = createStore(cardList)

export default store;