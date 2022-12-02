import baseApiUrl from "../../../config/baseApiUrl"
import axios from "axios"

const getAllBoss = async () => {
    return await axios.get(`${baseApiUrl}/boss`)
}
export {getAllBoss}