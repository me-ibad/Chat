import React from 'react'
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
function Details() {
    return (
        <div>
         <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-4/5 max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12  ">
            <div className=" ">
             <br/><br/><br/>
             <h1 className="font-bold text-5xl text-gray-700">
               Title
              </h1>

              <br/><br/>
              <p className="mb-4 text-gray-600 break-words">
                        Give us your feedback so we can provide you good Services. we looking forward.
                      </p>

            </div>
            </div>
            </div>
             
             </section>  

             <br/><br/><br/><br/>
             <Footer />   
        </div>
    )
}

export default Details
