function MeetingCard(props) {
    return (
        <div className="meeting-card">
            <img alt='' src={"https://source.unsplash.com/1600x800/?" + props.img} />
            <div className="meeting-body">
                <div className="flex">
                <h3>{props.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
                </div>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
export default MeetingCard;