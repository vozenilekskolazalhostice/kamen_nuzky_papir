input.onButtonPressed(Button.A, function () {
    basic.showString("Soucet!")
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    náhoda = randint(1, 3)
    součet += náhoda
    if (náhoda == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (náhoda == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let součet = 0
let náhoda = 0
basic.showIcon(IconNames.House)
basic.forever(function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Scissors)
    basic.showIcon(IconNames.Square)
})
