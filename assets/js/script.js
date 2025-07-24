let signupform = document.getElementById("signupform")
signupform.addEventListener('submit', function (e) {
    e.preventDefault();
    let fname = document.getElementById('fname').value.trim();
    let lname = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    let language = document.querySelector('input[name="language"]:checked')?.value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;

    bootstrap.Modal.getInstance(document.getElementById("signupModal")).hide();
    // Show thank you modal
    let thankuModal = new bootstrap.Modal(document.getElementById('thankuModal'));
    thankuModal.show();
    
    document.getElementById("closeThankYou").addEventListener("click", function () {
        document.getElementById("usertabledata").style.display = "block";

        const row = `<tr>
                <td>${fname + " " + lname}</td>
                <td>${gender}</td>
                <td>${language}</td>
                <td>${email}</td>
            </tr>`;

        document.getElementById("tablerowdata").insertAdjacentHTML('beforeend', row);
    }, { once: true }); // ensures handler is only triggered once
})