import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import bike from "./bike";
import fashion from "./fashion";
import pet from "./pet";
export default combineReducers({
  alert,
  auth,
  profile,
  post,
  bike,
  // bike,
  pet,
  fashion,
});
