import { useEffect, useState } from "react";
import api from "../services/api";

function ListPage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const response = await api.get("/people");

    setPeople(response.data);
  };

  function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    // Restar 1 si el cumpleaños aún no ocurre este año
    if (
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  return (
    <>
      {people.length === 0 && <p>No hay personas registradas.</p>}
      {people.length > 0 && (
        <div>
          <h1>People</h1>

          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.birthDate}</td>
                  <td>{calcularEdad(person.birthDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListPage;
