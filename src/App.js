import { useState } from "react";

function App() {

  const [formValues, setFormValues] = useState(["", "", null]);
  
  const handleForm = (event) => {
    event.preventDefault();
    const lastName = event.target.lastName.value;
    const firstName = event.target.firstName.value;
    const age = event.target.age.value;

    setFormValues([lastName, firstName, age])
  }

  return (
    <>
      <form onSubmit={handleForm}>
          <label>LastName
            <input type="text" name="lastName"></input>
          </label>

          <label>FirstName
            <input type="text" name="firstName"></input>
          </label>

          <label>Age
            <input type="number" name="age"></input>
          </label>

          <input type="submit"></input>
      </form>

      <p>{formValues[0]}</p>
      <p>{formValues[1]}</p>
      <p>{formValues[2]}</p>
   </>
  );
}

export default App;
