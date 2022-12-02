const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const createUser = async (avatarQuery) => {
    const response = await openai.createImage({
        prompt: avatarQuery,
        n: 1,
        size: "256x256",
    });
    var image_url = response.data.data[0].url;

    return image_url;
}


export {createUser}