// ================================
// loadNavbar.js
// ================================

/**
 * Load the navbar from an external HTML file into the DOM,
 * set the active link, initialize the language dropdown,
 * and apply the current language to all elements.
 */
async function loadNavbar() {
    try {
        // Fetch the navbar HTML from the components folder
        const response = await fetch("components/navbar.html");
        const html = await response.text();

        // Insert the navbar into the DOM
        document.getElementById("navbar-container").innerHTML = html;

        // Highlight the active page link in the navbar
        setActiveLink();

        // Populate the language select dropdown and attach listeners
        loadLanguages();

        // Apply the currently saved language AFTER the navbar is loaded
        const savedLang = localStorage.getItem("lang") || currentLang;
        setLanguage(savedLang);

    } catch (error) {
        console.error("Failed to load navbar:", error);
    }
}

/**
 * Highlight the current page link in the navbar.
 * This compares the current URL to each link's href.
 */
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/**
 * Populate the language dropdown with available options
 * and set up the change listener to switch languages.
 */
function loadLanguages() {
    const select = document.getElementById("languageSelect");
    const languages = ["de", "en"]; // supported languages

    // Clear any existing options to avoid duplicates
    select.innerHTML = "";

    // Add language options
    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang.toUpperCase(); // display as DE / EN
        select.appendChild(option);
    });

    // Set the dropdown to the currently saved language
    select.value = localStorage.getItem("lang") || currentLang;

    // Add a listener to switch language when the user selects a different option
    select.addEventListener("change", e => {
        setLanguage(e.target.value);
    });
}

// ================================
// INFO POPUP FUNCTIONS
// ================================

function openInfo(){
    document.getElementById("infoPopup").style.display = "flex";
}

function closeInfo(){
    document.getElementById("infoPopup").style.display = "none";
}