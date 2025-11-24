// 1. The Dictionary
const translations = {
    
    pt: {
        index: 'INÍCIO',
        about: 'No Github',
        bowls: 'Tijelas',
        dropdown_menu1: 'Xícara de Matcha',
        dropdown_menu2: 'Tijela de Youkoya',
        dropdown_menu3: 'Xícara de Hakeme',
        dropdown_menu4: 'Tijela de Shigaraki',
        hero_item1: "Xícara de Chá Azul",
        hero_item1_description: "Feito à mão",
        saiba_mais_button: "Saiba mais",
        hero_item2: "Tijela da Era Taisho",
        hero_item2_description: "Pó de ouro",
        hero_item3: "Vaso verde",
        hero_item3_description: "Porcelana Fina",
        heading: "✨ A arte do Kintsugi 🏮",
        kintsugi: "Kintsugi (金継ぎ) é a arte japonesa de reparar cerâmica quebrada, emendando as áreas de ruptura com pó de ouro, prata ou platina. Ela evoca a filosofia japonesa do wabi-sabi: perceber a beleza nos aspectos imperfeitos, impermanentes e incompletos da vida e das coisas. Todos nós temos nossas falhas e imperfeições, todos nós fomos um pouco quebrados. E tá tudo bem :) O Kintsugi nos ensina que nossas imperfeições também fazem parte da nossa beleza e, com cada erro e ferida, crescemos mais fortes e mais sábios.",
        learn_more: 'História do Kintsugi',
        learn_more1: 'Saiba mais sobre o Kintsugi',
        learn_more2: 'Como fazer Kintsugi',
        learn_more3: 'Kintsugi e Trauma',
        carroussel: 'Olha esses lindos Kintsugi',
        carroussel_item1: 'Xícara Preta',
        carroussel_item2: 'Tijela Cinza',
        carroussel_item3: 'Xícara Decorativa',
        carroussel_item4: 'Vaso Branco',
        carroussel_item5: 'Tijela Azul da Meia-noite',
        carroussel_item6: 'Xícara Turquesa',
        flower1: 'Feitas à mão',
        flower2: 'Objetos são revividos',
        flower3: 'Material de Qualidade',
        flower4: 'A história é lembrada',
        flower_description1: 'Carrega todo o cuidado e atenção de quem fez o restauro.',
        flower_description2: 'Ao invés de ir pro lixo, os objetos podem continuar a serem usados.',
        flower_description3: 'Pode ser feito com pó de ouro, prata, bronze...',
        flower_description4: 'O momento da quebra é parte da história do objeto, ao invés de ser algo para ser esquecido. ',
        more: 'Veja mais Kintsugi',
        more_description: "São belos",
        philosophy: "Kintsugi e Filosofia",
        philosophy_description: "O Kintsugi nos lembra que, às vezes, as coisas quebram, desmoronam, param de funcionar, encontram seu fim...Mas isso é um aspecto natural da vida. Todos nós carregamos nossas cicatrizes e traumas, e todos nos lembramos do que perdemos e do que não pôde ser restaurado. Devemos valorizar nossas imperfeições, pois elas nos tornam quem somos. Temos que celebrar não apenas o que temos, mas também o que se foi. Como puro ouro, nós brilhamos e resplandecemos com a beleza que resulta de termos sido quebrados. Faça as pazes consigo mesmo. Entenda que não fomos feitos para ser perfeitos e, com cada erro e equívoco, devemos também dar um passo adiante para nos tornarmos melhores."
}};


const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('change', () => {
    // If checked, switch to PT. If unchecked, switch to EN.
    const lang = languageToggle.checked ? 'pt' : 'en';
    changeLanguage(lang);
});

// 2. The Language Changer Function
function changeLanguage(lang) {
    
    // A. Select all elements with the data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    // B. Loop through them and update text content
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Check if the key exists in the translation object
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // C. Update the HTML lang attribute (Important for accessibility/SEO)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

}

// 3. Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a saved preference, otherwise default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});