
import { useState } from "react";
import ReactDOM from "react-dom";

export default class Form {
    MyForm
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        name="userName" 
        value={inputs.userName} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <label>Firstname:
      <input 
        type="text" 
        name="firstName" 
        value={inputs.firstName} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <label>Lastname:
      <input 
        type="text" 
        name="lastName" 
        value={inputs.lastName} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <label>Age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange}
        />
        </label>
        <br/>

        <label>Sex:
      <input 
        type="text" 
        name="sex" 
        value={inputs.sex} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <label>Email:
      <input 
        type="text" 
        name="email" 
        value={inputs.email} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <label>Password:
      <input 
        type="password"
        name="password" 
        value={inputs.userName} 
        onChange={handleChange}
      />
      </label>
      <br/>

      <input type="submit" />

    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

