async function postAccount(username, password, firstname, lastname, email) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    console.log(JSON.stringify({
        "username": username,
        "password": password,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
    }));
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to create a new account`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);    
    }
    return await response.json();
}

export default postAccount;