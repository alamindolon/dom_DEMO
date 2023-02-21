const mainContainer = document.getElementById('main_container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'MY Food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'vat';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'mas';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'sobji';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'votta';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section)

//set innnerHTML directly

const sectionDress  = document.createElement('section');

sectionDress.innerHTML = `
<h1>my Dress section</h1>

<ul>
    <li> T-shirt</li>
    <li> polo-shirt</li>
    <li> sando ganji</li>
    
</ul>

`

sectionDress.style.color = 'blue';
sectionDress.style.border = '2px solid steelblue';
sectionDress.style.borderRadius = '15px'
mainContainer.appendChild(sectionDress);



