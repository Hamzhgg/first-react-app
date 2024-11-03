export default function App(){
const todo  = {
  id : 1,
  text: "Learn React JSX",
  done: true
}


  return (
    <>
      <h1 className="hello">Hello world!</h1>
      <h2>Hello universe!</h2>
      <p>{todo.text}</p>
      <hr/>
      <br/>
      <label htmlFor="name"></label>
      <input tybe="text" name="name" id="name" />
    </>
  )
};
