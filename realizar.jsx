//Realizar un intervalo del titulo de la pagina realizando un intervalo de los titulos "Origina" y de "numero de notificaciones"

function flashTitleNotification() {
    var originalTitle = document.title;
    var isflash = false;
    
    function changeTitle(){
        document.title = isflash ?
        "(10) Nuevos mensajes" : originalTitle;
        isflash = !isflash;
    }
    setInterval(changeTitle, 1000);
}
window.onload = flashTitleNotification;



//Implementacion de la parte de cambio de color y otros aspectos desde un input

function changeOfAspect() {

    let box = document.querySelector("div"),
        input = document.querySelector("input");

        input.addEventListener("input", () => {
            box.style.borderRadius = input.value;
            box.style.background = input.value;
        })
    return(
        <main>

            <style>
                div {
                    height: 200px;
                    width: 200px;
                    border: 1px solid #333
                    transition: all 0.4s ease;
                }
            </style>

            <div></div>
            <input type="text" />
        </main>
    )
}
export default changeOfAspect;

//Mejorado __________________________________________
import { useEffect, useRef } from 'react';
import './ChangeOfAspect.css';

const ChangeOfAspect1 = () => {
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const input = inputRef.current;

    const handleInput = () => {
      const value = input.value;
      box.style.borderRadius = value;
      box.style.background = value;
    };

    input.addEventListener('input', handleInput);

    return () => {
      input.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <main>
      <div ref={boxRef} className="box"></div>
      <input ref={inputRef} type="text" />
    </main>
  );
};

export default ChangeOfAspect1;
//__________________________________



