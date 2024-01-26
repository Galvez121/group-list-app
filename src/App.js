import { useState } from "react";
import "./index.css";

const friendTest = [
  {
    name: "Juan",
    age: 20,
    birhday: "1/26/2024",
    key: 0,
  },
];

export default function App() {
  return (
    <main className="container">
      <FormAddfriend />
    </main>
  );
}

function FormAddfriend() {
  const [friendData, setFriendData] = useState([]);
  const [friendName, setFriendName] = useState("");

  function handleFriendList(friendList) {
    setFriendData((friend) => [...friend, friendList]);
  }

  function hanndleSubmit(e) {
    e.preventDefault();

    // It will create a new object
    const newFriend = { friendName, id: Date.now() };

    handleFriendList(newFriend);
  }

  return (
    <>
      <h1>Add a friend</h1>
      <form onSubmit={hanndleSubmit}>
        <label for="friendName">Name:</label>
        <input
          type="text"
          id="friendName"
          name="friendName"
          placeholder="Enter friend's name"
          onChange={(e) => setFriendName(e.target.value)}
          required
        />

        <label for="friendDescription">Description:</label>
        <textarea
          id="friendDescription"
          name="friendDescription"
          placeholder="Enter friend's description"></textarea>

        <button type="submit">Add Friend</button>
      </form>
      <Friend friendData={friendData} />
    </>
  );
}

// function FriendList() {}

function Friend({ friendData }) {
  return (
    <>
      <h2>List of friends</h2>
      <ul>
        {friendData.map((friend) => (
          <FriendList friendItem={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
}

function FriendList({ friendItem }) {
  return <li>{friendItem.friendName}</li>;
}
