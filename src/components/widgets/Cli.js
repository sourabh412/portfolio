import React, { useEffect, useState, useRef } from 'react';
import cli_text from "../utils/cli_text";

function Cli(props) {
    const [cliTextVal, setcliTextVal] = useState('');
    
    useEffect(() => {
        
        let currentIndex = 0;

        const cli_print = document.getElementById("cli_print");
        
        const interval = setInterval(() => {
            if (currentIndex < cli_text.length - 1) {
                setcliTextVal(prevValue => prevValue + cli_text[currentIndex]);
                console.log(cli_text[currentIndex]);
                cli_print.scrollTop = cli_print.scrollHeight;
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    props.setmainDisplay(true);
                }, 1000);
            }
        }, 0);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <div id="cli_frame">
                <div id="cli">
                    <textarea wrap='soft' disabled id="cli_print" value={cliTextVal}></textarea>
                </div>
            </div>
        </>
    );
}

export default Cli