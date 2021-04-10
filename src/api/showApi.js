import axios from "axios";

export default axios.create({
    baseURL: "http://4d76fc4cf02b.ngrok.io",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InNlbmhhMTIzNCIsImlhdCI6MTYxODA4NDc0MCwiZXhwIjoxNjE4MTAyNzQwfQ.0ww6-E6HOVwEDQUTWnr3NPmaCS7LYss9kDtzghh9Lr8"
    }
})