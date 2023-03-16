import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`

const SearchNoMatch = () => {
    return (
        <Container>
            <Navbar/>
            <Title>No results found.</Title>
            <Footer/>
        </Container>
    )
}

export default SearchNoMatch