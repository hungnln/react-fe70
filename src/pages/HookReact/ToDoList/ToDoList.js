import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addTaskAction, deleteTaskAction, doneTaskAction, getAllTaskAction, rejectTaskAction } from '../../../redux/actions/types/toDoListAction';


export default function ToDoList() {
    const [task, setTask] = useState({ taskName: '', status: false })
    // let [arrTask, setArrTask] = useState([])
    const { arrTask } = useSelector(rootReducer => rootReducer.toDoListReducer);
    const dispatch = useDispatch();
    useEffect(async () => {


        let action = getAllTaskAction()
        dispatch(action)

        // await setArrTask(result.data)
        // console.log(result.data, 'result');
        //Sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
        //dispatch 1 action là function
        /*
        action có 2 loại:
        Loại 1: {type:'NAME',payload:data}
        Loại 2 : function
        */
    }, [])
    const handleChangeInput = (e) => {
        console.log(e.target.value);
        let { value, name } = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }
    const handleChangeSubmit = (e) => {
        e.preventDefault()
        //call api
        //Khi gọi hàm addTaskAction thì trả về hàm chưa gọi

        const action = addTaskAction(task)
        dispatch(action)
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3>To do list</h3>
                    <form onSubmit={handleChangeSubmit} className="input-group mb-3">
                        <input onChange={handleChangeInput} name="taskName" type="text" className="form-control" placeholder="task name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button type='submit' className="input-group-button btn btn-success" id="basic-addon2">Add task</button>
                        </div>
                    </form>

                    <table className='table'>
                        <tbody>
                            {arrTask.filter(task => task.status === true && task.taskName !== '').map((task, index) => {
                                return <tr key={index}>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <span className="badge badge-success">complete</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => {
                                            const action = rejectTaskAction(task.taskName)
                                            dispatch(action)
                                        }}>undo</button>
                                        <button className='btn btn-danger ml-2' onClick={() => {
                                            const action = deleteTaskAction(task.taskName);
                                            dispatch(action)
                                        }}>delete</button>
                                    </td>
                                </tr>

                            })}

                        </tbody>

                        <tfoot>
                            {arrTask.filter(task => task.status !== true && task.taskName !== '').map((task, index) => {
                                return <tr key={index}>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <span className="badge badge-danger">incompleted</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-success' onClick={() => {
                                            const action = doneTaskAction(task.taskName)
                                            dispatch(action);
                                        }}>done</button>
                                        <button className='btn btn-danger ml-2' onClick={() => {
                                            const action = deleteTaskAction(task.taskName);
                                            dispatch(action)
                                        }}>delete</button>
                                    </td>
                                </tr>
                            })}


                        </tfoot>
                    </table>
                </div>
            </div>
        </div >
    )
}
