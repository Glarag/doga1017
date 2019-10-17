var boxTopLeft = document.getElementById("box1");
var boxTopRight = document.getElementById("box2");
var boxBotLeft = document.getElementById("box3");
var boxBotRight = document.getElementById("box4");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init()
{
    let item = document.getElementById("bigBox");
    item.style.backgroundColor = "black";
    item.style.position = "relative";
    item.style.width = "500px";
    item.style.height = "500px";

    boxTopLeft.style.position = "absolute";
    boxTopLeft.style.top = "0px";
    boxTopLeft.style.left = "0px";
    boxTopLeft.style.width = "100px";
    boxTopLeft.style.height = "100px";
    boxTopLeft.style.backgroundColor = "green";

    boxTopRight.style.position = "absolute";
    boxTopRight.style.top = "0px";
    boxTopRight.style.left = "400px";
    boxTopRight.style.width = "100px";
    boxTopRight.style.height = "100px";
    boxTopRight.style.backgroundColor = "green";

    boxBotLeft.style.position = "absolute";
    boxBotLeft.style.top = "400px";
    boxBotLeft.style.left = "0px";
    boxBotLeft.style.width = "100px";
    boxBotLeft.style.height = "100px";
    boxBotLeft.style.backgroundColor = "green";

    boxBotRight.style.position = "absolute";
    boxBotRight.style.top = "400px";
    boxBotRight.style.left = "400px";
    boxBotRight.style.width = "100px";
    boxBotRight.style.height = "100px";
    boxBotRight.style.backgroundColor = "green";

}

function moveVertical(box)
{
    let initTop = Number(box.style.top.split("px")[0]);
    let mod;
    if(initTop === 0 || initTop === 100) { mod = 1; move(); }
    else if(initTop === 300 || initTop === 400) { mod = -1; move(); }
    async function move()
    {
        let i = 0;
        box.style.backgroundColor = "red";
        do
        {
            i++;
            box.style.top = `${initTop + (i * mod)}px`;
            await sleep(10);
        } while(i < 300);
        box.style.backgroundColor = "green";
    }
}

function moveHorizontal(box)
{
    let initLeft = Number(box.style.left.split("px")[0]);
    let mod;
    if(initLeft === 0 || initLeft === 100) { mod = 1; move(); }
    else if(initLeft === 300 || initLeft === 400) { mod = -1; move(); }
    async function move()
    {
        let i = 0;
        box.style.backgroundColor = "red";
        do
        {
            i++;
            box.style.left = `${initLeft + (i * mod)}px`;
            await sleep(10);
        } while(i < 300);
        box.style.backgroundColor = "green";
    }
}