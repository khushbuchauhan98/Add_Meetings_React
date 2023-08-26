import {Link} from 'react-router-dom'
import { useState } from "react";
import MeetingCard from "./MeetingCard";
function Home(){
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
    return(
        <div className="page">
            <div className='hero'>
            <h1 className="title">Organize all your Live meetings in one place</h1>
            <Link to="add-meeting" className='btn'>Add Meetings</Link>
            </div>
            <div className="page">
          
            <div className="meetings-container">
                {
                    meetings.filter((meeting)=>{
                        let today=new Date();
                        let meetingdate= new Date(meeting.date);
                        return meetingdate.setHours(0,0,0,0)==today.setHours(0,0,0,0);
                    }).map((meeting) => {
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        let date= new Date(meeting.date)
                        let fdate=date.toLocaleDateString('en',options)

                        return <MeetingCard title={meeting.title}  img={meeting.img} date={fdate}/>
                    })
                }
            </div>
        </div>
            </div>
    )
}
export default Home;