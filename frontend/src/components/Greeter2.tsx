import React, { useContext, useEffect, useState } from 'react';
import { GreeterContext } from "./../hardhat/SymfoniContext";
import { Button } from 'react-bulma-components';


interface Props { }

export const Greeter2: React.FC<Props> = () => {
    const greeter = useContext(GreeterContext)
    const [message, setMessage] = useState("");
    const [inputGreeting, setInputGreeting] = useState("");
    useEffect(() => {
      const doAsync = async () => {
        if (!greeter.instance) return
        console.log("Greeter is deployed at ", greeter.instance.address)
        setMessage(await greeter.instance.greet())
      };
      doAsync();
    }, [greeter])

    return (
      <div>
        <p>{message}</p>
      </div>
    )
}
