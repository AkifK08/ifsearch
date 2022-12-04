import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from 'react-speech';
import { FaMicrophone,FaArrowAltCircleRight } from "react-icons/fa";
const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [text,setText]=React.useState("");
  const [list,setList]=React.useState([{
    text:"Welcome to iField Search Engine",
    id:0,
    type:false
  }]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        height: 700,
        width: 450,
        backgroundColor: "ButtonShadow",
        borderRadius: 10,
    }}>
        <h1 style={{
            fontFamily:"monospace",
            display: 'flex',
            backgroundColor: "white",
            justifyContent:"center",
            alignItems: "center",
            width: 400,
            height: 50,
            borderRadius: 10,
            color:"#f79a28"
        }}>
            iField Search
        </h1>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 500,
            width: 400,
            backgroundColor: "white",
            borderRadius: 10,
            overflowY: "scroll",
        }}>
            {
                list.map((item)=>{
                    return(
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: !item.type?"flex-start":"flex-end",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: !item.type?"whitesmoke":"#f79a28",
                            borderRadius: 10,
                            margin: 10,
                            paddingInline:10,
                            color:!item.type?"#f79a28":"white",
                            fontSize: 16,
                            fontFamily:"monospace",
                            fontWeight:"bold"
                        }}>
                            {item.text}
                        </div>
                    )
                })
            }
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-evenly",
            height: 50,
            width: 400,
            backgroundColor: "white",
            borderRadius: 10,
            overflowY: "scroll",
        }}>
            <input
            value={text}
            onChange={(e)=>{
                setText(e.target.value)}}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 45,
                width: 280,
                backgroundColor:"whitesmoke",
                borderRadius: 10,
                border: "none",
                outline: "none",
                fontFamily:"monospace",
                fontSize: 18,

            }}
            placeholder={transcript}
            />
            <button 
            style={{
                border: "none",
                backgroundColor: "#f79a28",
                height: 45,
                width: 55,
                borderRadius: 10,
                outline: "none",
            }}
            onClick={SpeechRecognition.startListening}>
                <FaMicrophone size={23} color={"white"}/>
            </button>
            <button 
            style={{
                color: "white",
                fontFamily:"monospace",
                fontSize: 16,
                border: "none",
                backgroundColor: "#f79a28",
                height: 45,
                width: 55,
                borderRadius: 10,
                outline: "none",
            }}
            onClick={()=>{
                var d={}
                d.text=transcript?transcript:text;
                d.id=list.length+1;
                d.type=true;
                setList([...list,d])
                setText("")
            }}>
                Send
                {/* <FaArrowAltCircleRight size={25}/> */}
            </button>
        </div>
    </div>
  );
};
export default Dictaphone;
