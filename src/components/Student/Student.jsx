import Score from "../Score/Score";

const Student = (props) => {
  const {student} = props
  return ( <>
    <h1>{student.name}</h1>
    <p>{student.bio}</p>
    <ul>
      {student.scores.map(score=>(
        <li>
          <Score score={score}/>
        </li>
        )
      )}
    </ul>
  </> );
}

export default Student;