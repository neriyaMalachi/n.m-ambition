import axios from "axios"

export const sendContactForm = async (data) => {
    
    await axios.post("/api/contact", data)
    
}