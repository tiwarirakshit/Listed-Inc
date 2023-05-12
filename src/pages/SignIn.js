import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';


const SignIn = () => {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "64rem",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "1rem",
        color: "#000",
        fontFamily: "Montserrat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0rem",
          left: "36.75rem",
          backgroundColor: "#f5f5f5",
          width: "53.25rem",
          height: "64rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0rem",
          left: "0rem",
          backgroundColor: "#000",
          width: "36.75rem",
          height: "64rem",
        }}
      />
      <Form.Group
        style={{
          border: "none",
          backgroundColor: "transparent",
          position: "absolute",
          top: "28.5rem",
          left: "13.44rem",
        }}
      >
        <span style={{color:'white', fontSize:72,fontWeight:'bold'}}>Board.</span>
      </Form.Group>
      <div
        style={{
          position: "absolute",
          top: "25.56rem",
          left: "52rem",
          width: "24.06rem",
          height: "22.25rem",
          fontFamily: "Lato",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0rem",
            left: "0rem",
            width: "24.06rem",
            height: "19.81rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          />
        </div>
        <Form.Group
          style={{
            width: "20.31rem",
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            top: "3.69rem",
            left: "1.88rem",
          }}
        >
          <Form.Control type="text" placeholder="john@gmail.com" />
        </Form.Group>
        <Form.Group
          style={{
            width: "84.42%",
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            height: "11.24%",
            top: "41.57%",
            right: "7.79%",
            bottom: "47.19%",
            left: "7.79%",
          }}
        >
          <Form.Control type="text" placeholder="*******" />
        </Form.Group>

        <div
          style={{
            position: "absolute",
            height: "5.34%",
            width: "0.26%",
            top: "44.52%",
            right: "68.7%",
            bottom: "50.14%",
            left: "31.04%",
            borderRight: "1px solid #999",
            boxSizing: "border-box",
          }}
        />
        <Button
          style={{
            width: "20.31rem",
            position: "absolute",
            top: "15.44rem",
            left: "1.88rem",
            backgroundColor:'black',
            borderColor:'black'
          }}
          variant="primary"
        >
          Sign In
        </Button>
        <div style={{ position: "absolute", top: "1.88rem", left: "1.88rem" }}>
          Email address
        </div>
        <div style={{ position: "absolute", top: "7.44rem", left: "1.88rem" }}>
          Password
        </div>
        <div
          style={{
            position: "absolute",
            top: "13rem",
            left: "1.94rem",
            color: "#346bd4",
          }}
        >
          Forgot password?
        </div>
        <div
          style={{
            position: "absolute",
            top: "21.06rem",
            left: "3.88rem",
            textAlign: "center",
            color: "#858585",
          }}
        >
          <span>{`Don’t have an account? `}</span>
          <span style={{ color: "#346bd4" }}>Register here</span>
        </div>
      </div>
      <a
        style={{
          textDecoration: "none",
          position: "absolute",
          top: "22.13rem",
          left: "52rem",
          width: "11.25rem",
          height: "1.88rem",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#858585",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0rem",
            left: "0rem",
            width: "11.25rem",
            height: "1.88rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          />
        </div>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/> 

      </a>
      <div
        style={{
          position: "absolute",
          top: "22.13rem",
          left: "64.81rem",
          width: "11.25rem",
          height: "1.88rem",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#858585",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0rem",
            left: "0rem",
            width: "11.25rem",
            height: "1.88rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          />
        </div>
        <div style={{ position: "absolute", top: "0.5rem", left: "2.88rem" }}>
          Sign in with Apple
        </div>
        <img
          style={{
            position: "absolute",
            top: "0.44rem",
            left: "1.5rem",
            width: "0.72rem",
            height: "0.88rem",
            overflow: "hidden",
          }}
          alt=""
          src="/Vector.svg"
        />
      </div>
      <b
        style={{
          position: "absolute",
          top: "16.25rem",
          left: "52rem",
          fontSize: "2.25rem",
        }}
      >
        Sign In
      </b>
      <div
        style={{
          position: "absolute",
          top: "19.31rem",
          left: "52rem",
          fontFamily: "Lato",
        }}
      >
        Sign in to your account
      </div>
    </div>
  );
};

export default SignIn;
