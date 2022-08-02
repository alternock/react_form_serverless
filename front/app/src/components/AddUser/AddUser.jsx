import { useState } from "react";
import axios from "axios";
import { Button, Input, VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';


export default function AddUser() {
    let profileState = { email: "", name: "" };
    let [profile, setProfile] = useState(profileState);


    const handlerChange = evt => {
        let { value, name } = evt.target;
        setProfile({
            ...profile,
            [name]: value
        });
    }

    const fnAdd = async () => {
        try {
            await axios.post("http://localhost:8888/add_user", profile);
        } catch (err) {
            console.log("err ", err);
        }
    }

    let { email, name } = profile;
    return (
        <VStack>
            <h3>add user</h3>
            <div>
                <label>email</label>
                <Input
                    placeholder='alias@domain.com'
                    size='md'
                    name="email"
                    value={email}
                    onChange={handlerChange} /> 
            </div>
            <div>
                <label>name</label>
                <Input
                    placeholder='add name'
                    size='md'
                    name="name"
                    value={name}
                    onChange={handlerChange} />
            </div>
            <div>
                <Button
                    leftIcon={<EmailIcon />}
                    colorScheme='purple'
                    onClick={fnAdd} >add user</Button>
            </div>
        </VStack>
    )
}