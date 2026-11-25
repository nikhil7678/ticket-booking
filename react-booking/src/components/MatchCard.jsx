function MatchCard({ match, isSelected, onSelect }) {
  return (
    <article className={`match-card${isSelected ? ' is-selected' : ''}`}>
      <div className="match-card-top">
        <span className="match-number">{match.number}</span>
        <time dateTime={match.dateTime}>{match.dateLabel}</time>
      </div>
      <h3>
        {match.homeTeam} <span>vs</span> {match.awayTeam}
      </h3>
      <p className="match-venue">{match.venue}</p>
      <p className="match-price">
        <span>Tickets from</span>
        <strong>Rs. {match.startingPrice.toLocaleString('en-IN')}</strong>
      </p>
      <button
        className="select-match-button"
        type="button"
        aria-pressed={isSelected}
        onClick={onSelect}
      >
        {isSelected ? 'Match selected' : 'Select match'}
      </button>
    </article>
  )
}

export default MatchCard
