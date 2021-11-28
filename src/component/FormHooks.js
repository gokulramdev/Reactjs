import React, { useState } from "react";

export default function FormHooks(props) {
  const initialValue = {
    username: "",
    email: "",
  };
  const [formData, setfFormData] = useState(initialValue);

  const Reset = () => {
    setfFormData(initialValue)
  }

  console.log(formData)
  const onChangeData = (e) => {
    const { name, value } = e.target;
    setfFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        userName:
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={onChangeData}
        />
      </label>
      <label>
        Email Name:
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={onChangeData}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="reset" onClick={Reset}>Reset</button>
    </form>
  );
}
