const boxes = document.querySelectorAll('.box') ;
const win_area = document.querySelector('.winner');
const rst_btn = document.getElementById('restart');
// const rest_btn = document.getElementById('restart');
const winner = document.querySelector('.winner');
const main = document.getElementById('main');
const popUp = document.querySelector('.congrats-container');
let turn0 = true;

winner.classList.add('visible');

const winPatterns = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ];
    

    function check_winner(){
        let draw = true;
        for (let Pattern of winPatterns) {
            let pos1Val = boxes[Pattern[0]].innerText;
            let pos2Val = boxes[Pattern[1]].innerText;
            let pos3Val = boxes[Pattern[2]].innerText;

            if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" 
             && pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                break;
            }

            boxes.forEach(box=>{
                if(box.innerText == "") draw = false;
            });
            if(draw){
                winner.classList.remove('visible');
                let msg = document.createElement("p");
                msg.textContent="This game is ends with draw try again";
                let head = document.createElement('h1');
                head.textContent = "Nice competition";
                popUp.appendChild(head);   
                winner.appendChild(msg);


                break;

            }

        }
        
    }

    function showWinner(winner2){

        boxes.forEach(box=>{
            box.disabled = true;
        })

        {

            
            // winner.classList.remove('visible');    
            $("div").removeClass('visible'); 
            let msg = document.createElement("p");
            msg.textContent=`winner is ${winner2}`; 
            let head = document.createElement('h1');
            head.textContent = "Congratulation";
            popUp.appendChild(head);
            winner.appendChild(msg);
            // console.log(msg);
        }


    }

boxes.forEach(box=>{
    box.onclick = function(){
        if(turn0){
            box.innerHTML="0";
            turn0 = false;
        }
        else{
            box.innerHTML='x';
            turn0=true;
        }
        box.disabled = true;
        box.classList.remove('hover');
        check_winner();
    }
    
    
});

rst_btn.onclick = function(){
    boxes.forEach(box=>{
            box.innerText ="";
            box.disabled = false;
            // winner.classList.add('visible');
            // winner.classList.add('visible');

        })

winner.remove("tictak")
}

// rest_btn.onclick = function(){
//     boxes.forEach(box=>{
//             box.innerText ="";
//             box.disabled = false;
//         })
// }
//completed


