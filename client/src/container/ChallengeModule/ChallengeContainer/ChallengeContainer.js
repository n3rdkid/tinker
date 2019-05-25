import React from "react";

class ChallengeContainer extends React.Component{
    state={
        question:null
    }
    componentDidMount(){
        axios
        .get(`http://localhost:5000/api/challenges/`)
        .then(response => {
          this.setState({
            question: response.data
          });
          console.log(response.data[0]);
        })
        .catch(error => console.log(error));
    }

}