import React from "react"

export default function CommCard(props){
    return (
    
    <div className="w-48 h-[22rem] " style={{fontFamily:'"Poppins", arial'}}>
        <div>
        <div className="mt-8">
            <img src={props.img}></img>
        </div>
        <div className='flex flex-row justify-center text-white text-center text-lg font-semibold cursor-default'>{props.name}</div>
        <div>
            <div className='text-gray-500 flex flex-row justify-center text-center text-lg font-semibold cursor-default'>{props.company}</div>
        </div>
        </div>
        
        <a href={props.link} >
        <div className="flex justify-center items-end">
        <div className="absolute bottom-[35px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-linkedin fill-white hover:fill-blue-700 hover:scale-[1.2] duration-300" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
        </div>
        </div>
        </a>

    </div>
    );
}

