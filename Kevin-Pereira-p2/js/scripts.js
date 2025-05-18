// Suppress specific Instagram AJAX errors
window.addEventListener("error", function (e) {
    if (e.message && e.message.includes("ajax/bulk-route-definitions")) {
        e.preventDefault();
    }
});

const aboutData = [
    {
        heading: "Our Story",
        text: "We are the first frozen custard shop in Brazil! Our inspiration came from Kopps frozen custard and we wanted to give Brazil a taste of that."
    },
    {
        heading: "Our Ingredients",
        text: "We use milk, milk cream, eggs, fruits and whatever other topping you prefer."
    }
];

const contactData = {
    location: "Avenida Durval Guimarães",
    phone: "+55 11 99999-1234",
    hours: "Mon–Sat: 10am – 8pm"
};

const aboutSection = document.getElementById("about-content");
const contactSection = document.getElementById("contact-info");
const button = document.getElementById("new-button");

function createElement(tag, content, className = "") {
    const el = document.createElement(tag);
    el.textContent = content;
    if (className) el.classList.add(className);
    return el;
}

function populateAboutSection(dataArray) {
    aboutSection.innerHTML = "";
    for (let item of dataArray) {
        const heading = createElement("h2", item.heading);
        const paragraph = createElement("p", item.text);
        aboutSection.appendChild(heading);
        aboutSection.appendChild(paragraph);
    }
}

function populateContactSection(info) {
    contactSection.innerHTML = "";
    const location = createElement("p", `Location: ${info.location}`);
    const phone = createElement("p", `Phone: ${info.phone}`);
    const hours = createElement("p", `Hours: ${info.hours}`);
    contactSection.appendChild(location);
    contactSection.appendChild(phone);
    contactSection.appendChild(hours);
}

// ✅ Highlight function restored
function highlightLongAboutItems(dataArray) {
    for (let item of dataArray) {
        if (item.text.length > 100) {
            const warning = document.createElement("p");
            warning.innerHTML = `This is one of our 
                <a href="https://www.instagram.com/milkeebraziliancustard/p/CqoHk0jJsgP/" 
                   target="_blank" 
                   style="color:crimson;">
                   featured highlights
                </a>!`;
            aboutSection.appendChild(warning);
        }
    }
}

// ✅ Call highlight function on button click
button.addEventListener("click", function () {
    populateAboutSection(aboutData);
    highlightLongAboutItems(aboutData);
    populateContactSection(contactData);
    window.open("https://www.instagram.com/milkeebraziliancustard/", "_blank");
});
