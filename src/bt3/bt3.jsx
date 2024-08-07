// import { List } from '@mui/material';
import React ,{useState} from 'react'

function BT3() {
    const listTask = [
        {
            name: "Lau Nha",
            isCheck: false,
        },

        {
            name: "Quet nha",
            isCheck: true,
        },
    ];
    const [list, setList] = useState(listTask);
    const [value, setValue] = useState("");
    const addTask = () => {
        if (value !== "") {
            const newTask = {
                name: value,
                isCheck: false,
            };
            const newList = [...list];
            newList.push(newTask);
            setList(newList);
            setValue("")
        }else {
            alert('Ban chua nhap gi ca')
        }
    };
    const deteleTask = (index) =>{
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
        console.log(newList);
    };
    const resetTask = () => {
        setList(listTask);
    };
    const handcheck = (index) => {
        const newTask = { ...list[index], isCheck: !list[index].isCheck };
        const newList = [...list];
        newList.splice(index, 1, newTask);
        setList(newList);
      }; 
    const clear = () => {
        const newList = list.filter(task => !task.isCheck);
        setList(newList);
      };
    
    return (
        <div className="w-full h-screen bg-gray-100 pt-8">
            <div className="bg-white p-3 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">ToDo App</h1>
                    <div className="mt-4 flex">
                        <input className="w-80 border-b-2 border-gray-500 text-black" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter your task here" />
                        <button onClick={addTask} 
                        className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
                            <svg className="h-6 w-6" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx={12} cy={12} r={9} />  <line x1={9} y1={12} x2={15} y2={12} />  <line x1={12} y1={9} x2={12} y2={15} /></svg>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <ul>
                        {list.map((item, index) => (
                            <li className="p-2 rounded-lg" key={index}>
                                <div className="flex align-middle flex-row justify-between">
                                    <div className="p-2">
                                        <input unc={handcheck} type="checkbox" className="h-6 w-6 " checked={item.isCheck} onChange={() => handcheck(index)} />
                                    </div>
                                    <div className="p-2">
                                        <p  className={`text-lg ${item.isCheck ? "line-through text-gray-400" : "text-black"}`}>{item.name}</p>
                                    </div>
                                    <button onClick={deteleTask} className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                        <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <circle cx={12} cy={12} r={10} />  <line x1={15} y1={9} x2={9} y2={15} />  <line x1={9} y1={9} x2={15} y2={15} /></svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr className="mt-2" />
                            </li>
                        ))}

                        
                    </ul>
                </div>
                <div className="mt-8">
                    <button onClick={clear} className="border-2 border-red-500 p-2 text-red-500">Clear Completed Task</button>
                    <button onClick={resetTask}className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">Reset Todo List</button>
                </div>
            </div>
        </div>

    )
}

export default BT3
