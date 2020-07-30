import React from "react";

function FormField({tag,label, name, type, value, onChange}){
  return(
    <div>
      <label>
         {label}
         {tag === "textarea" ? <textarea 
         type={type} 
         name={name} 
         value={value}
         onChange={onChange}
         >
         </textarea> 
         :
         <input 
         name={name}
         type={type}
         value={value}
         onChange={onChange}
         /> 
        }
    
      </label>
  </div>
  )
}


export default FormField;