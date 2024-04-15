import React, { useState, useEffect, useRef } from 'react'
import axios from "../axios/Axios"
import "./TextArea.css"
import stubs from '../stubs/stubs';

function TextArea({ setoutPut, userInput }) {

    const [usercode, setcode] = useState('');
    const [userLang, setLang] = useState("cpp");

    let interval = useRef();


    useEffect(() => {
        setcode(stubs[userLang]);
    }, [userLang])
    function handleChange(e) {


        const codeToSet = e.target.value;
        setcode(codeToSet);
        //console.log(Usercode);


    }


    async function handleClick() {




        try {
            const response = await axios({
                method: 'post',
                url: '/run',
                data: {
                    language: userLang,
                    code: usercode,
                    input: userInput
                }
            });


            const output = response.data
            //console.log(output)

            if (output?.jobId) {


                interval = setInterval(async () => {


                    const { data: dataRes } = await axios.get("/status", { params: { id: output.jobId } })


                    if (dataRes?.status === "success") {


                        setoutPut(dataRes?.output)

                        const { data: isDeleted } = await axios.get("/delete", { params: { id: output.jobId } })
                        console.log(isDeleted)
                        if (isDeleted?.status === "deleted") {
                            console.log("deleted");
                        }

                        clearInterval(interval);
                    }
                    else if (dataRes?.status === "pending") {
                        setoutPut("Pendding");
                    }
                    else if (dataRes?.status === "error") {
                        console.log(dataRes?.output);
                        setoutPut(dataRes?.output);
                        clearInterval(interval);
                    }











                }, 1000)
            }


        } catch (error) {

            console.error('AxiosError:', error);
        }
    }

    function handleSelect(e) {
        const lang = e.target.value;
        let response = window.confirm("WARNING: Switching the language, will remove your code")
        if (response) {
            setLang(lang);
        }
        //console.log(lang);
    }

    return (
        <div className="codeBox">
            <div className="head">
                <h3>Online Code Compiler</h3>

                <select onChange={handleSelect} className='options' name="language" defaultValue={"cpp"} id="cars">
                    <option value="cpp">c++</option>
                    <option value="py">python</option>
                    <option value="js">javaScript</option>
                    <option value="java">java</option>
                </select>
            </div>
            <textarea className='usercode' name='Mycode' onChange={handleChange} value={usercode}></textarea>
            <br />
            <button onClick={handleClick}>submit</button>

        </div>
    )
}

export default TextArea