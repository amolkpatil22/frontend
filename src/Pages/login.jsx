import { AlertTitle, Button } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"


export const Login = () => {
    let [data, setdata] = useState(null)

    const handle = (e) => {
        setdata({ ...data, [e.target.placeholder]: e.target.value })
    }

    const adduser = (e) => {
        axios.post("https://witty-waistcoat-clam.cyclic.app/users/login", data)
            .then((res) => { console.log(res.data); localStorage.setItem("token", JSON.stringify(res.data.token)) })
            .catch((err) => { alert("error while login") })
    }
    console.log(data)
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); adduser() }} >
                <input placeholder="email" onChange={handle}></input>
                <input placeholder="password" onChange={handle}></input>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

