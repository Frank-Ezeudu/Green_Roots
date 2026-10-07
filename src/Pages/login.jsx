import React from "react";
import { useState } from "react";


cont Login = () => {
    const [email, setEmail] = useState ("");
        const [password, setPaasword] = useState ("");
            const [loading, setLoading] = useState ("")
}

const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert("Error, Please input email and password")
    }
    return;

    try {
        setLoading(true);
    }
    const response = await fetch ("BASE_URL/api/auth/login")
    {
        method: "POST"
        headers: {
            "content-Type" 
            "application.json"
        }
    }
}