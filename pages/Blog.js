import React, { useState, useEffect } from "react";
import Link from "next/link";
import socketIOClient from "socket.io-client";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 375,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
function Blog() {
    const classes = useStyles();





    async function fetchblog(){
  
      var config=require("../config");
      var url=config.url;
   
        const response= await fetch(url+"/api/readblog", {
          method: "post",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: ``,
          // body: JSON.stringify({
          //   fabric: fabric,
            
          // })
        });
        const json=await response.json();
     setallpost(json)
  
 
        }
  



    const [allpost, setallpost] = useState([]);


    useEffect(() => {
 
      fetchblog();  
              },[]);








    const bull = <span className={classes.bullet}>•</span>;


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
              <br/><br/>   <br/><br/>   <br/><br/>   <br/><br/>   <br/><br/>
              {allpost!=""? <>
              {allpost.map((s,i)=> (<>
              <br/><br/>


              {/* <a href={"/Details/"+s._id}> */}
          <Link href={"/Details/?id="+s._id} >
             <Card className={classes.root}>
      <CardContent>
      
        <Typography variant="h3" component="h2">
        {s.topic}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        By:{s.name}
        </Typography>
        <Typography variant="body2" component="p">
        {s.message.substring(0,30)} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </Link>
    </> ))}
    </>:<>Loading</>}
            </div>
            </div>
            </div>
             
             </section>  

             <br/><br/><br/><br/>
             <Footer />   
        </div>
    )
}

export default Blog
