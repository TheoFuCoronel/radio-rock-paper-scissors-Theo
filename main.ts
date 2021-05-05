radio.onReceivedNumber(function (receivedNumber) {
    Recieved_Number = true
    Other_Hand = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    My_hand = My_hand + 1
    if (My_hand == 3) {
        My_hand = 0
    }
    if (My_hand == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (My_hand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (My_hand == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    Selected = true
    radio.sendNumber(My_hand)
})
let Other_Hand = 0
let Recieved_Number = false
let Selected = false
let My_hand = 0
radio.setGroup(72)
My_hand = 0
Selected = false
Recieved_Number = false
basic.forever(function () {
    if (Selected == true && Recieved_Number == true) {
        Selected = false
        Recieved_Number = false
        if (My_hand == 0 && Other_Hand == 2) {
            basic.showString("You Win",100)
        } else if (My_hand == 1 && Other_Hand == 2) {
            basic.showString("You lose",100)
        } else if (My_hand == 2 && Other_Hand == 1) {
            basic.showString("You Win",100)
        } else if (My_hand == 0 && Other_Hand == 1) {
            basic.showString("You lose",100)
        } else if (My_hand == 2 && Other_Hand == 0) {
            basic.showString("You lose",100)
        } else if (My_hand == 1 && Other_Hand == 0) {
            basic.showString("You Win",100)
        } else {
            basic.showString("Tie")
        }
    }
})
