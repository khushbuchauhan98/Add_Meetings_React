import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
function AddMeeting(){
    let navigate = useNavigate();
    const [loder,setloder]=useState(false)
    let titleInput=useRef();
    let imgInput=useRef();
    let linkInput=useRef();
    let dateInput=useRef();
    function meetingHendler(){
        setloder(true)
        let tempmeeting={
            title:titleInput.current.value,
            img:imgInput.current.value,
            link:linkInput.current.value,
            date:dateInput.current.value
        }
        if(tempmeeting.title!=0 && tempmeeting.img!=0 && tempmeeting.link!=0 && tempmeeting.date!=0){
            fetch('https://major-project-875a4-default-rtdb.firebaseio.com/meet.json',{
                method:'post',
                body:JSON.stringify(tempmeeting)
            }).then(()=>{
                setloder(false)
                navigate('/upcoming-meeting')
            })
        }
       
    }
    return(
        <div className="page-sm">
            <h1>Add Meeting</h1>
            <input ref={titleInput} type="text" placeholder="Enter the meeting title"/>
            <input ref={imgInput} type="text" placeholder="Enter the meeting image"/>
            <input ref={linkInput} type="text" placeholder="Enter the meeting link"/>
            <input ref={dateInput} type="datetime-local" placeholder="Enter the meeting date"/>
            {/* <div className="display-inline"> */}
            <button className="btn-add" onClick={meetingHendler}><div className= {loder==true?"d-none":""}>Add Meeting </div>
            <div className= {loder==true?"":"d-none"}>Adding new Meeting </div>
            <div className={loder==false ?"d-none" :"loader"} ></div></button>
            {/* <div className={loder==true?"pleaseval":"d-none"}>please Enter the value</div> */}
            {/* </div> */}
            </div>
    )
}
export default AddMeeting;