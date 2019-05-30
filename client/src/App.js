import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import QuizStarter from "./container/QuizStarter/QuizStarter";
import Navigation from "./container/Navigation/Navigation";
import AddChallenge from "./container/ChallengeModule/ChallengeList/AddChallenge";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import ChallengeView from "./container/ChallengeModule/ChallengeView/ChallengeView";
import AddResources from "./container/ChallengeModule/AddResources";
//import AddAssignment from "./container/AssignmentModule/AddAssignment";
import Assignment from "./components/Assignment/Assignment";
import AddAssignment from "./container/AssignmentModule/AddAssignment";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import DashBoard from "./container/dashboard/Dashboard";
import Landing from "./container/Landing/Landing";
import QuizQuestion from "./components/QuizModule/QuizQuestion/QuizQuestion";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/signin";
  }
}

class App extends React.Component {
  render() {
    console.log("loading qiz");
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <div>
              <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/Signin" component={SignIn} />
                <Route path="/Signup" component={SignUp} />
                <Route path="/Quiz" component={QuizStarter}exact />
                <Route path="/Quiz/start" component={Quiz} />
                <Route path="/Challenges" component={ChallengeItem} exact />
                <Route path="/AddChallenge" component={AddChallenge} />
                <Route path="/challenges/:id" component={ChallengeView} />
                <Route path="/AddResources" component={AddResources} />
                <Route path="/Assignment" component={Assignment} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
