import "./ListaSuspensa.css";

// ------- Component -------
const ListaSuspensa = (props) => {
  console.log(props.itens);

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {/* {props.itens.map(item => <option>{item}</option>)} */}

        {/*mesmo map acima, sem key*/}
        {/* {props.itens.map((item) => {
          return <option>{item}</option>;
        })} */}

        {/* map com key */}
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}

        {/* map com key, index */}
        {/* {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })} */}
      </select>
    </div>
  );
};

export default ListaSuspensa;
