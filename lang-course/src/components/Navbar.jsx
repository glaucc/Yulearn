export default function() {
    //1. Don't forget to give an hover to the words with main green to attract.
    //2. Do a research about attracting with design and observe the apps.
    return (
        <div className="whole-nav">
            <div className="logo">
                <button className="logo-btn">
                <h1 className="logo-text">YuLearn</h1>
                </button>
            </div>
            <div className="nav">
                <div className="page-nav">
                    {/* Add a hover info for these */}
                    <button className="categ"><a>Learn</a></button>
                    <button className="categ"><a>Stories</a></button>
                    <button className="categ"><a>Need a Mentor?</a></button>
                </div>
                <div className="statistics">
                    <ul>
                        <div className="stat coins">
                        <li>Coins</li>
                        </div>
                        <div className="stat streak">
                        <li>Streak</li>
                        </div>
                        <div className="stat my-profile">
                        <li>My Profile</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}