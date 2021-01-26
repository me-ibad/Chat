import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Index() {
  return (
    <>
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
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue="Hello There"
                  />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <Button variant="contained" href="/Chat" color="primary">
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
    </>
  );
}
