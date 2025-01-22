import { useListContext } from "../context/ListContext";

const List = () => {
  const [state, dispatch] = useListContext();

  return (
    <>
      <label htmlFor="number">Entrer du texte ici : </label>
      <input
        type="text"
        name="number"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "updateInput", payload: e.target.value })
        }
      />
      <ul>
        {state.texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "addInput" })}>Ajouter</button>
    </>
  );
};

export default List;
