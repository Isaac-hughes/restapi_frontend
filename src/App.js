import './App.css';
import Posts from './components/Posts'
import InputField from './components/Input'

const App = () => {
  return (
    <div>
      {/* <InputField></InputField> */}
      <h1 className="pageTitle">Posts</h1>
      <Posts></Posts>
    </div>
  )
}

export default App;
