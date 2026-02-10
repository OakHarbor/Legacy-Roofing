module.exports = {
    name: "Legacy Roofing",
    email: "admin@thelegacyroofers.com",
    phoneForTel: "615-717-4383",
    phoneFormatted: "(615) 717-4383",
    address: {
        city: "Nashville",
        state: "TN",
        mapLink: "https://maps.app.goo.gl/be6WnP81v8EX6c189",
    },
    socials: {
        facebook: "",
        instagram: "",
        youtube: "",
        x: ""
    },
    domain: "https://thelegacyroofers.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
