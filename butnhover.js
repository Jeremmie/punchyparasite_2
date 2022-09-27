

const mediaQueris = window.matchMedia("(mediaQueryString)")
if (!window.matchMedia("(max-width: 50rem)").matches) {
   
    function btninit() {
        const btn = document.querySelector('.btn_test');
        const btn2 = document.querySelector('.btn_test2');
        const btn3 = document.querySelector('.btn_test3');
        const btn4 = document.querySelector('.btn_test4');
    
        console.log('mediaqueris')
    
        btn.onmousemove = function (e) {
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;
    
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', x + 'px');
        }
    
    
    
        btn2.onmousemove = function (e) {
            const x = e.pageX - btn2.offsetLeft;
            const y = e.pageY - btn2.offsetTop;
    
            btn2.style.setProperty('--x', x + 'px');
            btn2.style.setProperty('--y', x + 'px');
        }
    
        btn3.onmousemove = function (e) {
            const x = e.pageX - btn3.offsetLeft;
            const y = e.pageY - btn3.offsetTop;
    
            btn3.style.setProperty('--x', x + 'px');
            btn3.style.setProperty('--y', x + 'px');
        }
    
        btn4.onmousemove = function (e) {
            const x = e.pageX - btn4.offsetLeft;
            const y = e.pageY - btn4.offsetTop;
    
            btn4.style.setProperty('--x', x + 'px');
            btn4.style.setProperty('--y', x + 'px');
        }
    
    
        
    };
  }
  







window.onload = btninit(); //rappel la fonction modalinit et la reload au changement de page
