const sections  = document.querySelectorAll('section')
for(const section of sections)
{
    //console.log(section)

    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '15PX'
    section.style.marginBottom = '10px'
    section.style.padding = '7px'
}





document.getElementById('update-button').addEventListener('click',function()
{
    const inputfiled = document.getElementById('input_text');
    const inputText = inputfiled.value;

    const p = document.getElementById('handler_states');
    p.innerText = inputText;
    inputfiled.value = '';
})


function handleOneClick(){
    const handleStates = document.getElementById('handler_states');
    handleStates.innerText = 'amr sonar bangla';

}
document.getElementById('event_listener').addEventListener('click',function()
{
    const handleStates = document.getElementById('handler_states');
    handleStates.innerText = 'Handle by function onclick attribute';
})

document.getElementById('post_btn_id').addEventListener('click',function()
{
    const commentBox = document.getElementById('comment_box');
    const commentText = commentBox.value;

    const CommentContainer = document.getElementById('comment_container');
    const p = document.createElement('p');
    p.innerText = commentText;
    CommentContainer.appendChild(p);

    commentBox.value = '';


})

const mainContainer = document.getElementById('main_container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'this is course';
section.appendChild(h1);

const ul = document.createElement('ul');

const li = document.createElement('li');
li.innerText = 'C';
ul.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = 'java';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'OOP';
ul.appendChild(li3);

section.appendChild(ul);


mainContainer.appendChild(section);
