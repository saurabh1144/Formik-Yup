import * as yup from 'yup';

const passwordRule=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


 export const basicSchema=yup.object().shape({
    email:yup.string().email("Please enter valid email").required(),
    age:yup.number().positive().integer().required(),
    password:yup.string().min(5).max(10).matches(passwordRule,{message:"Please create a stronger password"}).required(),
    cnfpassword:yup.string().oneOf([yup.ref('password'),null],"Password must match").required(),

})

export const advancedSchema=yup.object().shape({
    name:yup.string().min(3,"username must be 3 chars long").required("Required"),
    jobType:yup.string().oneOf(['designer','developer','manager'],).required(),
    accept:yup.boolean().oneOf([true],"Please accept the trems")

})