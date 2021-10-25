import React , { useState, useEffect } from "react";


const Form = () => {

const inputTextHandler = (e) => {
console.log(e.target.value);
};

const [createNew, setCreated] = useState(false);


 useEffect(() => {

  if(createNew){

    const desc = document.getElementById("description").value;
    const request = {description: `${desc}`};

  fetch(`http://localhost:8080/todo/1/todos`,{method: 'POST',
    headers: {'content-type' : 'application/json'},
      body : JSON.stringify(request)})
          .then((response) => response.json())
          .then((data) => {
            setCreated(false);
          });
  }

  }, [createNew]);

return(
 <form>
      <input id="description" type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={() => { setCreated(true); } }>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>

);

};


export default Form;