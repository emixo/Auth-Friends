import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"


const initialNewFriendInputs = {
  name: "",
  age: "",
  email: "",
};

export default function NewFriendForm() {
  const [newFriendInputs, setNewFriendInputs] = useState(
    initialNewFriendInputs
  );

  const changeNewFriendInputs = (event) => {
    setNewFriendInputs({
      ...newFriendInputs,
      [event.target.name]: event.target.value,
    });
  };


  const addFriend = (event) => {
      event.preventDefault()
      const newFriend = {
          id: Date.now(),
          name: newFriendInputs.name,
          age: newFriendInputs.age,
          email: newFriendInputs.email
      }
      console.log(newFriend)
      axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
          console.log(res)
      })
      .catch(err => {
        //   console.log(err)
      })
  }

  return (
    <form onSubmit={addFriend}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={newFriendInputs.name}
        onChange={changeNewFriendInputs}
      />
      <label htmlFor="age">Age:</label>
      <input
        name="age"
        value={newFriendInputs.age}
        onChange={changeNewFriendInputs}
      />
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={newFriendInputs.email}
        onChange={changeNewFriendInputs}
      />
      <button>Add Friend</button>
    </form>
  );
}