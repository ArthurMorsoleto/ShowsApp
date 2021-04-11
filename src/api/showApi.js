import axios from "axios";

export default axios.create({
    baseURL: "http://15ed2e7f40db.ngrok.io",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InNlbmhhMTIzNCIsImlhdCI6MTYxODE2NDA5MywiZXhwIjoxNjE4MTgyMDkzfQ.F3hDLgBXLMMaEfbJuEJOlLjyLOsPRj2O5538gfK92OI"
    }
})