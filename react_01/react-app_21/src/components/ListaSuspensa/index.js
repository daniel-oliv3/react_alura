import "./ListaSuspensa.css";

// ------- Component -------
const ListaSuspensa = (props) => {
  console.log(props.itens);

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {/* map com key */}
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
