/** Connect to Moralis server */
const serverUrl = "https://snkqlmndwhhi.usemoralis.com:2053/server";
const appId = "knGkaoioinpvyriqjtSMVmnIkCIt9WeH3J3zIrwc";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
        user = await Moralis.authenticate({ signingMessage: "Hello World!" })
        initApp()
    } catch(error) {
        console.log(error)
    }
  }
   else {
       initApp()
   }
}

function initApp(){
    document.querySelector("#app").style.display = "block";
    document.querySelector(#submit_button).onclick = submit;
}

function submit()
{
    //Get image data
    const input = document.querySelector("#input_image");
    let data = input.files[0];
    const imageFile = new Moralis.files(data.name, data);
    await imageFile.saveIPFS();
    let imageHash = iamgeFile.hash();
    console.log(imageHash); 
    console.log(imageFile.ipfs());


    //Upload image to IPFS
    //Create metadata with image hash and data
    //upload to Rarible (plugin).
}

login();

// async function logOut() {
//   await Moralis.User.logOut();
//   console.log("logged out");
// }

// document.getElementById("btn-login").onclick = login;
// document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/