import React, { useState } from "react";

function ToyCard({ toy, onDelete }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLike() {
    const newLikes = (toy.likes + 1);
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    })
    .then(r => r.json())
    .then(setLikes(newLikes))
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(onDelete(toy.id))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" id={toy.id} onClick={handleLike} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
