const UrlApi = "https://api.github.com/users/";
const token =
	"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";
const InputSearchUser = document.querySelector("#InputSearchUser")
const BtnValide = document.querySelector("#BtnValide")
const UserResultCase = document.querySelector("#UserResultCase")
const PpUser = document.querySelector("#PpUser")
const loginUser = document.querySelector("#name")
const username = document.querySelector("#usernam")
const joined = document.querySelector("#joined")
const bio = document.querySelector("#bio")

BtnValide.addEventListener("click", getUser)


async function getUser() {
	const response = await fetch(UrlApi + "S29Ducky", {
		headers: {
			Authorization: `token ${token}`,
		},
	});

	const data = await response.json();
	console.log(data);
	let UserPpData = data.avatar_url;
	let loginData = data.login;
	let UsernameData = data.name;
	let dateCreationData = data.created_at;
    let BioData = data.bio

    PpUser.textContent = UserPpData
    loginUser.textContent = loginData
    username.textContent = UsernameData
    joined.textContent = dateCreationData
    bio.textContent = BioData
    
}