/* ================= SIGN UP ================= */

function signupUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    localStorage.setItem("userName", name);

    alert("Account created successfully!");

    window.location.href = "home.html";
}


/* ================= PRODUCT SEARCH ================= */

function searchProducts() {

    let input =
        document.getElementById("productSearch");

    if (!input) {
        return;
    }

    let search =
        input.value.toLowerCase();

    let products =
        document.querySelectorAll(
            ".searchable-product"
        );

    products.forEach(function(product) {

        let text =
            product.innerText.toLowerCase();

        if (text.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= CONTACT FORM ================= */

function sendEnquiry(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const product = document.getElementById("productName").value;
    const message = document.getElementById("customerMessage").value;

    const whatsappMessage =
        `Hello M.K. Packers,

I want to make an enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${product}

Requirement:
${message}`;

    const whatsappURL =
        "https://wa.me/919897479618?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
}