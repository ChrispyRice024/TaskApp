import React, { useEffect, useState } from 'react'

export default function List () {
    
    const [data, setData] = useState([])

    const deleteTask = (task) => {


        
        window.localStorage.removeItem(task.id);
        const filteredData = data.filter((item) => item.id !== task.id)
        setData(filteredData)

        console.log(`deleting Task ID ${task.id}`)
        console.log('Storage after deletion', localStorage)
        
        // window.location.reload()
        
        console.log('delete fun', data)
    }


    useEffect(() => {

        const tasks = JSON.parse(Object.values(localStorage))

        setData(tasks)
              console.log('tasks', data)
      }, [localStorage])
      

    return(
        <div>
            {data.map((task, index) => {

            return(

                <div className='task' key={index}>

                    <h2>{task.name}</h2>

                    <p>{task.desc}</p>
                    
                    <p>{task.date}</p>
                    {console.log('taskId', task.id)}
                    
                    <span><button onClick={() => deleteTask(task) } id='delete'>Delete</button></span>
                
                </div>
            )    
        })}
        </div>
    )
}

