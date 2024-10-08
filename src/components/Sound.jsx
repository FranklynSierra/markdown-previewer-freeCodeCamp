import React, { useEffect } from 'react'
import { useThemeContext } from '../context/ThemeContext';
 

export default function Sound({play,sound:{key,id,url,keyCode}}) {

  
    useEffect(() => {
    
        document.addEventListener('keydown',detectKeyDown,true)
      }, []);
    
      const {setContextTheme} = useThemeContext()
    
      console.log(setContextTheme)
      const detectKeyDown=(e)=>{
      
        if(e.keyCode===keyCode){
         play(key)
         setContextTheme(id)
        }
          
      }
      const handleKey=()=>{
        play(key)
        setContextTheme(id)
      }
    return (
        <button id={keyCode} onClick={()=>handleKey()} className='drum-pad'>
        <audio className='clip' id={key} src={url}/>
        {key}
      </button>
  )
}
