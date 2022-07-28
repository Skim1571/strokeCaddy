const GameInfo = (props) => {

  return (
    <div className='scorecard grid'>
      <h2>Game Info Here</h2>
      {
        props.games.map((game) => (
          <div key={game.id} className='scorecard'>
            <h3>Hole {game.hole}</h3>
            <h3>Par {game.par}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default GameInfo