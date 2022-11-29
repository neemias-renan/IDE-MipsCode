
function LineAndIndex() {
    sizeLines = document.querySelector('.lines').children.length;
    indexSize = document.querySelector('.index').children.length;
    if (sizeLines === 0) {
        document.querySelector('.lines').innerHTML = "<div class='div_line' contenteditable='true'></div>";
    }

    if (sizeLines > 1) {
        for (cont = indexSize + 1; cont == sizeLines; cont++) {
            div = document.createElement('div');
            document.querySelector('.index').append(div);
            if (sizeLines < 10) { div.innerHTML = "0" + sizeLines; }
            else { div.innerHTML = sizeLines; }
        }
    }

    if (sizeLines <= indexSize && sizeLines > 0) {
        while (sizeLines < indexSize) {
            document.querySelector('.index').children[sizeLines].remove();
        }
    }
    // list_line()
}

function list_line(){
    const lines = document.querySelectorAll('.div_line');
    const green_text = ["add", "addi", "sub", "syscall"];
    const red_text = ["."];

    
    
    for (cont = 0; cont < lines.length; cont++) { 
        div = document.getElementsByClassName('div_line');      
        span = document.createElement('span');
        div.append(span);

        span.append(lines[cont].innerHTML);
    }
    




    // for (cont = 0; cont < lines.length; cont++) {      
    //     if(green_text.includes(lines[cont].textContent.trim().split(" ")[0]) == true){
    //         if(lines[cont].textContent.trim().split(" ").length > 1){

    //         }
    //         else{
    //             txt = document.getElementsByClassName('div_line')[cont];
    //             txt.setAttribute('class','div_line green_text');
    //         }
           
    //     }

    //     else{
    //         txt = document.getElementsByClassName('div_line')[cont];
    //         txt.setAttribute('class','div_line');
    //         txt = txt.innerHTML.trim();
    //        }
    // }
}


// else if(terms_identify.includes(lines[cont].textContent.trim().split(" ")[0]) == true){
//     document.getElementsByClassName('div_line')[0].innerHTML = '<span class="green_text">'+lines[cont].textContent.trim().split(" ")[0]+'</span>'
// }
// function line_identify(line){
//     const terms_identify = ["add", "addi", "sub"];

//     line_array = line.trim().split(" ");
    
//     if(terms_identify.includes(line_array[0]) == true){
//         return("<span class='div_line green_text'>" + line_array[0]+ "</span>")
//     }
// }


// function colorize(text){
//     if(text[0])

// }