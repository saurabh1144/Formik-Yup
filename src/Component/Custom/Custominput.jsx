
import { useField } from 'formik'
import React from 'react'

const Custominput = ({label,...props}) => {
    const[field,meta]=useField(props);
    console.log(meta)
    
  return (
    <div>
    <label>{label}</label>
    <input {...field} {...props}
    className={meta.touched && meta.error ?'input-error':''} />

    {meta.error && meta.touched &&<p className='para'>{meta.error}</p>}

      
    </div>
  )
}

export default Custominput
