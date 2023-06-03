
import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { MDBInput } from 'mdb-react-ui-kit';
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const navigate  = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),

  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {

        const data = await res.json();
        console.log(data);
        if(data.role === 'admin'){
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/managecure');
        }else{
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/predict');
        }
        Swal.fire({
          icon: "success",
          title: "success",
          text: "welcome to plantdoc"
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "error",
          text: "invalid email or password"
        })
      }

    },
    validationSchema: loginSchema,
  });

  return (
    <section className="full-page" style={{minHeight: '100vh', backgroundImage: `url('https://i.pinimg.com/736x/75/0e/7c/750e7c4802e721a57df39389f1555d55.jpg')` }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                     
                      <h4 classNpngame="mt-1 mb-5 pb-1" style={{fontFamily:"cursive"}}>Welcome To PlantDoc</h4>
                    </div>
                    <form onSubmit={loginForm.handleSubmit}>
                      <p style={{fontFamily:"cursive"}}>Please login to your account</p>
                      <MDBInput label='Email' className="mb-4" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type='text' />
                      <MDBInput label='Password' type="password" className="mb-4" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />
                      <span className="text-danger">
                        {loginForm.errors.password}
                      </span>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          style={{backgroundColor:"green"}}
                          type="submit"
                        >
                          Log in

                        </button>
                        <a className="text-muted" href="/main/forgetpassword" style={{fontFamily:"cursive"}}>
                          <h5 style={{color:"blue"}}>
                          Forgot password?
                          </h5>
                          
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-column pb-4" >
                        <hr className="bg-dark w-25 me-3" />
                        <p className="mb-0 me-2"style={{fontFamily:"cursive"}} >Don't have an account?</p>
                        <a className="text-muted me-3"
                          role="button"
                          href="/main/signup">
                          <button type="button" className="btn btn-outline-danger">
                            Create new
                          </button>
                        </a>


                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{backgroundColor:"   rgba(50, 129, 50, 0.312)  "}} >
                  <div className="px-3 py-4 p-md-5" style={{backgroundImage: `url('https://www.thespruce.com/thmb/69vDOccSgF4zzQm0l3uIuH-j2bg=/2066x1452/filters:fill(auto,1)/Strawberryplant-GettyImages-123533002-5b198b33eb97de0036be58ae-d5982c5730984563a32598ee2a96fe3e.jpg')`, height: '100%', backgroundSize: 'cover'}}>

                    <h2 className="mb-4" style={{color:"white" ,fontFamily:"sans-serif"}}>PlantDoc</h2>
                    <p className="small mb-0" style={{color:"white"}}>
                     <h4 style={{fontFamily:"cursive"}}>
                     <i>
                     A secret to healthy plants!!..
                     </i>
                     </h4>
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;