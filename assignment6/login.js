window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParam = new URLSearchParams(queryString);
	const username = urlParam.get("username");
	const password = urlParam.get("password");
	var loginUsername = document.forms["myLogin"]["username"].value;
	var loginPassword = document.forms["myLogin"]["password"].value;
	if(loginUsername != username || loginPassword != password)
	{
		alert("Username or Password is incorrect");
		return false;
	}
	else
	{
		alert("Complete");
	}

	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			