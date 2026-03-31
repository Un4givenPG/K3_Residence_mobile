let currentLang = "en"
let translations = {}

async function loadLanguage(lang){
    const response = await fetch(`languages/${lang}.json`)

    if(!response.ok){
        console.error("Language file not found:", lang)
        return
    }

    translations = await response.json()
    applyTranslations()
    localStorage.setItem("lang", lang)
}

function applyTranslations(){

    document.querySelectorAll("[data-i18n]").forEach(el=>{
        const keys = el.dataset.i18n.split(".")
        let text = translations
        keys.forEach(k => text = text[k])
        
        if(text) el.textContent = text
    })

    // ✅ ALT Texte
    document.querySelectorAll("[data-i18n-alt]").forEach(el=>{
        const keys = el.dataset.i18nAlt.split(".")
        let text = translations
        keys.forEach(k => text = text[k])
        
        if(text) el.alt = text
    })

    // ✅ TITLE (Hover)
    document.querySelectorAll("[data-i18n-title]").forEach(el=>{
        const keys = el.dataset.i18nTitle.split(".")
        let text = translations
        keys.forEach(k => text = text[k])
        
        if(text) el.title = text
    })

    // ✅ CUSTOM TOOLTIP (für CSS)
    document.querySelectorAll("[data-i18n-tooltip]").forEach(el=>{
        const keys = el.dataset.i18nTooltip.split(".")
        let text = translations
        keys.forEach(k => text = text[k])
        
        if(text) el.setAttribute("data-tooltip", text)
    })
}

function setLanguage(lang){
    console.info("Switch language: ", lang)
    currentLang = lang
    loadLanguage(lang)
}