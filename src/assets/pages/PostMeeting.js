import { useState } from "react";
import MeetingCard from "./MeetingCard";
function PostMeeting() {
    const [meetings, setMeetings] = useState([]);
    fetch('https://major-project-875a4-default-rtdb.firebaseio.com/meet.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let tempmeeting = [];
            for (const key in data) {
                let meeting = {
                    id: key,
                    ...data[key]
                }
                tempmeeting.push(meeting)
            }
            console.log(data);
            console.log(tempmeeting)
            setMeetings(tempmeeting)
        });
    return (
        <div className="page">
            <h1>Post Meeting</h1>
            <div className="meetings-container">
                {
                    meetings.filter((meeting)=>{
                        // let today= new Date();
                        // return (new Date(meeting.date) < today)
                        let today=new Date();
                        let meetingdate= new Date(meeting.date);
                        return meetingdate.setHours(0,0,0,0)<today.setHours(0,0,0,0);
                    }).map((meeting) => {
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        let date= new Date(meeting.date)
                        let fdate=date.toLocaleDateString('en',options)

                        return <MeetingCard title={meeting.title}  img={meeting.img} date={fdate}/>
                    })
                }
            </div>
        </div>
    )
}
export default PostMeeting;