import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FaMicrophone, FaArrowAltCircleRight } from "react-icons/fa";
const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const [text, setText] = React.useState("");
    const { speak } = useSpeechSynthesis();
    const [list, setList] = React.useState([{
        text: "Welcome to iField Search Engine",
        id: 0,
        type: false,
        show: true,
        value: [
            {
                id: 0,
                text: "RFI",
            },
            {
                id: 1,
                text: "REVIT",
            },
            {
                id: 2,
                text: "Drawing",
            }
        ]
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
                fontFamily: "monospace",
                display: 'flex',
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: 400,
                height: 50,
                borderRadius: 10,
                color: "#f79a28"
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
                    list.map((item) => {
                        return (
                            <>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignSelf: !item.type ? "flex-start" : "flex-end",
                                    justifyContent: 'center',
                                    backgroundColor: !item.type ? "whitesmoke" : "#f79a28",
                                    borderRadius: 10,
                                    margin: 10,
                                    paddingInline: 15,
                                    paddingBlock: 10,
                                    color: !item.type ? "#f79a28" : "white",
                                    fontSize: 16,
                                    fontFamily: "monospace",
                                    fontWeight: "bold"
                                }}>
                                    {item.text}
                                </div>
                                <div style={{
                                    alignSelf: "flex-start",
                                    marginLeft:10
                                }}>
                                    {
                                        item.show ?
                                            item.value.map((item) => {
                                                return (
                                                    <button style={{
                                                        // display: 'flex',
                                                        // flexDirection: 'row',
                                                        alignSelf: "center",
                                                        justifyContent: 'center',
                                                        height: 25,
                                                        backgroundColor: "#f79a28",
                                                        alignItems: 'center',
                                                        borderRadius: 8,
                                                        margin: 5,
                                                        paddingInline: 10,
                                                        color: "white",
                                                        fontSize: 16,
                                                        fontFamily: "monospace",
                                                        fontWeight: "bold",
                                                        border: "none"
                                                    }}
                                                        onClick={() => {
                                                            var d = {
                                                                text: item.text,
                                                                id: list.length + 1,
                                                                type: true,
                                                                show: false,
                                                                value: []
                                                            }
                                                            setList([...list, d])
                                                        }}
                                                    >
                                                        {item.text}
                                                    </button>
                                                )
                                            }) : null
                                    }
                                </div>
                            </>
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
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 45,
                        width: 280,
                        backgroundColor: "whitesmoke",
                        borderRadius: 10,
                        border: "none",
                        outline: "none",
                        fontFamily: "monospace",
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
                    <FaMicrophone size={23} color={"white"} />
                </button>
                <button
                    style={{
                        color: "white",
                        fontFamily: "monospace",
                        fontSize: 16,
                        border: "none",
                        backgroundColor: "#f79a28",
                        height: 45,
                        width: 55,
                        borderRadius: 10,
                        outline: "none",
                    }}
                    onClick={() => {
                        var d = {}
                        d.text = transcript ? transcript : text;
                        d.id = list.length + 1;
                        d.type = true;
                        setList([...list, d])
                        setText("")
                    }}>
                    Send
                </button>
            </div>
        </div>
    );
};
export default Dictaphone;
