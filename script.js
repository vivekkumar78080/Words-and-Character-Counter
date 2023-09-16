let textinput = document.getElementById("text-input");

textinput.addEventListener('input', function(){
    var box = this.value;
    console.log(box);
    let char = box.length;
    document.getElementById("char").innerHTML = char;

    box = box.trim();
    let words = box.split(" ");
    let cleanList = words.filter(function(element){
        return element != "";
    });
    console.log(cleanList);
    document.getElementById("word").innerHTML = cleanList.length;

});