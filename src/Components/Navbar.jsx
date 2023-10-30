import { Flex } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const Navbar = () => { 

    return (
        <Flex gap={"50px"}>
            <Link to={"/"}>Home</Link>
            <Link to={"/signup"}>SignUp</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/posts"}>Posts</Link>
        </Flex>
    )
}