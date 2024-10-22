let displyInputVal = document.getElementById('disply_number');
let desc = document.getElementById('desc');
let asc = document.getElementById('asc');
let inputBoxVal = document.getElementById('insc_descByVal');
let reset = document.getElementById('reset');


let currentVal = 0;

asc.addEventListener('click' , (e)=>{ 
    e.preventDefault();
    let values = parseInt(inputBoxVal.value);
        currentVal = currentVal + values;
        displyInputVal.innerText = `${currentVal} `;
})

desc.addEventListener('click' , (e)=>{ 
    e.preventDefault(); 
    let values = parseInt(inputBoxVal.value); 
        currentVal = currentVal-values;
        displyInputVal.innerText = `${currentVal}`;
})

reset.addEventListener('click', ()=>{
    currentVal = 0; 
    displyInputVal.innerText = "0"; 
    inputBoxVal.value = "";
})

