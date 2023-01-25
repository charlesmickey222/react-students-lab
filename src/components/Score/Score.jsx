const Score = (props) => {
  const {score} = props
  return ( <>
    <h4>scored: {score.score} on :{score.date}</h4>
  </> );
}

export default Score;