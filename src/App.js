import React, { Component } from "react";
import Wrapper from "./components/Wapper/index";
import Header from "./components/Header/index";
import friends from "./gameSrc.json";
import FriendCard from "./components/FriendCard/index"

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    timeLeft: 12,
    subtitle: "Click an image to begin!",
    subtitleClass: "",
    characters: friends
  };
  changeCard = ()=>{
   // this.setState({score : this.state.score +1}) ;
   this.setState({characters: friends.sort(function() {
    return .5 - Math.random();
      })
    })
    console.log(this.state.characters);
    this.displayCards();
  };
  displayCards = ()=>{
    return this.state.characters.map(f => (
        <FriendCard name = {f.name} image = {f.image} occupation = {f.occupation} location = {f.location} onClick = {this.changeCard}></FriendCard>)
    );
      
  };
  render(){
    return (
      <Wrapper>
        <Header>Remember All Your Friends!!!</Header>
        {/* <SpongeBobCard />
        <MrKrabsCard />
        <SquidwardCard /> */}
        {/* HtmlFor(let i =0, i < friends.length, i++)
        {
          <FriendCard name ={friends[i].name} image = {friends[i].image} occupation = {fridens[i].occupation} location = {friends[i].location}/>
        } */}
        {/* {friends.map(f => (<FriendCard name = {f.name} image = {f.image} occupation = {f.occupation} location = {f.location}></FriendCard>)) } */}
       
        
  {/*     
      <FriendCard onClick={changeCard} name ={friends[1].name} image = {friends[1].image} occupation = {friends[1].occupation} location = {friends[1].location}/>
      <FriendCard onClick={changeCard} name ={friends[0].name} image = {friends[0].image} occupation = {friends[0].occupation} location = {friends[0].location}/>
      <FriendCard onClick={changeCard} name ={friends[2].name} image = {friends[2].image} occupation = {friends[2].occupation} location = {friends[2].location}/> */}
      {this.displayCards()}
        
      </Wrapper>
    );
  
}
}
export default App;
