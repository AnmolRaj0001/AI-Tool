import React, { useContext } from 'react'
import './Main.css'

const Main = () => {
    
    const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

    
  return (
    <div className="main">
        <div className="nav">
            <p>Anmol AI</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

            {!showResult ? 
                <>
                    <div className="greet">
                        <p><span>Hey! Anmol</span></p>
                        <p>How can i help you</p>
                    </div>
                    <div className="cards">
                    <div className="card">
                        <p> Suggest a beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> Brifly summerize this concept : OOPS Programming</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> Improve the readabliy of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    </div>
                    </>
                : 
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>

                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>

                </div>        
                


            }
            

            <div className="cards">

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='write to search' />
                       <div> 
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemini is a conversational interface that helps you find the information you need to make decisions.
                </p>
                </div>
                
            </div>
        </div>
    </div>
   
  )
}
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
export default Main
