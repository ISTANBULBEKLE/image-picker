import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID ZeW8AN8dwN1oYkaNrQV73srwNia6K0Tf3kcWcgRjPAE"
    }   
});