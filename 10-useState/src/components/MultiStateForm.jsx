import React from "react";

const MultiStateForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>Handling multiple state values</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default MultiStateForm;