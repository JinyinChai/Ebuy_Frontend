import styled from "styled-components";
import {useState} from "react";
import {publicRequest} from "../requestMethods";
import {login} from "../redux/apiCalls";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {ArrowBack} from "@material-ui/icons";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.5)), 
    url("https://idme-marketplace.s3.amazonaws.com/fSS8xEHDwMeNWobb1v8dbBad") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
 `

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 20px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:disabled {
      color: green;
      cursor: not-allowed;
    }
`

const Div1 = styled.div`
    display: flex;
`

const Register = () => {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "firstname") {
            setFirstname(value);
        } else if (id === "lastname") {
            setLastname(value);
        } else if (id === "username") {
            setUsername(value);
        } else if (id === "email") {
            setEmail(value);
        } else if (id === "password") {
            setPassword(value);
        } else if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post("/auth/register", {

                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                email: email,
                confirmPassword: confirmPassword,
            });
        } catch (err) {
            console.log(err);
        }
        await login(dispatch, {username, password});
    }

    const goBack = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Div1>
                    <ArrowBack style={{cursor: "pointer"}} onClick={() => goBack(-1)}/>
                    <Title>CREATE AN ACCOUNT</Title>
                </Div1>
                <Form>
                    <Input placeholder="first name" id="firstname" onChange={(e) => handleInputChange(e)}/>
                    <Input placeholder="last name" id="lastname" onChange={(e) => handleInputChange(e)}/>
                    <Input placeholder="username" id="username" onChange={(e) => handleInputChange(e)}/>
                    <Input placeholder="email" id="email" onChange={(e) => handleInputChange(e)}/>
                    <Input placeholder="password" type="password" id="password" onChange={(e) => handleInputChange(e)}/>
                    <Input placeholder="confirm password" type="password" id="confirmPassword"
                           onChange={(e) => handleInputChange(e)}/>

                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with
                        the <b>PRIVACY POLICY</b>
                    </Agreement>
                    {/*disabled={isFetching}*/}
                    <Button onClick={handleSubmit}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )

}

export default Register


