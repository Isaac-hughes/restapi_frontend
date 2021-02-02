import './App.css';
// import { fetchData } from './functions/fetchPost'
import Posts from './components/Posts'

const App = () => {
  return (
    <div>
      <h1 className="pageTitle">Posts</h1>
      <Posts></Posts>
    </div>
  )
}

export default App;
