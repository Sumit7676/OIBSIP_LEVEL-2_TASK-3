let inputBox = document.querySelector('#inputBox'); 
let list = document.querySelector('#list'); 

inputBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && this.value.trim() !== ""){ 
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (value) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${value}<i></i>`;
    listItem.addEventListener('click', function() {
        this.classList.toggle('done');
    });

    listItem.querySelector('i').addEventListener('click', function() {
        list.removeChild(listItem);
    });
    list.appendChild(listItem);
};
