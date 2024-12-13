import { useField } from 'formik'
import React from 'react'

const Customcheck = ({label,...props}) => {

    const [field,meta]=useField(props)
  return (
    <div>
        <input {...props} {...field}
            className={meta.error &&meta.touched?'input-error':''}
        />
        <span>Please Accept the terms and condition</span>
           {meta.error&&meta.touched&&<p className='para'>{meta.error}</p>}
    </div>
  )
}

export default Customcheck
