

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email });
    }

  return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20">
        <input type="text" placeholder="Insira seu nome..." />
        <input type="email" placeholder="Insira seu email..." />
        <button type="submit" className="py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase">Seguir</button>
    </form>
  )
}

export default Form;