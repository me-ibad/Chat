import React, { useState, useEffect } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Buttonui from '@material-ui/core/Button';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import socketIOClient from "socket.io-client";
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Resizer from 'react-image-file-resizer';

import { Image  ,Button1} from 'semantic-ui-react'



import HttpsIcon from '@material-ui/icons/Https';

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

function tests() {
    
    
  
  
  var objDiv = document.getElementById("down");
  
  /////////////////////sssssssssssssss
  objDiv.scrollTop = objDiv.scrollHeight + 2000;
    window.scrollTo(0, 2000);
 

    window.location.hash = 'trie';

  
}
function myFocus() {
    document.getElementById("myText").focus();
}
function topFunction() {
    var myDiv = document.getElementById('down');
    window.scrollTo(myDiv, 0, 100);
}

function downFunction() {
    var objDiv = document.getElementById("down");
objDiv.scrollTop = objDiv.scrollHeight+1000;
    window.scrollTo(0, 10000);
}

export default function Index() {
const classes = useStyles();

const resizeFile = (file) => new Promise(resolve => {
  Resizer.imageFileResizer(file, 300, 300, 'JPEG', 60, 0,
  uri => {
    resolve(uri);
  },
  'base64'
  );
});


const testonchangefile = async (event) => {
const file = event.target.files[0];

if(file!=undefined){
  const myimage = await resizeFile(file);
///setblobURL(image)
printmessageforimg(myimage)
            globalsocket.emit('img', {'text': myimage})
}

///console.log(image);
}

  var dummyusername="";
 



  



  const [username, setusername] = useState('');


  const [allmsg, setallmsg] = React.useState([]);


  const [mymsg, setmymsg] = React.useState([]);




  const [recordstate, setrecordstate] = useState(false);
  
  const [tpypingmsg, settpypingmsg] = useState("");

  const [globalsocket, setglobalsocket] = useState("");

 

  // const [audiostates, setaudiostates] = useState({
  //     isRecording: false,
  //     blobURL: '',
  //     isBlocked: false,
  //   });

    const [blobURL, setblobURL] = useState("");

  const [pname, setpname] = useState("");


  const [myroom, setmyroom] = useState("");


  const [enablechat, setenablechat] = useState("0");


  const [message, setmessage] = useState("");


  const [noaudio, setnoaudio] = useState("0");


  


  // useEffect(() => {
  //   const audioContext = new AudioContext()

    
  //   getMedia().then(stream => {
  //     if (audioContext.state === 'closed') {
  //       setnoaudio("0");}
  //       else{
  //         setnoaudio("1");
  //       }
      
  //   })
  
  //  } , [])


  var config=require("../config");
  var url=config.url;








   useEffect(() => {
const ENDPOINT = url;
///const ENDPOINT = "http://localhost:5000";

 /////const ENDPOINT =    "https://helostranger.com/myapi";

      const    socket = socketIOClient(ENDPOINT);

      
socket.on('disconnect', function(data) { // handle server/connection falling
console.log('Connection fell or your browser is closing.');
});
     setglobalsocket(socket)
       socket.on("chat start", (data)=>{
         ///  alert("you are connected to"+data.name+"room name is "+data.room)
setmyroom(data.room);
         setpname(data.name)
setenablechat("1")
         
         
       });






       socket.on("chat end", (data)=>{
          setmymsg([]);
          setallmsg([]);
          setenablechat("2");
          
        });







       socket.on("message", (data)=>{
      let  playAlert = require('alert-sound-notify');
        playAlert();
       
          settpypingmsg("")
        
     
     printmessage(data)
     downFunction();
     tests();
         
      });



      socket.on("img", (data)=>{

        ///  settpypingmsg("")
        
        /////setImgBase64(data)
     printmessageforimg(data)
     downFunction();
     tests();
         
      });






      socket.on("message1", (data)=>{

       
     tests();
    
         
      });

     
      socket.on("typing", (data)=>{
      
        
     settpypingmsg(data);
     tests();
              
           });
    
     
       },[]);




function printmessage(msg){

var myObj = { "finalmsg":msg ,"difff":"1"};
setallmsg(allmsg => [...allmsg, myObj]);
}

function printmessageforimg(msg){
  var myObj = { "finalmsg":msg ,"difff":"3"};
  setallmsg(allmsg => [...allmsg, myObj]);
}

function printmessageforaudio(msg){
  var myObj = { "finalmsg":msg ,"difff":"4"};
  setallmsg(allmsg => [...allmsg, myObj]);
}





const leaveroom= async()  => {
 //// setmessage("");
setallmsg([]);
setmymsg([]);
setenablechat("2");
globalsocket.emit('typing', {'text': ""})
globalsocket.emit('leave room');
//////globalsocket.leave(myroom);





}



  const loginuser= async()  => {

   
      // socket.on('connect', function (data) { // we are connected, should send our name
      /////    connected = true;
    ////      if (username=!"")

    if(username!=""){
          setenablechat("2")
          localStorage.setItem("strangertoken",username)
          globalsocket.emit('login', {'username' : username});
    }  
      // });

  }


  const sendmessage= async(socket)  => {

   
   
//        if(allmsg.length<5){
//         //    alert("hehehehhe")
// topFunction();
//        } 
//        else{
//        downFunction();}


//////downFunction();

    myFocus();
      if(message!=""){
      setmessage("");
    

      var myObj = { "finalmsg":message ,"difff":"0"};
      setallmsg(allmsg => [...allmsg, myObj]);
      tests();
      globalsocket.emit('message', {'text': message})
  

      }


    
    
  }


  const setsendmessage = (e) => {

     

 
      globalsocket.emit('typing', {'text': e.target.value})

   setmessage(e.target.value)

 

   
  };



  const handlerenter= (e)  => {


      if (e.key === 'Enter') {
          loginuser();
    }
    
    }


    const handlerentermessage= (e)  => {


      if (e.key === 'Enter') {
          sendmessage()
    }
    tests();
    }




    

 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
      setOpen(false);
  };
  const handleToggle = () => {
       setOpen(!open);



  };
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
      
     //// setmessage(message => [...message, emojiObject.chosenEmoji.emoji]);
      setChosenEmoji(emojiObject);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClosepop = () => {
      setAnchorEl(null);
  };

  const openpop = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [img, setImg] = React.useState({
      file: "",
    });
    const [imgBase64, setImgBase64] = React.useState(null);
  
  const handleImage = (event) => {
    
      try{
      fileUpload(event).then((data) => {
        //imgBase64 = data.base64;
        
        
        //buffer = Buffer.from(imgBase64, "utf-8");
      /////  console.log(buffer + "buffer");
        var lengthInKB = data.size / 1000;
        console.log(data.size / 1000);
        //console.log(imgBase64);
        if (lengthInKB > 10000) {
          alert("Image size is  greater than 3MB.");
         
          
        }
        else{
          ////  setImgBase64("data:image/jpeg;base64," + data.base64)
            printmessageforimg("data:image/jpeg;base64," + data.base64)
            globalsocket.emit('img', {'text': "data:image/jpeg;base64," + data.base64})
          }
        
      });
  
      // setImg({
      //   file: URL.createObjectURL(event.target.files[0]),
      // });
      }
      catch{
alert("catch")
      }
    
    };



