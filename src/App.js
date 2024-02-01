import { useState } from "react";
import "./index.css";

// const friendTest = [
//   {
//     name: "Juan",
//     age: 20,
//     birhday: "1/26/2024",
//     key: 0,
//   },
// ];

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
  const [friendDescription, setFriendDescription] = useState("");

  const [showlistFriends, setShowListFriends] = useState(false);

  function handleFriendList(friendList) {
    setFriendData((friend) => [...friend, friendList]);
  }

  function hanndleSubmit(e) {
    e.preventDefault();

    if (!friendName) return;

    // It will create a new object
    const newFriend = {
      id: Date.now(),
      name: friendName,
      description: friendDescription,
    };

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
        <input
          id="friendDescription"
          name="friendDescription"
          placeholder="Enter friend's description"
          onChange={(e) => setFriendDescription(e.target.value)}
          required></input>

        <button type="submit" onClick={() => setShowListFriends(true)}>
          Add Friend
        </button>
      </form>
      {showlistFriends ? <Friend friendData={friendData} /> : <div></div>}
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
  return (
    <div className="list_container">
      <li>{friendItem.name}</li>
      <p>{friendItem.description}</p>
    </div>
  );
}
