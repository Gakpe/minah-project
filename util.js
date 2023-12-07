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

export async function updateProfile (formData){
    var requestOptions = {
        method: "PUT", // headers: {
        body: formData,
        redirect: "follow",
    };
    try{
        const response = await fetch("https://test-minah-6b1a807102f0.herokuapp.com/user/update", requestOptions);
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

export async function deleteProfile (formData){
    var requestOptions = {
        method: "DELETE", // headers: {
        redirect: "follow",
    };
    try{
        const response = await fetch(`https://test-minah-6b1a807102f0.herokuapp.com/user/delete/${formData}`, requestOptions);
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

export async function getVaults(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-API-Key", "150eabf3-56cd-446b-b45f-6a71d94f202c");

    var raw = JSON.stringify({
        "name": "<string>",
        "hiddenOnUI": false,
        "customerRefId": "<string>",
        "autoFuel": true
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://sandbox.fireblocks.io/v2/vault/accounts", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}