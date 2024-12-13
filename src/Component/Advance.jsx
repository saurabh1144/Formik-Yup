import React from 'react'
import { Field, Formik ,Form} from 'formik'
import Custominput from './Custom/Custominput';
import { advancedSchema } from '../Schemas/schema';
import Customselect from './Custom/Customselect';
import Customcheck from './Custom/Customcheck';
 
const onSubmit=(values,actions)=>{
    console.log("Form Submitted",values)
    console.log("actions",actions)
    actions.resetForm();
}

const Advance = () => {
  return (
    <>
        <Formik initialValues={{name:'',jobType:'',accept:false}} validationSchema={advancedSchema} onSubmit={onSubmit}>
            {(props)=>(
                < div className='form'>
                <Form className='email'>
                    <Custominput  label="Username"
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <Customselect label="JobType"
                      name="jobType"
                      placeholder="select job type"  
                    >
                       <option value=''>Please Select Desg</option>
                       <option value='developer'>Developer</option> 
                       <option value='manager'>Manager</option> 
                       <option value='designer'>Designer</option> 

                    </Customselect>

                    <Customcheck type="checkbox" name="accept" />

                    <button type='submit'>Submit</button>
                </Form>

                </div>

            )}



        </Formik>



    </>
   
  )
};

export default Advance
