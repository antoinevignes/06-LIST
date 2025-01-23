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

      <fieldset>
        <legend>Choisir une couleur de texte :</legend>
        <div>
          <label htmlFor="palevioletred">Pale Violet Red</label>
          <input
            type="radio"
            name="color"
            id="palevioletred"
            checked={state.color === "palevioletred"}
            onChange={() =>
              dispatch({ type: "changeColor", payload: "palevioletred" })
            }
          />
        </div>

        <div>
          <label htmlFor="tomato">Tomato</label>
          <input
            type="radio"
            name="color"
            id="tomato"
            checked={state.color === "tomato"}
            onChange={() =>
              dispatch({ type: "changeColor", payload: "tomato" })
            }
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Taille de la police :</legend>
        <select
          name="size"
          id="size"
          onChange={(e) =>
            dispatch({ type: "changeSize", payload: e.target.value })
          }
        >
          <option value="15px">15px</option>
          <option value="16px">16px</option>
          <option value="17px">17px</option>
          <option value="18px">18px</option>
          <option value="19px">19px</option>
          <option value="20px">20px</option>
        </select>
      </fieldset>

      <ul>
        {state.texts.map((item, index) => (
          <li key={index} style={{ color: item.color, fontSize: item.size }}>
            {item.text}
            <button
              style={{ fontSize: "16px" }}
              onClick={() => dispatch({ type: "deleteEntry", payload: index })}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => dispatch({ type: "addInput" })}
        disabled={!state.input === ""}
      >
        Ajouter
      </button>
    </>
  );
};

export default List;
