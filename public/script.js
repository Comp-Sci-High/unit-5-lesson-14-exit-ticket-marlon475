// Create a function that tests the post route handler [2 pts]


const base = "https://redesigned-enigma-5gxgw7g4wgppf5wx.github.dev"
// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
async function createPotion() {
    try {
        // fill in the path
        const response = await fetch(base + "/create-potion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: "Flying Potion",
                effect: "Allows you to fly",
                ingredients: "Swan Feathers, Eagle Tongue, Hawk Claws",
                color: "Baby Blue",
                isExplosive: false
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
createPotion()
