import React from 'react'
import '../pages/pages.css'
import { useFormik } from 'formik';
import { validation } from '../pages/ContactFormValidation';

const Contact = () => {

const initialValues = {
    message: '',
    name: '',
    email: '',
    password: ''
}

const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validation,
    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm()
    }
})


  return (
    <>
      <section className='contact_section'>
        <div className='contact container'>
            <div className='img_box'>
                <img src="images/contact-img011.jpg" alt="Tacos and Drink" title="we love Taco"/>
            </div>
            <div className='contact-form'>
              <h2 className='sub-heading'>Our Contact Form</h2>
              <div className='formbody'>
                <form method='post' onSubmit={formik.handleSubmit}>
                    
                    <div className='form-div'>
                        <label htmlFor="message">Message</label> <br />
                        <textarea type="message" name='message' id='message'  onChange={formik.handleChange}
                            value={formik.values.message} />
                        {formik.touched.message && formik.errors.message ? (
                            <div className='error_text'>{formik.errors.message}</div>
                            ) : null}
                    </div>

                    <div className='form-div'>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name='name' id='name'  onChange={formik.handleChange}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (
                            <div className='error_text'>{formik.errors.name}</div>
                            ) : null}
                    </div>

                    <div className='form-div'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" name='email' id='email'  onChange={formik.handleChange}
                            value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ? (
                            <div className='error_text'>{formik.errors.email}</div>
                            ) : null}
                    </div>

                    <div className='form-div'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name='password' id='password'  onChange={formik.handleChange}
                            value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? (
                            <div className='error_text'>{formik.errors.password}</div>
                            ) : null}
                    </div>

                    
                    <div className='comBtn'>
                        <button type="submit" id='btn'>Submit</button>
                    </div>
                   
                </form>
              </div>                    
            </div>
        </div>
      </section>
    
    </>
  )
}

export default Contact