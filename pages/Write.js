import React from 'react'
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function Write() {
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
              <TextField id="standard-basic" label="Title" />
<br/>
<TextField id="standard-basic" label="Name" />
<br/><br/>
<textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="4"
                    
                    placeholder="Description"
                  ></textarea>

              <br/><br/>
        



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
