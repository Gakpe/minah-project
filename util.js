// const url = "https://hammadayub34.pagekite.me/"
const url = "http://localhost:8080";
const herokuUrl = "https://test-minah-6b1a807102f0.herokuapp.com/";

export async function postToken(didToken) {
  console.log("Post the data");
  try {
    const response = await fetch(`${herokuUrl}user/login`, {
      headers: new Headers({
        Authorization: "Bearer " + didToken,
      }),
      withCredentials: true,
      credentials: "same-origin",
      method: "POST",
    });
    console.log("server ", herokuUrl);
    const result = await response.text();
    console.log("result", result);

    return {
      responseCode: response.status,
      result: result,
    };
  } catch (error) {
    return {
      responseCode: null,
      result: null,
      error: error,
    };
  }
}

export async function updateProfile(formData, issuer) {
  var requestOptions = {
    method: "PUT", // headers: {
    body: formData,
    redirect: "follow",
  };
  try {
    const response = await fetch(herokuUrl + `user/${issuer}`, requestOptions);
    const result = await response.json();

    return {
      responseCode: response.status,
      result: result,
    };
  } catch (error) {
    return {
      responseCode: null,
      result: null,
      error: error,
    };
  }
}

export async function getProjects() {
  var requestOptions = {
    method: "GET", // headers: {
    redirect: "follow",
  };
  try {
    const response = await fetch(herokuUrl + "project", requestOptions);
    const result = await response.json();

    return {
      responseCode: response.status,
      result: result,
    };
  } catch (error) {
    return {
      responseCode: null,
      result: null,
      error: error,
    };
  }
}

export async function deleteProfile(formData) {
  var requestOptions = {
    method: "DELETE", // headers: {
    redirect: "follow",
  };
  try {
    const response = await fetch(
      herokuUrl + `user/delete/${formData}`,
      requestOptions
    );
    const result = await response.text();

    return {
      responseCode: response.status,
      result: result,
    };
  } catch (error) {
    return {
      responseCode: null,
      result: null,
      error: error,
    };
  }
}

export async function postInvestment(investedAmount, userId) {
  const JSONBody = JSON.stringify({
    investAmount: investedAmount,
  });
  var requestOptions = {
    method: "POST", // headers: {
    body: JSONBody,
    headers: {
      "Content-Type": "application/json",
    },

    redirect: "follow",
  };
  try {
    const response = await fetch(
      herokuUrl + `project/investAmount/${userId}`,
      requestOptions
    );
    const result = await response.json();

    return {
      responseCode: response.status,
      result: result,
    };
  } catch (error) {
    return {
      responseCode: null,
      result: null,
      error: error,
    };
  }
}
