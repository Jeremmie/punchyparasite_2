
var modals = document.getElementsByClassName("modal");

for (let index = 0; index < modals.length; index++) {
    var btn = document.getElementById("myBtn" + index);
    let modal = document.getElementById("myModal" + index)
    var span = document.getElementsByClassName("close")[index];
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        var modal = document.getElementById("myModal" + index)
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        // var modal = document.getElementById("myModal"+index)
        modal.style.display = "none";
    }
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    for (let index = 0; index < modals.length; index++) {
        var modal = document.getElementById("myModal" + index)
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



const wipe = document.querySelector('.wipe-transition');
const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}



barba.init({

    

    sync: true,

    transitions: [
        {
            
            
            async leave() {
                

                const done = this.async();

                TLAnim
                    .to(allBandes, { height: '100%', stagger: 0.05 })

                // TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

                await delay(1500);
                done();
                

            },

            

            enter() {

                // TLAnim
                // .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
                // .set(wipe, {left: '-100%'})

                TLAnim
                    .to(allBandes, { height: '0%', stagger: 0.05 })
                    
            }
            
        }
    ]

})





