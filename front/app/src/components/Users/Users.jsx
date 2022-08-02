import { useState, useEffect } from "react";
import axios from "axios";


export default function Users() {
    let [users, setUsers] = useState(["foo", "bar", "baz"]);
    let url = "http://localhost:8888/users";

    useEffect(() => {
        (async (getUsers) => {
            try {
                let {data:{payload}} = await axios.get(getUsers);
                setUsers(payload);
            } catch (err) {
                console.log("err ", err);
            }
        })(url)
    });

    return (
        <>
            <h3>users</h3>
            <ul>
                {users.map((el, k) => {
                    return (<li key={k}>{el}</li>)
                })}
            </ul>
        </>
    )
}