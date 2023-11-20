import axios from "axios"

export const sendContactForm = async (data) => {
    const res = await axios.post("/api/contact", data)
    
}