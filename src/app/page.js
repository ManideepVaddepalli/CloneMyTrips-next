"use client"
import React from "react";
import "./globals.css"
import { useEffect } from "react";
import Userinfo from "@/components/Userinfo";
import { useAuthContext } from "@/context/useAuthContext";
import Header from "@/components/Header";
import Link from "next/link";
//react-device-detect lib
import { browserName } from "react-device-detect";


export default function Page() {
  //checking if the app opened in instagram
  const {user}=useAuthContext()
  useEffect(()=>{
    const linkelem = document.getElementById("clicklink")
    if(linkelem){
      linkelem.click()
    }
  },[])
  if (!browserName.includes("instagram") || !browserName.includes("Instagram")){
  return(<div className="homepage-container">
    <Header></Header>
    <div className="main-content-container">
      <h4>This is the Homepage</h4>
      {user&&<div className="user-details-container">
        <div className="user-card-container">
          <h4>User Details</h4>
        <h5>Given Name: <span>{user.given_name}</span></h5>
        <h5>Family Name: <span>{user.family_name}</span></h5>
        <h5>Email: <span>{user.email}</span></h5>
      </div>
      </div>}
      {!user&&
      <div className="unlog-userdetails">
        <p>You must <Link href="./login">Login</Link> to see user details.</p>
      </div>
      }
    </div>
  </div>)
  }
  const linkvar=""
    return(<><Header></Header><div className="insta-container"> 
      <p>This app cant be displayed in instagram</p>
      <h6>Click on below button</h6>
      <a id="clicklink" href={linkvar} target="_blank" download>Open in browser</a>
      </div></>)
  
  }


  