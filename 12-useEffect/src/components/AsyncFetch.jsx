import React, { useEffect, useState } from "react";

export default function AsyncFetch() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        setJoke(`${data.setup} — ${data.punchline}`);
      } catch (err) {
        console.error("Error fetching joke:", err);
      } finally {
        setLoading(false);
      }
    };

    getJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>😂 Random Joke</h1>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
    </div>
  );
}
