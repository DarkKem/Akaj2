import axios from 'axios'

const createUser = async (avatarQuery) => {
    if (avatarQuery === "") {
        return {}
    }
    return await axios.get(`http://dalleurl?avatarQuery=${avatarQuery}`)
}


export {createUser}