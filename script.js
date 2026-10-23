const nameInput = document.getElementById("nom");
const seatSelect = document.getElementById("place")
const reservationForm = document.getElementById("reservationForm");
const seats = document.getElementsByClassName("seat");
const recettelement = document.getElementById("recette");
const dispoelement = document.getElementById("dispo");
let dispo = 17;
let recette = 0;
let prix = 80;
reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const passengerName = nameInput.value.trim();
    const selectedSeat = seatSelect.value;
    if (passengerName === "" || selectedSeat === "") {
        alert("Veuillez saisir votre nom et choisir une place.");
        return;
    }
    for (let i = 0; i < seats.length; i++) {
        if (seats[i].textContent.trim() === selectedSeat)
            {
            if (seats[i].disabled) {
                alert("Cette place est déjà réservée !")
                return;
            }
            seats[i].classList.remove(
                "bg-white",
                "hover:bg-gray-100",
                "border-gray-300"
            );
            seats[i].classList.add(
                "bg-red-100",
                "border-red-200",
                "text-red-600"
            );
            dispo -= 1;
            dispoelement.textContent = dispo;
            recette = recette + prix;
            recettelement.textContent = recette;
            seats[i].disabled = true;
            alert("Réservation effectuée pour " + passengerName);
            reservationForm.reset();
            return;
        }
    }
});
