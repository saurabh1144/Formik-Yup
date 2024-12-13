import { useField } from 'formik'
import React from 'react'

const Customselect = ({label,...props}) => {
    const[field,meta]=useField(props)
  return (
    <div>
    <label>{label}</label>
    <select {...props} {...field} 
        className={meta.error&&meta.touched ?'input-error':''}
    />

    {meta.error&&meta.touched && <p className='para'>{meta.error}</p>}

    
      
    </div>
  )
}

export default Customselect
