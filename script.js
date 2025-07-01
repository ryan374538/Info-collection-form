https://script.google.com/macros/s/AKfycbwXLO25AGD8J5QjxBbW3WNiCMP2wyZilqtCS_Fi_VsTw_gTLJeoCHfyGQMH2SKUhdBYdA/exec


function getData(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var course= document.getElementById('course').value;
    var uni = document.getElementById('uni').value;

    if (fname === "" || lname === ""|| course ===""||uni==="") {
        alert("Please fill all fields");
        return;
    }

    const formData = new URLSearchParams();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("course", course);
    formData.append("uni", uni);

    fetch("https://script.google.com/macros/s/AKfycby1XHXTNmCCcFEdCt6tMBDehJ8mycA9RI-QGWIe3jgG5FrzhNWTtA8oUkySGwpq2j4yZw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
    })
    .then(() => {
        alert("Data submitted successfully.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}