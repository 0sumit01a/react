import React from "react";

const ObjectForm = () => {
  const [formData, setFormData] = React.useState({ user: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`User: ${formData.user}\nAge: ${formData.age}`);
    setFormData({ user: "", age: "" });
  };

  return (
    <div>
      <h1>Using an Object in useState</h1>
      <input
        type="text"
        name="user"
        placeholder="Enter user name"
        value={formData.user}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default ObjectForm;