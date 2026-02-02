module.exports = {
    name: "Sunnys Roofing",
    email: "sunnysroofing08@gmail.com",
    phoneForTel: "206-854-6718",
    phoneFormatted: "(206) 854-6718",
    address: {
        lineOne: "Edmonds, WA, United States, Washington",
        city: "Edmonds",
        state: "WA",
        zip: "98204",
        country: "US",
        mapLink: "https://maps.app.goo.gl/9dN16FNEh432kkJx6",
    },
    socials: {
        facebook: "https://www.facebook.com/p/Sunnys-roofing-LLC-100091642522299/",
        instagram: "",
        youtube: "",
        x: ""
    },
    //Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
