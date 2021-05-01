import { counter } from "../app/counter";
function CounterValue() {
  const count = counter.use();
  console.log("Re-rendered : Counter");
  return (
    <div>
      {count}
    </div>
  )
}

export default CounterValue
