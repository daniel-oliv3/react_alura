

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email });
    }

  return (
    <form onSubmit={safeSubmit}>
        <input type="text" placeholder="Insira seu nome..." />
        <input type="email" placeholder="Insira seu email..." />
        <button type="submit">Seguir</button>
    </form>
  )
}

export default Form;