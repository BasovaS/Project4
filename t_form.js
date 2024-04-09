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
    
    const formElement = document.getElementById('g_form'); // извлекаем элемент формы
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
      // теперь можно извлечь данные
      v_height = formData.get('g_lenght'); 
      v_width = formData.get('g_width'); 
      console.log(v_width);
      document.getElementById("block").style.width =  v_width+'px';
      document.getElementById("block").style.height =  v_height+'px';
    });

    if (state ==''){
        elem.style.display='none'; //если включен, то выключаем
        document.getElementById("g_create").innerHTML="Создать";
    }
    else {
        elem.style.display=''; //иначе - включаем
        document.getElementById("g_create").innerHTML="Закрыть";
    }
}

