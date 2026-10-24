async function getUserInfo(userId) {
    try {
        const response = await fetch(`https://hydraulisc.net/api/${userId}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error('HTTP Error! Status: ' + response.status);
        }
        return await response.json();
    } catch(error) {
        console.log(error);
        return null;
    }
}

// SleepingAmi
getUserInfo(1).then(data => {
    document.querySelector("#profile_username1").textContent = data.user.username;
    document.querySelector("#profile_image1").src = `https://hydraulisc.net/${data.user.pfp}`;
})
// Sooox
getUserInfo(2).then(data => {
    document.querySelector("#profile_username2").textContent = data.user.username;
    document.querySelector("#profile_image2").src = `https://hydraulisc.net/${data.user.pfp}`;
})
// Arkarivs
getUserInfo(19).then(data => {
    document.querySelector("#profile_username3").textContent = data.user.username;
    document.querySelector("#profile_image3").src = `https://hydraulisc.net/${data.user.pfp}`;
})
// Owlly
getUserInfo(12).then(data => {
    document.querySelector("#profile_username4").textContent = data.user.username;
    document.querySelector("#profile_image4").src = `https://hydraulisc.net/${data.user.pfp}`;
})
