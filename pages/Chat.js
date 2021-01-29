import React from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Buttonui from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'red',
    },
    input: {
      display: 'none',
    },
}));
function Chat() {
    const classes = useStyles();
    return (
        <div>
            <IndexNavbar/>

<br/><br/><br/><br/>
            <div className="container" >

<div className="messaging " >
    <div className="inbox_msg">
       
        <div className="mesgs">
            <div className="inbox_pele">
                <div className="headind_srch">

                    <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8" >
  
                  
  </div>
  <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>

  <div className="col-lg-4 col-md-8 col-sm-2 col-xs-2" >
                    <div className="cancelbtnstyl">
            <Buttonui color="secondary" >cancel</Buttonui>

            


              


{/* 
<div>

{noaudio=="1"? <>
<ReactMic
    record={recordstate}
   ////   visualSetting="" 
     className="sound-wave"
     onStop={onStop}
      onData={onData}
    //   strokeColor="#000000"
    //   backgroundColor="#FF4081" 
     />
    <button onClick={startRecording} type="button">Start</button>
    <button onClick={stopRecording} type="button">Stop</button></>:null}
    
  </div> */}

</div>
</div>



</div>

                </div>

            </div>
<br/>
            <div className="msg_history" id="down">

            <div className="recent_heading">
                        <h4>adasss</h4>

                        
                    </div>

                    

                    
            

                    
            
           

<div>


<div className="outgoing_msg">
                    <div className="sent_msg">
                    <p>dsfds</p>
                        {/* <span className="time_date"> 11:01 AM    |    Today</span> */}
                        
                         </div>
                </div>      
               

            






               

{/* <Image src={s.finalmsg} size='medium' rounded style={{width:300,height:300,marginTop:10}} /> */}



               
{/* <audio src={s.finalmsg} controls="controls" /> */}
            



<div className="incoming_msg">
                   
                   <div className="received_msg">
                       <div className="received_withd_msg">


            <p>sdlkls</p>
                           {/* <span className="time_date"> 11:01 AM    |    Yesterday</span> */}
                           </div>
                   </div>
               </div>



</div>   









               
              
<div className="incoming_msg">
                    <div className="received_msg">

                    <div id="tries" className="typing">     
     sdad
                        </div> 
                         </div>
                </div>      





              
               




                <div className="outgoing_msg">
                    <div className="sent_msg">
                    <p>dsfds</p>
                        {/* <span className="time_date"> 11:01 AM    |    Today</span> */}
                        
                         </div>
                </div>   






            </div>
           


            



            <div className="type_msg" id="keyboard">
                <div className="input_msg_write">
                    
                    <input id="test"  autocomplete="off"   id="myText" autofocus  type="text" className="write_msg" placeholder="Type a message" />
                    
                </div>
             
               
               
            
               


  <input accept="image/*" className={classes.input} id="icon-button-file" type="file"   />
  <label htmlFor="icon-button-file" className="msg_send_btn2">
    <IconButton color="primary" className="msg_send_btn2" aria-label="upload picture" component="span" >
      <PhotoCamera />
    </IconButton>
  </label>

  {/* <button className="msg_send_btn1" type="button"  aria-label="upload picture"> <PhotoCamera /></button> */}

             

               <button className="msg_send_btn1" type="button" ><SendIcon /></button>
                


                <button className="msg_send_btn" type="button" ><PersonAddIcon style={{ fontSize: 20 }} /></button>
            </div>
        </div>
    </div>
 
</div></div>

            
        </div>
    )
}

export default Chat
