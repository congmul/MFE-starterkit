import * as React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

const App = () => {
  const [ userEmailState, setUserEmailState ] = React.useState<string>(""); 
  const [ isRememberMe, seIsRememberMe ] = React.useState<boolean>(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if(userEmail){
      setUserEmailState(userEmail)
      seIsRememberMe(true);
    }
  }, [])

  const emailOnChange = (e: any) => {
    setShow(false);
    setUserEmailState(e.target.value);
  }

  const rememberMe = (e: any) => {
    if(e.target.checked){
      localStorage.setItem("userEmail", (document.querySelector('#loginEmail') as HTMLFormElement)!.value);
      seIsRememberMe(true);
    }else{
      localStorage.removeItem("userEmail");
      seIsRememberMe(false);
    }
  }

  const onClickLogin = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(!regex.test(userEmailState!)){
      setShow(true);
    }
  }

  return(
    <div className="login-wrapper">
      <div className="login-form">
        <div className="title">Module Federation<br /> React Starter Kit</div>
        <Form >
          <Form.Group className="mb-1" controlId="loginEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={emailOnChange} value={userEmailState || ""} />
            {show ? <Alert key={'danger'} variant={'danger'}>
                Provide a valid email.
            </Alert> : <></>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginCheckbox">
            <Form.Check type="checkbox" label="Remember me" checked={isRememberMe} onChange={rememberMe} />
          </Form.Group>
          <Button variant="primary" className="ml-3 login-btn" onClick={onClickLogin} >
            Login
          </Button>
          <Button variant="primary" className="start-btn" >
            <a href="/home" style={{"color":"white"}}>Start without Login</a>
          </Button>
        </Form>
      </div>
      <div className="mf-logo-bg"></div>
    </div>
  )}

export default App;