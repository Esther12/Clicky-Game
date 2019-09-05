import React from "react";
import Containner from "./components/Containner/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wapper/index";
import Header from "./components/Header/index";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard/index"
import Subtitle from "./components/Subtitle";

class App extends React.Component {
  // Setting the initial state of the App component
  
  state = {
    score: 0,
    topScore: 0,
    timeLeft: 12,
    subtitle: "Click an image to begin!",
    subtitleClass: "",
    characters:  friends
  };
  checkForClick = (name) =>{

    console.log(`get into check for click!    :`);
    let shuffleNeed = false;
    let newList = this.state.characters.map(friend => {
      if(friend.name === name){
        if(friend.clicked === false){
          // this.gameWin();
              return {...friend, clicked : true }
          }
          else{
            shuffleNeed = true;
            return {...friend, clicked : false} 
          }
        }
      return friend;
    })
    console.log("get the Newlist",newList);

    if(shuffleNeed){
      this.setState({characters : this.changeCard(this.gameLose())});
      console.log("shuddle need :::", this.state.characters);
    }else{
      this.setState({characters : this.changeCard(this.gameWin(newList))});
      console.log("shuddle do not need :::", this.state.characters);
    }
}
  gameWin = (array) =>{
    console.log("Winning the game!!!")
    if(this.state.timeLeft < 1){
      this.setState({
        score : 0,
        subtitle : "You Win !!!",
      });
      const updatedList =this.state.characters.map(friend => friend.clicked ===  true ? {...friend, clicked: false} : friend);
      console.log("Get 12 score!",updatedList);
      return updatedList;
    }else{
      this.setState({
        score : this.state.score + 1,
        timeLeft : this.state.timeLeft -1,
        subtitle : "One Point For You !!!",
      });
      console.log("Get one point!",array);
      return array;
    }
  }
  gameLose = () =>{
    console.log("Lose the Game~~~~");
    this.setState({
      score : 0,
      timeLeft : 12,
      subtitle : "You lost! Try Again"
    });
    const updatedList = this.state.characters.map(friend => friend.clicked ===  true ? {...friend, clicked: false} : friend);
    console.log("Reset all the clicked value",updatedList);
    return updatedList;
  }
  changeCard = (characters)=>{
    console.log("Shuffling",characters);
  let shuffledList = characters.sort(function() {
    return .5 - Math.random();
      })
    console.log("Shuffled List", shuffledList);
    return shuffledList;
  };
  displayCards = ()=>{
    return this.state.characters.map(f => (
        <FriendCard name = {f.name} image = {f.image}  onClick = {this.checkForClick} clicked = {f.clicked}></FriendCard>)
    );
      
  };
  render() {
    return (
      <Containner>
        <Wrapper>
          <Header>Remember All Your Friends!!!</Header>
          <Subtitle score={this.state.score} subtitle={this.state.subtitle} timeLeft={this.state.timeLeft} />
          {this.displayCards(this.state.characters)}
          
        </Wrapper>
        <Footer/>
      </Containner>
    );
  
}
}
export default App;
