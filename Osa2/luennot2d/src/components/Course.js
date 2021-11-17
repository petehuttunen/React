import React from 'react'

const Headers = ({course}) => {

    return (
        <div>
            <h1>
                {course.name}
            </h1>
        </div>
    )
}

const Part = ( {part} ) => {
    const parts = part

    return(
        <div>
            {parts.map( part1 => 
                <p key={part1.id}>
                    {part1.name} {part1.excercises}
                </p>
            )}
        </div>
    )
}

const Content = ( {course} ) => {

    return (
        <div>
            <Part part = {course} />
        </div>
    )
}

const Total = ( {course} ) => {
    const total = course.reduce( (s, p) => s + p.excercises,0 )

    return(
        <div>
            <strong> total of {total} excercises </strong>
        </div>
    )
}

const Course = ( {course} ) => {
    const courses = course
    return (
        <div>
            {courses.map( course1 => 
            <div key={course1.id} >
                <Headers course = {course1} />
                <Content course = {course1.parts} />
                <Total course = {course1.parts} />
            </div>
            )}
        </div>
    )

}



export default Course