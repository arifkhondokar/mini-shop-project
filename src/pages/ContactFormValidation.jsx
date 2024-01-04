import * as Yup from 'yup';

    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"


export const validation = Yup.object({
    message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .min(5, 'Must be 5 characters or above')
        .required('Please enter your Message'),

    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, 'Must be 5 characters or above')
        .required('Please enter your name'),
      
    email: Yup.string()
        .matches(emailRegex, "Invalid email address")
        .required('Please enter your email'),

    password: Yup.string()
        .matches(passwordRegex, "Password must minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        .required('Password must Required'),

  })