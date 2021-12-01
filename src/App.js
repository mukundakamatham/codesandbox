import "./styles.css";
import { Custom } from "./components/custom";
import { UseEffect } from "./utils/useFetch";

export default function App() {
  const { loading, error, data } = UseEffect(
    "https://reqres.in/api/users?page=2"
  );
  //const toRender=useDelay(2);

  return loading ? (
    <>loading...</>
  ) : error ? (
    <>error.</>
  ) : (
    <div className="App">
      <h1>{data.first_name}</h1>
    </div>
  );
}
