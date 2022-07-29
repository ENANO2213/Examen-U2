document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key == "Enter") e.target.value = " ";

        document.querySelectorAll(".gen").forEach(juegos => {

            juegos.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
                juegos.classList.remove("filtro") :
                juegos.classList.add("filtro")
        })

    }




})