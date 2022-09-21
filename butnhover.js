function btninit() {
    
    const btn = document.querySelector('.btn_test');
    const btn2 = document.querySelector('.btn_test2');
    

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

};

window.onload = btninit(); //rappel la fonction modalinit et la reload au changement de page
