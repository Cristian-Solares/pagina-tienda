const menu = document.querySelector('.menu'); /*crea una contante menu para agegarle isctive*/
      const menu_burger = document.querySelector('#burger-menu');/*crea una contante menu_burger para darle clip*/
      menu_burger.addEventListener('click',hideShow)/*compueva si se le dio cip a menu_burger y llama a la funcion*/
      function hideShow(){/*crea una función condicinal la cual llama arriba*/
        if(menu.classList.contains('isactive')){/*si contiene isactive*/
          menu.classList.remove('isactive');/*quita is active*/
        }else{
          menu.classList.add('isactive');/*pone is active*/
          }
      }