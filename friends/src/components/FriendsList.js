import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriendForm";
import styled from "styled-components"

const FriendCard = styled.div`
  width: 15%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
  margin: 3% 0;
  button {
    width: 50%;
  }
`;

export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      getFriends();
    }, [friends]);
  
    const getFriends = () => {
      axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
          // console.log(res.data);
          setFriends(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <>
        <NewFriendForm />
        <div>
          {friends.map((friend) => {
            return (
              <FriendCard key={friend.id}>
                <h2>{friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                <button>Edit</button>
              </FriendCard>
            );
          })}
        </div>
      </>
    );
  }