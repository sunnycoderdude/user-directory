import React from "react";

function Sort(props) {
  return (
    
      <div>
      <span onClick={() => props.sortFriends(props.id)}>
        Sort by First Name
      </span>
    </div>
  );
}

export default Sort;
