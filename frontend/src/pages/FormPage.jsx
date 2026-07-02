import { useEffect, useState } from "react";
import api from "../services/api";
function FormPage() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/people", {
      name,
      birthDate,
    });

    alert("Saved");

    setName("");
    setBirthDate("");
  };

  return (
    <div>
      <h1>Create Person</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <br />

        <button>Save</button>
      </form>
    </div>
  );
}

export default FormPage;
