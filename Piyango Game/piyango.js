num1 = Math.floor(Math.random() * 10 )
num2 = Math.floor(Math.random() * 10 )
num3 = Math.floor(Math.random() * 10 )
num4 = Math.floor(Math.random() * 10 )
num5 = Math.floor(Math.random() * 10 )
num6 = Math.floor(Math.random() * 10 )
num7 = Math.floor(Math.random() * 10 )






let playerChoice = confirm("Do you want to play Lottery game")

if (playerChoice) {
    let ticketType = prompt("Write the type of ticket you chose: full, half or quarter")
    if (ticketType) {
        let ticket = ticketType.trim().toLowerCase()
        if (ticket === "full" || ticket === "half" || ticket=== "quarter") {
            if (ticket === "full") {
                ynum1 = prompt("Please write a number between 0-9")
                ynum2 = prompt("Please write a number between 0-9")
                ynum3 = prompt("Please write a number between 0-9")
                ynum4 = prompt("Please write a number between 0-9")
                ynum5 = prompt("Please write a number between 0-9")
                ynum6 = prompt("Please write a number between 0-9")
                ynum7 = prompt("Please write a number between 0-9")
                if (ynum1 == num1 && ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7) {
                    alert("You won 120.000.000 ₺ ")
                } else if(ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 20.000 ₺")
                } else if (ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 500 ₺")
                }else if (ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 400 ₺")
                } else if (ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 300 ₺")
                } else if (ynum6 == num6 && ynum7 == num7){
                    alert("You won 200 ₺")
                } else if (ynum6 == num6 || ynum7 == num7){
                    alert("You can have your money back")
                } else {
                    alert("Unfortunately you couldn't win :(")
                }
                let playAgain=confirm("Do you want to play again?")
                playAgain ? location.reload() : alert ("Ok, thanks for playing.");
            }else if (ticket === "half") {
                ynum1 = prompt("Please write a number between 0-9")
                ynum2 = prompt("Please write a number between 0-9")
                ynum3 = prompt("Please write a number between 0-9")
                ynum4 = prompt("Please write a number between 0-9")
                ynum5 = prompt("Please write a number between 0-9")
                ynum6 = prompt("Please write a number between 0-9")
                ynum7 = prompt("Please write a number between 0-9")
                if (ynum1 == num1 && ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7) {
                    alert("You won 60.000.000 ₺ ")
                } else if(ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 10.000 ₺")
                } else if (ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 250 ₺")
                }else if (ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 200 ₺")
                } else if (ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 150 ₺")
                } else if (ynum6 == num6 && ynum7 == num7){
                    alert("You won 100 ₺")
                } else if (ynum6 == num6 || ynum7 == num7){
                    alert("You can have your money back")
                } else {
                    alert("Unfortunately you couldn't win :(")
                }
                let playAgain=confirm("Do you want to play again?")
                playAgain ? location.reload() : alert ("Ok, thanks for playing.");
            }
            else {
                ynum1 = prompt("Please write a number between 0-9")
                ynum2 = prompt("Please write a number between 0-9")
                ynum3 = prompt("Please write a number between 0-9")
                ynum4 = prompt("Please write a number between 0-9")
                ynum5 = prompt("Please write a number between 0-9")
                ynum6 = prompt("Please write a number between 0-9")
                ynum7 = prompt("Please write a number between 0-9")
                if (ynum1 == num1 && ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7) {
                    alert("You won 30.000.000 ₺ ")
                } else if(ynum2 == num2 && ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 5.000 ₺")
                } else if (ynum3 == num3 && ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 125 ₺")
                }else if (ynum4 == num4 && ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 100 ₺")
                } else if (ynum5 == num5 && ynum6 == num6 && ynum7 == num7){
                    alert("You won 75 ₺")
                } else if (ynum6 == num6 && ynum7 == num7){
                    alert("You won 50 ₺")
                } else if (ynum6 == num6 || ynum7 == num7){
                    alert("You can have your money back")
                } else {
                    alert("Unfortunately you couldn't win :(")
                }
                let playAgain=confirm("Do you want to play again?")
                playAgain ? location.reload() : alert ("Ok, thanks for playing.");
            }
        }else { 
            alert("You didn't write full, half or quarter") 
        }
    }
    else {
        alert("I guess you changed your mind")
    }
}else {
    alert("Next time than :)")
}




