import React from 'react';
import shortid from 'shortid';


const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  
const Total = ({ course }) => {
    console.log('Total', course.parts)
    const total = course.parts.reduce((a, b) => a + b.exercises, 0)
    return (
        <p><b>Number of exercises {total}</b></p>
    )
}
  
const Part = ({ part }) => {

    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ course }) => {

    console.log('Entered content componente', course.parts)
    return (
        <div>
            {course.parts.map(part => <Part key={shortid.generate()} part={part} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course