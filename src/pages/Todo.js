import React, { useEffect } from 'react'
import {useState} from 'react'

export default function Todo (props) {

        const [TaskData, setTaskData] = useState({
            id: '',
            name: '',
            desc: '',
            date: ''
        })

        const handleChange = (e) => {
            setTaskData({ ...TaskData, [e.target.name]: e.target.value, id:Date.now()})
            console.log('TaskData', TaskData)
        }



        const handleSubmit = (e) => {
            e.preventDefault()
            if (!TaskData.name || !TaskData.desc){
                if(!TaskData.name){
                    alert('Please Name The Task')
                }
                if(!TaskData.desc){
                    alert('Please Provide A Description')
                }
                return
            }
            const existingTasks = JSON.parse(localStorage.getItem('tasks')) || []
            const updatedTasks = [...existingTasks, TaskData]

            setTaskData({ ...TaskData, [e.target.name]: e.target.value})

            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            // localStorage.clear()
            setTaskData({
                id:'',
                name: '',
                desc:'',
                date:''
            })
            window.location.reload()
            console.log('Task ID', existingTasks.id)
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
                    <input type='date' defaultValue={new Date().toISOString().substring(0, 10)} name='date' onChange={handleChange} /></p>
                    <p><input type='submit' value='New Task'/></p>
                </form>
            </div>
        )

}