//       const start= async()  =>{
      

// setblobURL(RecordState.START)
//       }
//       const stop = async()  =>{
//         setblobURL(RecordState.STOP)

//       }
//       const onStop1= async(audioData)  =>{

//      alert(audioData.url);
//      setblobURL(audioData.url)

//       }
  
    

    const startRecording= async()  =>{

      navigator.getUserMedia({ audio: true },
        () => {
        
        setrecordstate(true)

        },
        () => {
          setrecordstate(false)
        
        },
        );
        

}

const stopRecording= async()  => {
  setrecordstate(false)
}

const onData= async(recordedBlob)  => {
  console.log('chunk of real-time data is: ', recordedBlob);
}

const onStop= async(recordedBlob)  => {
  console.log('recordedBlob is: ', recordedBlob);
 //// setblobURL(recordedBlob)

  globalsocket.emit('voice', {'text': recordedBlob})
  

  printmessageforaudio(recordedBlob.blobURL)
////  setaudiostates.blobURL(recordedBlob)
}





  return (
    <>

{enablechat=="0"?<>
<IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-4/5 max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0 ">
             <br/><br/><br/>
              <h1 className="font-bold text-5xl text-gray-700">
               Say Hello to Strangers
              </h1>
              <br/><br/>
              <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-6">
                <div className="relative w-full mb-10">
            
                  <input
                  value={username} onChange={(e) => setusername(e.target.value)} 
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue="Hello There"
                  />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <Button variant="contained"   onClick={loginuser} color="primary">
        Chat
      </Button>
            
                </div>
              </div>


              </div>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              All Chats are end to end encrypted no outsider or
             even Helostranger can not read to them{" "}
                <a
                  href=""
                  className="text-gray-700"
                  target="_blank"
                >
                  Read more.
                </a>
               &nbsp; Do not use any abusive or harsh words. Respect everyone

              </p>
              <div className="mt-12">
                <a
                  href="/Blog"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Read Blog
                </a>
                <a
                  href="/Write"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Write Blog
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="https://image.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="..."
                  src="https://image.freepik.com/free-vector/illustration-concept-advertising_129685-155.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Place Your ad here 
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ipsum a interdum aliquet. Sed diam enim, eleifend in sem ut, mattis elementum purus. Nullam dolor urna, cursus ac aliquet ullamcorper, tristique ac neque. 
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-lock"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        More Secure
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Security is our first priority. Our mission is to provide user secure environment.                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-network-wired"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Community
                      </h6>
                      <p className="mb-4 text-gray-600">
                       We provide large community from all over the world. Click on chat button to connect.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-comment-dots"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Feedback</h6>
                      <p className="mb-4 text-gray-600">
                        Give us your feedback so we can provide you good Services. we looking forward.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Encodersoft
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Built by developers for developers. You will love how
                        easy is to to work with Us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      
      </section>

      

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this site?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, Share it with your friends tell them about your experience. It provide you opportunity to make new friends and spend free time to chat with random people.
                Write about your experience in blog
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/Write"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Write Blog
                </a>
                
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />



</>:enablechat=="1" ?<>
<IndexNavbar fixed />


<br></br><br></br>

<div>

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
    <Buttonui color="secondary" onClick={()=>window.location="/"}>cancel</Buttonui>

    


      


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
                <h4>{pname}</h4>

                
            </div>

            
    

            
    
    {allmsg.length<4 ?<><br></br><br></br><br></br><br></br><br></br></>:null}
   
    {allmsg.map((s,i)=> (<> 

<div>

{s.difff=="0" ?<>
<div className="outgoing_msg">
            <div className="sent_msg">
            <p>{s.finalmsg}</p>
                {/* <span className="time_date"> 11:01 AM    |    Today</span> */}
                
                 </div>
        </div>      
       

    


</>: 

s.difff=="3" ?<>

       

<Image src={s.finalmsg} size='medium' rounded style={{width:300,height:300,marginTop:10}} />


</>: 
s.difff=="4" ?<>

       
{/* <audio src={s.finalmsg} controls="controls" /> */}
    


</>: 


<>

<div className="incoming_msg">
           
           <div className="received_msg">
               <div className="received_withd_msg">


    <p>{s.finalmsg}</p>
                   {/* <span className="time_date"> 11:01 AM    |    Yesterday</span> */}
                   </div>
           </div>
       </div>


</>}


</div>   





</>))}




       
      
<div className="incoming_msg">
            <div className="received_msg">

            <div id="tries" className="typing">     
            {tpypingmsg!="" ?<>{tpypingmsg}
            
         
            
            </>:<><br></br><br></br></>}
                {/* <span className="time_date"> 11:01 AM    |    Today</span> */}
                </div> 
                 </div>
        </div>      





      
       











    </div>
   


    



    <div className="type_msg" id="keyboard">
        <div className="input_msg_write">
            
            <input id="test"  autocomplete="off" onKeyDown={handlerentermessage}  id="myText" autofocus  value={message} onChange={setsendmessage} type="text" className="write_msg" placeholder="Type a message" />
            
        </div>
     
       
       
       {message=="" ?<>
       


<input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={testonchangefile} />
<label htmlFor="icon-button-file" className="msg_send_btn2">
<IconButton color="primary" className="msg_send_btn2" aria-label="upload picture" component="span" >
<PhotoCamera />
</IconButton>
</label>

{/* <button className="msg_send_btn1" type="button"  aria-label="upload picture"> <PhotoCamera /></button> */}

     

       </>: <button className="msg_send_btn1" type="button"  onClick={sendmessage}><SendIcon /></button>}
        


        <button className="msg_send_btn" type="button" onClick={leaveroom}><PersonAddIcon style={{ fontSize: 20 }} /></button>
    </div>
</div>
</div>

</div></div>

</div>











</>:enablechat=="2"? <>


{/* <h1>

{pname!=""?<>{pname+" has left..."}</> :null   }





Waiting for other patner</h1> */}
<Backdrop className={classes.backdrop} open={true} onClick={handleClose}>

    <Typography variant="h4" gutterBottom style={{color:'white',marginLeft:20}}>
    {pname!=""?<>{pname+" has left..."}</> :null   }Connecting to other stranger
</Typography>
<br/>
    <CircularProgress color="inherit" style={{ marginTop: 120, marginLeft: -200 }} />
    
    <Buttonui variant="contained" color="primary" 
    onClick={()=>window.location="/"}
    style={{marginTop:250,marginRight:150}}>
       Close
</Buttonui>

</Backdrop>


{/* {()=>handleToggle()} */}


</>:



null}







        </>
  );
}
