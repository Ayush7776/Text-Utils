import React, { useState } from 'react'
export default function Textarea(props) {

    const Upconvert = () => {
        // console.info("Hello World!"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To UpperCase..!","info");
    }
    const lowconvert = () => {
        // console.info("Hello World!"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To LowerCase..!","info");
    }
    const sencase = () => {
        let firstchar = text.charAt(0);
        let capitalfirst = firstchar.toUpperCase()
        let allnext = text.toLowerCase()
        setText(capitalfirst + allnext.slice(1))
        props.showAlert("Converted To Sentance Case..!","info");
    }
    const capitaleachcase = () => {
        const words = text.split(" ");
        
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
        
        let newtext=words.join(" ");
        setText(newtext)
        props.showAlert("Converted To Capitalize..!","info");


    }
    const cleartext = () => {
        setText("");
        props.showAlert("Text Has Been Clear..!","info");
    }

    const changetext = (event) => {
        // console.info("On Change Work")
        setText(event.target.value)
    }
    const [text, setText] = useState('Start Writing From Here..!')
    // text="New Statement" That Is Wrong Way In React
    // text=("New Statement"); That Is Correct Way In React
    return (
        <>
            <div className="form-floating " style={props.style}>
                <textarea style={props.style}className="form-control " placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={changetext}></textarea>
                
                <label htmlFor="floatingTextarea2" >Comments</label>
                <button className="btn btn-primary my-3" onClick={Upconvert}>Convert To UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-3" onClick={lowconvert}>Convert To lowerCase</button>
                <button className="btn btn-primary my-3 " onClick={sencase}>Convert To Sentancecase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={capitaleachcase}>Convert To Capital Each Word</button>
                <button className="btn btn-danger my-3" onClick={cleartext}>Clear Text</button>
            </div>
            <div  className="d-flex flex-column flex-md-row gap-4 py-md-5 align-items-center justify-content-center">
                <div className="list-group" >
                    <a href='/' style={props.style} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">{text.split(" ").length} Words And {text.length} Characters</h6>
                                <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                            </div>
                        </div>
                    </a>
                    <a href='/' style={props.style} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GYskUFyQkUifKmXzzCCYbmWwFIwMr6peng&usqp=CAU" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Reading Time : </h6>
                                <p className="mb-0 opacity-75">{text.split(" ").length / 1.6.toFixed(0)} Seconds</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>


    )
}
