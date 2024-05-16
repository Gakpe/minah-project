import axios from "axios";
const url = process.env.NEXT_PUBLIC_BACKEND_URL;
const herokuUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// const herokuUrl = "https://test-minah-6b1a807102f0.herokuapp.com/";

export async function postToken(didToken) {
	console.log("Post the data", herokuUrl);
	axios({
		method: "get", // Assuming it's a POST request; adjust as needed
		url: `${herokuUrl}user/passportAuth`,
		headers: {
			Authorization: `Bearer ${didToken}`,
		},
	})
		.then(function (response) {
			console.log(response);
			return {
				responseCode: response.status,
				result: response.data,
			};
		})
		.catch(function (error) {
			console.error(error);
		});
}

export async function updateProfile(formData, issuer) {
	var requestOptions = {
		method: "PUT", // headers: {
		body: formData,
		redirect: "follow",
	};
	try {
		const response = await fetch(
			herokuUrl + `user/${issuer}`,
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

export async function getProjects() {
	var requestOptions = {
		method: "GET", // headers: {
		redirect: "follow",
	};
	try {
		const response = await fetch(herokuUrl + "project", requestOptions);
		const result = await response.json();
		console.log(result);
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

export async function getUser(didToken) {
	try {
		axios({
			method: "get", // Assuming it's a POST request; adjust as needed
			url: `${herokuUrl}user/get`,
			headers: {
				Authorization: `Bearer ${didToken}`,
			},
		}).then((res) => {
			console.log("res = ", res);
		});
	} catch (error) {
		return {
			responseCode: null,
			result: null,
			error: error,
		};
	}
}

export async function deleteProfile(issuer) {
	var requestOptions = {
		method: "DELETE", // headers: {
		redirect: "follow",
	};
	try {
		const response = await fetch(
			herokuUrl + `user/delete/${issuer}`,
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
