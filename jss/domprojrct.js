let count = 0;
document.getElementById("inputbtn").addEventListener('click', function () {
    count++;
    const inputvalue = document.getElementById('inputText').value;


    const contaentTR = document.getElementById('contaent_TR');
    const tbr = document.createElement('tr');
    tbr.innerHTML = `<th>${count}</th>
    <td>${inputvalue}</td>
    <td>
    <button class = "delete">delete</button>
    <button class = "edit">Edit</button>
    
    </td>
    
    `
    const clearbtn = document.createElement('button');
    clearbtn.innerText ='clear'
    contaentTR.appendChild(tbr);
    // contaentTR.appendChild(clearbtn);
    document.getElementById('inputText').value = '';

    const edits = document.getElementsByClassName("edit");
    for (const editb of edits) {
        editb.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = "line-through";
        })

    }

    const deletes = document.getElementsByClassName("delete");
    for (const button of deletes) {
        button.addEventListener('click', function(event) {
            event.target.parentNode.parentNode.style.display ="none";
        })


    }
    document.getElementById("clear").addEventListener('click',function(event)
    {
        

        contaentTR.style.display='none';
    })
    
    

    // const mainpart = document.getElementById('mainPart');
    // document.getElementById('clearbtn').addEventListener('click',function(event){
    //    event.target.parentNode.style..display='none';

    // })


})