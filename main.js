// Generate HTML Code

// Container
const container = document.createElement("section");
container.style.height = "100vh";
container.style.width = "100%";
container.style.backgroundColor = "#f3f3f3";
container.style.padding = "16px";

document.querySelector("body").appendChild(container);

// Heading
const header = document.createElement("div");
header.style.height = "80px";
header.style.paddingBottom = "16px";
header.style.borderBottom = "1px solid #d7d7d7";

container.appendChild(header);

const title = document.createElement("h3");
title.innerText = "Dynamic Color Palettes";
title.style.fontSize = "28px";
title.style.fontWeight = 700;
title.style.textAlign = "center";
title.style.marginBottom = "8px";

header.appendChild(title);

const subTitle = document.createElement("p");
subTitle.innerText = "You can copy the HEX Code to your clipboard by one click.";
subTitle.style.textAlign = "center";

header.appendChild(subTitle);

// Palette Container
const paletteContainer = document.createElement("ul");
paletteContainer.style.height = "calc(100vh - 160px)";
paletteContainer.style.overflowY = "auto";
paletteContainer.style.display = "flex";
paletteContainer.style.flexWrap = "wrap";
paletteContainer.style.gap = "16px";
paletteContainer.style.paddingTop = "16px";
paletteContainer.style.paddingBottom = "16px";

container.appendChild(paletteContainer);

// Regenerate Button
const footer = document.createElement("div");
footer.style.height = "80px";
footer.style.width = "100%";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.position = "fixed";
footer.style.bottom = "32px";
footer.style.left = "50%";
footer.style.transform = "translateX(-50%)";

container.appendChild(footer);
const regenerateButton = document.createElement("button");
regenerateButton.innerText = "Re-Generate Palette";
regenerateButton.style.padding = "16px 32px";
regenerateButton.style.fontSize = "16px";
regenerateButton.style.border = 0;
regenerateButton.style.outline = 0;
regenerateButton.style.backgroundColor = "#000000";
regenerateButton.style.color = "#f3f3f3";
regenerateButton.style.borderRadius = "8px";

footer.appendChild(regenerateButton)



// Generate Random Hex Code
const maxPalettes = 5;

const generateHexCode = () => {
    paletteContainer.innerHTML = "";

    for (let i = 0; i < maxPalettes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        // Palette Item
        const paletteItem = document.createElement("li");
        paletteItem.style.listStyleType = "none";
        paletteItem.style.padding = "8px";
        paletteItem.style.borderRadius = "8px";
        paletteItem.style.height = "max-content";
        paletteItem.style.width = "calc((100% - 64px) / 5)";
        paletteItem.style.backgroundColor = "#f0eded";

        paletteItem.innerHTML = `
            <div style="width:100%;height:400px;background-color:${randomHex};border-radius:6px"></div>
            <p style="text-align:center; padding:12px">${randomHex}</p>
    `;

        paletteContainer.appendChild(paletteItem);
    }
}

generateHexCode()



// OnClick Event On Button
regenerateButton.addEventListener("click", generateHexCode);