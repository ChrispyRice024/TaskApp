import React, { useEffect, useState } from 'react'

export default function List () {
    
    const [data, setData] = useState([])

    // useEffect(() => {
    //     setData(Object.keys(localStorage).map(key => {
    //         const taskData = JSON.parse(localStorage.getItem(key))
    //         return {...taskData, id:key}
    //     }))
    // }, [])
    useEffect(() => {
        const values = Object.values(localStorage)
        const tasks = values.map((value) => JSON.parse(value))
        setData(tasks)
      }, [])
      

    return(
        <div>
            {data.map((task, index) => {
            return(
                <div className='task' key={index}>
                    <h2>{task.name}</h2>
                    <p>{task.desc}</p>
                    <span>{task.date}</span>
                </div>
            )    
        })}
        </div>
    )
}