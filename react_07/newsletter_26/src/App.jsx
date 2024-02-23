import { useState } from 'react';

import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from './components/Form/Form';

// --- Principal ---
function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <>
        <Header user={user} />
        { hasUser && <ArticleList /> }
        { hasUser || <Form onSubmit={setUser} /> }
    </>
  )
}

export default App;
