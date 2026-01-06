function start() {
    window.location.href = "index2.html";
}
function changeStatus() {
    const status = document.getElementById("status");

    if (status.innerText === "Status: Aktiv") {
        status.innerText = "Status: Passiv";
    } else {
        status.innerText = "Status: Aktiv";
    }
}
