import { AlertTitle, Button } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"


export const Register = () => {
    let [data, setdata] = useState(null)


    const handle = (e) => {
        setdata({ ...data, [e.target.placeholder]: e.target.value })
    }


    const adduser = () => {
        axios.post("https://witty-waistcoat-clam.cyclic.app/users/register", data)
            .then((res) => { alert("user addedd successfully") })
            .catch((err) => { alert("error while adding user") })
    }

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); adduser() }}>
                <input placeholder="name" onChange={handle}></input>
                <input placeholder="email" onChange={handle}></input>
                <input placeholder="gender" onChange={handle}></input>
                <input placeholder="password" onChange={handle}></input>
                <input placeholder="age" onChange={handle}></input>
                <input placeholder="city" onChange={handle}></input>
                <input placeholder="is_married" onChange={handle}></input>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

