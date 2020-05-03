var ul=document.getElementById('list');



var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);




function addItem(){
var input = document.getElementById('input')
var item = input.value;
ul = document.getElementById('list');
var textnode = document.createTextNode(item)
 if(item === '')
 {
 	
 	var p= document.createElement('p');
 	var myValue=document.createTextNode('Enter your Todo')
 	p.appendChild(myValue);
 	document.querySelector('input').appendChild(p);
 }else{
        //create li 
        li = document.createElement('li');
                //create checkbox
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.setAttribute('id', 'check');
                //create label
                var label = document.createElement('label');
                label.setAttribute('for', 'item');
                ul.appendChild(label);
                li.appendChild(checkbox);
                label.appendChild(textnode);
                li.appendChild(label);
                ul.insertBefore(li, ul.childNodes[0]);
                
                    li.className = 'visual';
                input.value = '';
        }
}
function removeItem(){
	li=ul.children;
	for( index =0; index<li.length; index++){
		while(li[index] && li[index].children[0].checked)
		ul.removeChild(li[index])
			}
	
}