    let db = 0
    let termekek = ['Tej','Vaj','Kenyér','Sajt','Szalámi']
    
    function reset() {
        console.log('Termékek változó',termekek)
        console.log('Ez a kenyér?',termekek[2])
        let bLista = document.getElementById("bev_lista")
        

        for (termek of termekek) {
            console.log(termek)
            bLista.innerHTML += `<li>${termek}</li>`
        }

    }

    function hozzaad() {

        let cuccNeve = document.getElementById("cucc").value
        let bLista = document.getElementById("bev_lista")
        //bLista.innerHTML = bLista.innerHTML + `<li>${cuccNeve}</li>` (régi)
        bLista.innerHTML += `<li>${cuccNeve}</li>` //(új)
        //console.log(cuccNeve)
        //console.log(bLista)
        db += 1
        document.getElementById("darab").innerHTML=db
        //console.log("darab:",db)

    }