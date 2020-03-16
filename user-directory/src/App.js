import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Sort from "./components/Sort";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  sortFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  }
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Sort sortFriends={this.sortFriends}/>


        {this.state.friends.map(friend => (
          
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
