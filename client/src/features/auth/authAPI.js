const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// sign in user

export const  loginUser = async (credentials) => {
    const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'POST',
        header: {'Content-type':'application/json'},
        body:stringify(credentials),
    });
    if(!res.ok) {
        throw new Error('Login failed');
    }
    return await res.json();
}
