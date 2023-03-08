// I love this function and the color palettes it returns.
// I don't want to lose it so I'll just keep it here.
function randomColors() {
    const rand1 = Math.floor(Math.random() * 100 + 155);
    const rand2 = Math.floor(Math.random() * 100 + 155);
    const rand3 = Math.floor(Math.random() * 100 + 155);

    const color1 = `rgb(${rand1}, ${rand2}, ${rand3})`;

    const randomTwist = Math.floor(Math.random() * 3 + 1);
    let rand4 = rand1 - 75;
    let rand5 = rand2 - 75;
    let rand6 = rand3 - 75;
    if (randomTwist === 1 && rand1 > 155) rand4 = rand1 - 150;
    if (randomTwist === 2 && rand2 > 155) rand5 = rand2 - 150;
    if (randomTwist === 3 && rand3 > 155) rand6 = rand3 - 150;

    const color2 = `rgb(${rand4}, ${rand5}, ${rand6})`

    return [color1, color2]
}