export default function Home() {
    const [gameClock, changeGameClock] ) useState({
        teamName1: "team name 1",
        teamScore1: 0,
        buttonChangeteam1: false,
    });
    return (
        <div>
            <Header />
            <Team name={gameClock.teamName1} score={gameClock.teamScore1}</Team>
            {/* Change Name*/}
            <div>
            Change team name:
            <input
            type="text"
            style={{ border: }}
            </div>
            </div>
    )
}