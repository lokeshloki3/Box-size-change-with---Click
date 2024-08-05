const countValue = document.querySelector('#counter');
// const countValue = document.getElementById('counter');
const myBoxy = document.getElementById('myBox');

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;

    let newWidth = myBoxy.offsetWidth+50;
    myBoxy.style.width= newWidth+'px';
};


function decrement(){
        // get the value from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;

        let newWidth = myBoxy.offsetWidth-50;
        myBoxy.style.width= newWidth +'px';
};