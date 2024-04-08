function Func1(){
    document.getElementById("g_lenght").setAttribute('value', 1000);
    document.getElementById("g_width").setAttribute('value', 200);
    document.getElementById("g_height").setAttribute('value', 10);
}

function Func2(){
    document.getElementById("g_lenght").setAttribute('value', 100);
    document.getElementById("g_width").setAttribute('value', 200);
    document.getElementById("g_height").setAttribute('value', 10);
}

function Func3(){
    document.getElementById("g_lenght").setAttribute('value', 1000);
    document.getElementById("g_width").setAttribute('value', 20);
    document.getElementById("g_height").setAttribute('value', 10);
}

function CreateIm(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') elem.style.display='none'; //если включен, то выключаем
    else elem.style.display=''; //иначе - включаем
}

