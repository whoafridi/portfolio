import { useDispatch, useSelector } from "react-redux";
import { multiply, add } from "../redux/multiply/action";


const Multiply = ({id}) => {
    const count =  useSelector(state => state.multiply.value);
    const dispatch = useDispatch();

    const multiplyhandler = (value) =>{
        dispatch(multiply(value))
    }

    const addhanlder = (value) =>{
        dispatch(add(value))
    }

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">
                {count} - {id}
            </div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => multiplyhandler(3)}
                >
                    Multiply
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => addhanlder(2)}
                >
                    Add
                </button>
            </div>
        </div>
  )
}
export default Multiply;