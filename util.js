export async function postToken(token) {
    var requestOptions = {
        method: "POST", // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
        headers: {
            Authorization: "Bearer " + token,
        }, // Assuming formData is an object, convert it to JSON string
        redirect: "follow",
    };
    try {
        const response = await fetch("https://test-minah-6b1a807102f0.herokuapp.com/user/login", requestOptions);
        const result = await response.text();

        return {
            responseCode: response.status, result: result,
        };
    } catch (error) {

        return {
            responseCode: null, result: null, error: error,
        };
    }
}