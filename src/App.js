import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [currentList, setCurrentList] = useState("List One");
  const toDoRef = useRef();
  const [listNames2, setListNames2] = useState([
    {
      name: "List One",
      id: 1,
      array: []
    },
    {
      name: "List Two",
      id: 2,
      array: []
    }
  ]);

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <p>
        This application work that way :
        <ul>
          <li>
            {" "}
            To add a todo we need to select first a list in the Todo Lists by
            clicking on the list name button (like "List one" or "List two")
          </li>
          <li>
            When selecting a todo list, the text will get updated that way :
            Current List : [List Name]
          </li>
          <li>
            Once we have a selected todo list, we have to add some text inside
            of the input field, and click the Add Todo Button , this will add
            the todo below the current selected list.
          </li>
          <li>
            To add a new Todo List, fill the input field and click the Add list
            button.
          </li>
        </ul>
      </p>
      <div className="actions">
        <h2>Actions : </h2>
        <h3>Current List : {currentList}</h3>
        <input type="text" ref={toDoRef} />
        <button
          onClick={function () {
            {
              listNames2.map(function (value, index) {
                {
                  currentList == value.name
                    ? value.array.push(toDoRef.current.value)
                    : value.array;
                }
              });
              setListNames2([...listNames2]);
            }

            toDoRef.current.value = "";
          }}
        >
          Add Todo
        </button>
        <button
          onClick={function () {
            let updatedValue = {};
            updatedValue = {
              name: toDoRef.current.value,
              array: []
            };
            setListNames2([...listNames2, updatedValue]);
            toDoRef.current.value = "";
          }}
        >
          Add List
        </button>
      </div>
      <h3>Todo Lists</h3>
      <ul>
        {listNames2.map(function (value, index) {
          return (
            <li>
              <button
                onClick={function () {
                  setCurrentList(value.name);
                }}
              >
                {value.name}
              </button>
              <ul>
                {value.array.map(function (value, index) {
                  return <li>{value}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}