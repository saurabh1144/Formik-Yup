import { useFormik } from 'formik'
import './Form.css'
import React from 'react'
import { basicSchema } from '../Schemas/schema'

const onSubmit=(values,actions)=>{
    console.log("Submitted")
    console.log(values);
    console.log(actions);
    actions.resetForm();
}
const Form = () => {

   

    const {handleChange,errors,isSubmitting,handleBlur,values,touched,handleSubmit}=useFormik({
        initialValues:{
            email:'',
            age:'',
            password:'',
            cnfpassword:'',
        },
        validationSchema:basicSchema,
        onSubmit

    })
    console.log(errors)
    
  return (
    <div className='form'>
        <form onSubmit={handleSubmit} className='email'>
            <label>Email</label>
            <input type='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error":""}
            />
            {errors.email && touched.email && <p className='para'>{errors.email}</p>}

            <label>Age</label>
            <input type='number' id='age' value={values.age} onChange={handleChange} 
              className={errors.age && touched.age ? "input-error":""} onBlur={handleBlur}/>
              {errors.age && touched.age && <p className='para'>{errors.age}</p>}

            <label>Password</label>
            <input type='password' id='password' value={values.password} 
             className={errors.password && touched.password ? "input-error":""} onChange={handleChange} onBlur={handleBlur}/>
                 {errors.password && touched.password && <p className='para'>{errors.password}</p>}

            <label>Confirm Password</label>
            <input type='password' id='cnfpassword' value={values.cnfpassword} 
             className={errors.cnfpassword && touched.cnfpassword ? "input-error":""} onChange={handleChange} onBlur={handleBlur}/>

              {errors.cnfpassword && touched.cnfpassword && <p className='para'>{errors.cnfpassword}</p>}

            <button disabled={isSubmitting} type='submit'>Submit</button>

        </form>
        
      
    </div>
  )
}

export default Form
