import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from '@material-ui/core/Button';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Title } from "@material-ui/icons";

function Write() {
  const [topic, settopic] = useState("Topic By a Stranger");
  const [name, setname] = useState("Someone");
  const [messsage, setmessage] = useState("");






  async function sendblog(){
  
    var config=require("../config");
    var url=config.url;
    if( name!="" & topic!="" & messsage!=""){
      const response= await fetch(url+"/api/addpost", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `name=${name}&topic=${topic}&message=${messsage}`,
        // body: JSON.stringify({
        //   fabric: fabric,
          
        // })
      });
      const json=await response.json();
      alert("your content will be public after admin approval!! Thanks Please share more");


      window.location="/Write";

    }
    
    else{
      alert("Please Fill all Fields")
    }
      }




    return (
        <div>
            <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-4/5 max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12  ">
            <div className=" ">
             <br/><br/><br/>
             <h1 className="font-bold text-5xl text-gray-700">
               Blog
              </h1>
              <TextField id="standard-basic" onChange={(e) => settopic(e.target.value)} label="Title" />
<br/>
<TextField  onChange={(e) => setname(e.target.value)} id="standard-basic" label="Name" />
<br/><br/>
<textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="4"
                    onChange={(e) => setmessage(e.target.value)}
                    placeholder="Description"
                  ></textarea>

              <br/><br/>
        
 
              <br/>
             <Button variant="contained"  onClick={sendblog} color="primary" href="#contained-buttons" style={{ marginLeft:140}}>
        Publish
      </Button>



            </div>
            </div>
            </div>
             
             </section>  

             <br/><br/><br/><br/>
             <Footer />   
        </div>
    )
}

export default Write
