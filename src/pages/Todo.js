import React, { useEffect } from 'react'
import {useState} from 'react'

export default function Todo () {

        const [TaskData, setTaskData] = useState({
            name: '',
            desc: '',
            date: ''
        })

        const handleChange = (e) => {
            setTaskData({ ...TaskData, [e.target.name]: e.target.value})
            console.log('TaskData', TaskData)
        }

        useEffect(() => {
            localStorage.setItem('TaskData', JSON.stringify(TaskData))
        }, [TaskData])

        const handleSubmit = (e) => {

            if(!TaskData.name && !TaskData.desc){
                alert(`Please name and describe the task.`)
            }else if(!TaskData.name || !TaskData.desc){
                alert(`You are missing the required field ${!TaskData.name ? 'Name Of The Task' : ''} ${!TaskData.desc ? 'Describe The Task' : ''} `)
            }
            // setTaskData({ ...TaskData, [e.target.name]: e.target.value})
            localStorage.setItem(TaskData, JSON.stringify(TaskData))
            // // localStorage.clear()
            
        }
        console.log(localStorage)
        return(
            <div id='newTask'>
                <h1>New Task</h1>
                <form onSubmit={handleSubmit}>
                    <p><label htmlFor='name' >Task Name</label>
                    <input type='text' placeholder='New Task' name='name' onChange={handleChange} /></p>
                    <p><label htmlFor='desc'>Description</label>
                    <input type='text-box' placeholder='Enter a small description of the task' name='desc' onChange={handleChange} /></p>
                    <p><label htmlFor='due-date'>Due-Date</label>
                    <input type='date' defaultValue={new Date().toISOString().substring(0, 10)} name='due-date' onChange={handleChange} /></p>
                    <p><input type='submit' value='New Task'/></p>
                </form>
            </div>
        )

}