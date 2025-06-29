let display = document.getElementById('display');

function calculate(value){
    if (value==='='){
        try {
            display.value =eval(display.value);

        }catch (error){
            display.value = 'Error'
        } 
    }   else {
            display.value+= value
        }
    }



function clearDisplay(){
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


