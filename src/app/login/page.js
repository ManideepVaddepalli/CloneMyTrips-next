"use client"
import React from "react";
import Auth from "@/components/Auth";
import { useState,useEffect } from "react";
import { useAuthContext } from "@/context/useAuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { browserName } from "react-device-detect";


export default function Page() {
  const router=useRouter()
  const {dispatch} = useAuthContext()
  const [datavar,useDatavar]=useState("")
  useEffect(()=>{
    const linkelem = document.getElementById("clicklink")
    if(linkelem){
      linkelem.click()
    }
  },[])
  //checking if the app opened in instagram
  if (!browserName.includes("instagram") || !browserName.includes("Instagram")){
    function dataHandle(data){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDatavar(data)
      //storing used to context api to keep track
      dispatch({type:'LOGIN',payload:data})
    }
    //storing login info to local storage --- can be hashed using bcrypt if any importatnt info
    if (typeof window !== 'undefined') {
      localStorage.setItem("user",JSON.stringify(datavar))
  }
    //if user logged pusing to homepage
    if(datavar){
        router.push("/")
    }
    return (<div className="login-page-container">
      <Header></Header>
    {!datavar&&
    <div className="login-container">
      <div className="login-card">
      <h4>Select the Account</h4>
      <Auth updateData = {dataHandle}></Auth>
      </div>
      </div>}
      </div>
    )
  }
  const linkvar="https://clone-my-trips-next-ocxixxigb-manideepvaddepallis-projects.vercel.app/login"
  return(<><Header></Header><div className="insta-container"> 
    <p>This app cant be displayed in instagram</p>
    <h6>Click on below button</h6>
    <a id="clicklink" href={linkvar} target="_blank" download>Open in browser</a>
    </div></>)

  }
  


 