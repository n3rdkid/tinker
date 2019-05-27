import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./container/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
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
import { setCurrentUser } from "./actions/authActions";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
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
                <Route path="/" component={Home} exact />
                <Route path="/Signin" component={SignIn} />
                <Route path="/Signup" component={SignUp} />
                <Route path="/Quiz" component={Quiz} />
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
