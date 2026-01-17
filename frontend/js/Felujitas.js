document.getElementById("felujitasForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const cim = document.getElementById("LakasCím").value;
    const tipus = document.getElementById("feladatTípus").value;
    const terulet = document.getElementById("terulet").value;
    const megjegyzes = document.getElementById("megjegyzes").value;

    document.getElementById("uzenet").innerHTML = `<p>Felújítási igény sikeresen elküldve!</p>
    <p>Cím: ${cim}</p>
    <p>Feladat típusa: ${tipus}</p>
    <p>Terület (m²): ${terulet}</p>`;


});