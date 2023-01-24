


const team = document.getElementById("team")
const testApi = document.getElementById("testapi")
const testApi2 = document.getElementById("testapi2")

let members = [
    {
        "image": "img/team/smb.png",
        "name": "DOT",
        "role": "Founder",
        "twitter": "https://twitter.com/dotdotdotdao"

    },
    {
        "image": "img/team/turko.jpeg",
        "name": "Turko",
        "role": "Alpha Caller",
        "twitter": "https://twitter.com/turkoNFT_"

    },
    {
        "image": "img/team/lily.png",
        "name": "Kazmoe",
        "role": "Developer",
        "twitter": "https://twitter.com/skazmoe"

    },
    {
        "image": "img/team/monk.png",
        "name": "Nick",
        "role": "WL Hunter",
        "twitter": ""

    },
    {
        "image": "img/team/mrhandsome.png",
        "name": "MrHandsome",
        "role": "Alpha Caller",
        "twitter": ""

    },
    {
        "image": "img/team/EDO.png",
        "name": "EDO",
        "role": "Alpha Caller",
        "twitter": ""

    },
    {
        "image": "img/team/Shawnny.png",
        "name": "Shawnny",
        "role": "Alpha Caller",
        "twitter": ""

    }
    
    
]


function run(field) {
    let addMember = ""
    for (let i = 0; i < field.length; i++){
        addMember += ` 
        <div class="member">

        <div class="pfp"> <img src="${field[i].image}" alt=""></div>

        <div class="info">
            <div class="top">
            <div class="name"><p>${field[i].name}</p></div>
            <div class="twitter"><a target=”_blank” href="${field[i].twitter}"> <i class="fa-brands fa-twitter"></i> </a> </div>
             </div>
            <div class="role"><p>${field[i].role}</p></div>
        </div>

    </div>`
    }

    team.innerHTML = addMember
}









//   fetch('https://api.coingecko.com/api/v3/coins/solana')
//   .then( function(response) {
//     return response.json()
//   })
//   .then(function(data){

//     testApi.innerHTML = "$" + data.market_data.current_price.usd
//   })
 




//   fetch('')
//   .then( function(ress) {
//     console.log(ress)
//   })
 
  

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: '124ba8df-bd2d-4a92-b7c5-aafcdec9cd17'
//     }
//   };
  
//   fetch('https://api.nftport.xyz/v0/solana/transactions/stats/degods', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api-devnet.magiceden.dev/v2/collections?offset=0&limit=3", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));