    const billAmount = document.querySelector("#bill-amount");
    const cashGiven = document.querySelector("#cash-given");
    const checkButton = document.querySelector("#check");
    const errorMessage = document.querySelector("#error-message");
    const noofNotes = document.querySelectorAll(".no-of-notes");

    const notes = [2000,500,100,20,10,5,1];

    checkButton.addEventListener("click",function () {
         errorMessage.style.display = "none";
        if(billAmount.value==='' && billAmount.value==='')
        {
            showMessage("Enter both values.");
        }
        else{
            if(Number(billAmount.value) > 0){
                if(Number(cashGiven.value) >= Number(billAmount.value)){
                    var amountToReturn = Number(cashGiven.value) - Number(billAmount.value);
                    calculateChange(amountToReturn);
                }
                else{
                    showMessage("Cash given should at least equal to Bill Amount");
                }
            }
            else{
                showMessage("Bill Amount should be greater than 0.");
            }
        }
    });

    function showMessage(message){
        errorMessage.style.display = "block";
        errorMessage.innerText = message;
    }

    function calculateChange(amountToReturn){
      
        for(let i=0;i<notes.length;i++){
            var noteTOReturn = Math.trunc(amountToReturn/notes[i]);
            amountToReturn = amountToReturn%notes[i];
            noofNotes[i].innerText = noteTOReturn;
        }
    }
