import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import SignIn from "./UI/SignIn/SignIn";
import SignUp from "./UI/SignUp/SignUp";
import QuizStarter from "./container/QuizModule/QuizStarter/QuizStarter";
import Navigation from "./UI/Navigation/Navigation";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import ChallengeView from "./container/ChallengeModule/ChallengeView/ChallengeView";
import AddResources from "./container/ChallengeModule/AddResources";
//import AddAssignment from "./container/AssignmentModule/AddAssignment";
import AssignmentView from "./container/AssignmentModule/AssignmentContainer/AssignmentContainer";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Landing from "./UI/Landing/Landing";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import AssigntmentItem from "./components/Assignment/AssignmentItem/AssignmentItem";
import AssignmentQuestion from "./components/Assignment/AssignmentQuestion/AssignmentQuestion";
import AssignmentContainer from "./container/AssignmentModule/AssignmentContainer/AssignmentContainer";

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
                <Route path="/challenges/:id" component={ChallengeView} />
                <Route path="/assignments" component={AssigntmentItem} exact />
                <Route path="/assignments/:id" component={AssignmentQuestion} exact />
                <Route path="/assignments/question/:id" component={AssignmentContainer} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
