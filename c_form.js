function c_func1(){
    document.getElementById("c_lenght").setAttribute('value', 1000);
    document.getElementById("c_width").setAttribute('value', 200);
    document.getElementById("c_height").setAttribute('value', 10);
}

function c_func2(){
    document.getElementById("c_lenght").setAttribute('value', 100);
    document.getElementById("c_width").setAttribute('value', 200);
    document.getElementById("c_height").setAttribute('value', 10);
}

function c_func3(){
    document.getElementById("c_lenght").setAttribute('value', 1000);
    document.getElementById("c_width").setAttribute('value', 20);
    document.getElementById("c_height").setAttribute('value', 10);
}

function CreateCargo(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    
    const formElement = document.getElementById('c_form'); // извлекаем элемент формы
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
      // теперь можно извлечь данные
      v_height = formData.get('c_lenght'); 
      v_width = formData.get('c_width'); 
      console.log(v_width);
      document.getElementById("c_block").style.width =  v_width+'px';
      document.getElementById("c_block").style.height =  v_height+'px';
    });

    if (state ==''){
        elem.style.display='none'; //если включен, то выключаем
        document.getElementById("c_create").innerHTML="Создать";
    }
    else {
        elem.style.display=''; //иначе - включаем
        document.getElementById("c_create").innerHTML="Закрыть";
    }
}

