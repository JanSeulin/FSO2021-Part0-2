import React from 'react'
import Course from './components/Course'

/* const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
};



const Content = ({ parts }) => {
    console.log(parts);
    return (
      <div>
        {parts.map(part =>
        <> 
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        </>
        )}
      </div>
    );
  };

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}

const Total = ({ total }) => {
  return (
    <div>
      <p><strong> Total number of exercises:&nbsp; 
      {total.reduce((sum, item) => {
        return sum + item.exercises;
      }, 0)}
      </strong></p>
      

    </div>
  )
}

const Course = ({ course }) => {
    return (
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total total={course.parts} />
      </>

    )
}
*/

const App = () => {
      const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    

    return (
        <div>
          <h1>Web Development Curriculum</h1>
          {courses.map(course => 
            <Course key={course.id} course={course} />)}
        </div>
    )
};

export default App;