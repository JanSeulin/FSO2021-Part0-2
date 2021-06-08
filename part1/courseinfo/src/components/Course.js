import React from 'react';

const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    )
};

const Content = ({ parts }) => {
    console.log(parts);
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
      </div>
    );
};

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
}

const Total = ({ total }) => {
  return (
    <p>
      <strong> Total number of exercises:&nbsp; 
        {total.reduce((sum, item) => {
          return sum + item.exercises;
        }, 0)}
      </strong>
    </p>  
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

export default Course;