
const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Total = (props) => {
  return (
    <strong>Total of  {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong>
  )
}

export default Course