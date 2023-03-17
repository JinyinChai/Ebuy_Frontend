import styled from "styled-components";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ArrowBack} from '@material-ui/icons';
import {useNavigate} from "react-router";
import {publicRequest} from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url("https://img.freepik.com/premium-photo/top-view-desk-concept-with-copy-space_23-2148459757.jpg?w=1800") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
 width: 30%;
 padding: 20px;
 background-color: white;
`

const Title = styled.h1`
 margin-left: 30px;
 font-size: 24px;
 font-weight: 300;
`

const Form = styled.form`
 display: flex;
 flex-direction: column;
`


const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0px;
 padding: 10px;
`

const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 background-color: teal;
 color: white;
 cursor: pointer;
 margin-bottom: 10px;
 margin-top: 15px;
 &:disabled {
   color: green;
   cursor: not-allowed;
 }
`

const InputDiv = styled.div`
   display: flex;
 flex-direction: column;
 margin-top: 5px;
`

const Div1 = styled.div`
   display: flex;
`

const SizeForm = styled.form`
   padding-top: 10px;
`

const SizeInput = styled.input`
  
`

const SizeLabel = styled.label`
   padding-left: 10px;
`
const SizeDiv = styled.span`
   display: flex;
`

const SizeP = styled.p`
   padding-bottom: 5px;
`


const AddProduct = () => {

    const [user, setUser] = useState(useSelector((state) => state.user.currentUser));
    const dispatch = useDispatch();
    const goBack = useNavigate();
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [img, setImg] = useState(null);
    const [price, setPrice] = useState(null);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);

    const handleInputChange = (e) => {
        const{id, value} = e.target;
        if(id === "title"){
            setTitle(value);
        } else if (id === "desc"){
            setDesc(value);
        } else if (id === "img"){
            setImg(value);
        } else if (id === "price"){
            setPrice(value);
        }
    }

    const handleSizeChange = (e) => {
        const isChecked = e.target.checked;
        if (isChecked){
            setSize([...size, e.target.value]);
        } else {
            const index = size.indexOf(e.target.value);
            size.splice(index, 1);
            setSize(size);
        }
    }

    const handleColorChange = (e) => {
        const isChecked = e.target.checked;
        if (isChecked){
            setColor([...color, e.target.value]);
        } else {
            const index = color.indexOf(e.target.value);
            color.splice(index, 1);
            setColor(color);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post("/products/newProduct", {
                seller: user._id,
                title: title,
                desc: desc,
                img: img,
                price: price,
                size: size,
                color: color,
            });
        } catch (err) {
            console.log(err);
        }
        // goBack(-1);
    }



    return (
        <Container>
            <Wrapper>
                <Div1>
                    <ArrowBack onClick={() => goBack(-1)}/>
                    <Title>Add Product: {user.firstname} {user.lastname}</Title>
                </Div1>

                <Form>
                    <InputDiv>
                        <Input placeholder="Product Title" id="title" onChange= {(e) => handleInputChange(e)}/>
                    </InputDiv>
                    <InputDiv>
                        <Input placeholder="Description" id="desc" onChange= {(e) => handleInputChange(e)}/>
                    </InputDiv>
                    <InputDiv>
                        <Input placeholder="Image Url" id="img" onChange= {(e) => handleInputChange(e)}/>
                    </InputDiv>

                    <SizeForm>
                        <SizeP>Select Sizes</SizeP>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="64G" value="64G" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size1" for="64G">64G</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="128G" value="128G" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size2" for="128G">128G</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="256G" value="256G" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size3" for="256G">256G</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="512G" value="512G" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size4" for="512G">512G</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="1T" value="1T" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size5" for="1T">1T</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="size" id="2T" value="2T" onChange= {(e) => handleSizeChange(e)}/>
                            <SizeLabel htmlFor="size6" for="2T">2T</SizeLabel>
                        </SizeDiv>
                    </SizeForm>

                    <SizeForm>
                        <SizeP>Select Colors</SizeP>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="white" value="white" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color1" for="white">white</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="black" value="black" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color2" for="black">black</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="grey" value="grey" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color3" for="grey">grey</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="silver" value="silver" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color4" for="silver">silver</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="gold" value="gold" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color5" for="gold">gold</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="purple" value="purple" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color6" for="purple">purple</SizeLabel>
                        </SizeDiv>
                        <SizeDiv>
                            <SizeInput type="checkbox" name="color" id="pink" value="pink" onChange= {(e) => handleColorChange(e)}/>
                            <SizeLabel htmlFor="color7" for="pink">pink</SizeLabel>
                        </SizeDiv>

                    </SizeForm>
                    <InputDiv>
                        <Input placeholder="price" id="price" onChange= {(e) => handleInputChange(e)}/>
                    </InputDiv>

                    <Button onClick={handleSubmit}>Add</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default AddProduct