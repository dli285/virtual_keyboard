let keyboard = document.querySelector('.keyboard')

keyboard.addEventListener('click', function(event){
    let key = (event.target);
    let keyValue = key.innerHTML;
    console.log(keyValue)
})