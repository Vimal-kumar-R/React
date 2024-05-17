import React,{ useState } from 'react';
//import html.image.jpeg from './Componates/html.image.jpeg'
export default function Home(){
    const[open,setOpen]=useState(false);

    const closeModal=()=>{
        setOpen(false);
    };
    const openModal=()=>{
        setOpen(true);
    };
    return(
        <>
        {open &&(
            <div className='modal'>
                <div className='modal__overlay'>
                    <div className='modal__overlay__1'/>
                    <div className='modal__overlay__2'/>
                    <div class="inner-image"></div>                    
                </div>

                <div className='modal__content'>
                    
                    <h1>Welcom to <span>VJA</span>Online Course</h1><br></br>
                    <h1><span>V-</span>Virtual Classroom</h1><br></br>
                    <h1><span>J-</span>Jigsaw Learning</h1><br></br>
                    <h1><span>A-</span>Achieve More</h1><br></br>
                    <button onClick={closeModal} className=''>Go back VJA</button><br></br>
                    </div>
                    <div className='box'>
                    
                    </div>
                </div>      
        )}
        <button onClick={openModal} className=''>Open to VJA OnlineCourse</button>
        </>
    )
}