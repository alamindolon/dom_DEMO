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