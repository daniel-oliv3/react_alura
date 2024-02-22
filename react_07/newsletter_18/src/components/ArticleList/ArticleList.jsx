import data from "../../../articles.json";

const ArticleList = () => {
  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3">
        {
          data.map(props => <p>{props.title}</p>)
        }
    </div>
  )
}

export default ArticleList;