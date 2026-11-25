import { useMemo, useState } from 'react'
import Hero from './components/Hero.jsx'
import MatchCard from './components/MatchCard.jsx'
import Navbar from './components/Navbar.jsx'
import { matches } from './data/matches.js'
import './App.css'

function App() {
  const [selectedTeam, setSelectedTeam] = useState('all')
  const [selectedMatch, setSelectedMatch] = useState(null)

  const visibleMatches = useMemo(() => {
    if (selectedTeam === 'all') {
      return matches
    }

    return matches.filter((match) => match.teams.includes(selectedTeam))
  }, [selectedTeam])

  function scrollToMatches() {
    document.querySelector('#matches')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero onBrowseMatches={scrollToMatches} />

        <section className="section matches-section" id="matches">
          <div className="section-heading">
            <p className="eyebrow">The 2026 season</p>
            <h2>Upcoming matches</h2>
            <p>Pick a fixture and find your seat in the stands.</p>
          </div>

          <div className="match-toolbar">
            <label htmlFor="team-filter">Filter by team</label>
            <select
              id="team-filter"
              value={selectedTeam}
              onChange={(event) => setSelectedTeam(event.target.value)}
            >
              <option value="all">All teams</option>
              <option value="rcb">Royal Challengers Bengaluru</option>
              <option value="mi">Mumbai Indians</option>
              <option value="csk">Chennai Super Kings</option>
              <option value="kkr">Kolkata Knight Riders</option>
              <option value="dc">Delhi Capitals</option>
              <option value="srh">Sunrisers Hyderabad</option>
            </select>
            <p className="match-count" role="status" aria-live="polite">
              Showing {visibleMatches.length} {visibleMatches.length === 1 ? 'match' : 'matches'}
            </p>
          </div>

          {visibleMatches.length > 0 ? (
            <div className="match-grid">
              {visibleMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  isSelected={selectedMatch?.id === match.id}
                  onSelect={() => setSelectedMatch(match)}
                />
              ))}
            </div>
          ) : (
            <p className="empty-state">No matches found for this team.</p>
          )}

          {selectedMatch && (
            <div className="selection-panel" role="status">
              <p>
                <strong>{selectedMatch.title}</strong> selected. Continue to booking when you are ready.
              </p>
              <button type="button" className="text-button" onClick={() => setSelectedMatch(null)}>
                Clear selection
              </button>
            </div>
          )}
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">More than a game</p>
            <h2>Make match day yours</h2>
            <p>
              Bring your crew, choose your stand, and experience every over with the energy of a
              live IPL crowd.
            </p>
          </div>
          <div className="about-stat">
            <span>One stadium</span>
            <strong>Infinite memories</strong>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">IPL<span>2026</span></a>
        <p>Ticket booking made for the love of cricket.</p>
      </footer>
    </>
  )
}

export default App
