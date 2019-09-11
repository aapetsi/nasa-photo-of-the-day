import React from 'react'

const POD = ({data}) => {
    console.log(data)
    return (
        <div>
            <h1>Picture of the Day</h1>
            <img alt={data.title} src={data.url} />
            <p>Title: {data.title}</p>
            <p>Date {data.date}</p>
            <p>Description:</p>
            <p>{data.explanation}</p>
        </div>
    )
}

export default POD