

const winDropDown = document.getElementById("winDropDown")
const lossDropDown = document.getElementById("lossDropDown")
const winDrop = document.getElementById("winDrop")
const lossDrop = document.getElementById("lossDrop")

const winHolder = document.getElementById("winHolder")
const lossHolder = document.getElementById("lossHolder")

const winBtnMob = document.getElementById("winSect")
const lossBtnMob = document.getElementById("lossSect")

const wHead = document.getElementById("win-w")
const lHead = document.getElementById("loss-l")




const wins30 = playWin.filter(function(win){
    return win.period === "days"
})

const loss30 = playLoss.filter(function(loss){
    return loss.period === "days"
})



function load() {
    render(wins30, winHolder)
    render(loss30, lossHolder)
}





function winSelectChanged() {

    if (winDropDown.selectedIndex === 0) {
        render(wins30, winHolder)
    } else if (winDropDown.selectedIndex === 1){
        render(playWin, winHolder)
    }
}

function lossSelectChanged() {

    if (lossDropDown.selectedIndex === 0) {
        render(loss30, lossHolder)
      
    } else if (lossDropDown.selectedIndex === 1){
        render(playLoss, lossHolder)
    }
}





function render(time, send) {
    let win = ""

    for (let i = 0; i < time.length; i++){

        win += `      

        <div class="theWholeBox">

        <div class="timeAndCaller">

            <p>Caller: ${time[i].caller} </p>
            <p>Date: ${time[i].time} </p>

        </div>

    <div class="lossBox">
        <div class="projectPfp">
            <img src="${time[i].image}" alt="">
        </div>

        <div class="loss">

            <div class="top">
                <div class="left sect">
                    <p> ${time[i].project}</p>
                </div>

                <div class="right sect">
                    <p>Entry: ${time[i].entry}</p> <img class="solana-logo" src="img/Solana_logo.png" alt=""> 
                </div>
            </div>


            <div class="bottom">

            <div class="left sect">
                    <p>${time[i].result}: ${time[i].outcome} </p> <img class="solana-logo" src="img/Solana_logo.png" alt=""> 
                </div>
                <div class="right sect">
                    <p>Exit: ${time[i].exit} </p> <img class="solana-logo" src="img/Solana_logo.png" alt=""> 
                </div>
                
            </div>
        </div>
        </div>
    </div>
                  

`   

    send.innerHTML = win

    }
}





function winSect() {
    lossBtnMob.style.backgroundColor = "#b7b7b7"
    winBtnMob.style.backgroundColor = "#48b140"

    lHead.style.display = "none"
    wHead.style.display = "block"

    winDrop.style.display = "block"
    lossDrop.style.display = "none"

    winHolder.style.display = "block"
    lossHolder.style.display = "none"

}

function lossSect() {
    winBtnMob.style.backgroundColor = "#b7b7b7"
    lossBtnMob.style.backgroundColor = "#b14044"
    lHead.style.display = "block"
    wHead.style.display = "none"

    winDrop.style.display = "none"
    lossDrop.style.display = "block"

    winHolder.style.display = "none"
    lossHolder.style.display = "block"
}







