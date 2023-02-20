import React, { useEffect, useState } from 'react'

export default function List () {
    
    const [data, setData] = useState([])

    const deleteTask = (taskId) => {

        console.log(`deleting Task ID ${taskId}`)

        localStorage.removeItem(taskId);
        setData(prevData => prevData.filter(task => task.id !== taskId));
    }


    useEffect(() => {
        const values = Object.values(localStorage)
        const tasks = values.map((value) => JSON.parse(value))

        setData(tasks)
              console.log('tasks', data)
      }, [])
      

    return(
        <div>
            {data.map((task, index) => {

            return(

                <div className='task' key={index}>

                    <h2>{task.name}</h2>

                    <p>{task.desc}</p>
                    
                    <p>{task.date}</p>
                    {console.log('taskId', task.id)}
                    
                    <span><button onClick={() => deleteTask(task.id)} id='delete'>Delete</button></span>
                
                </div>
            )    
        })}
        </div>
    )
}

