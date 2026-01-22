const themeSelector = document.querySelector("select")
const logo= document.querySelector("img")
function changeTheme() {
const value = themeSelector.value
if (value === "Dark") {
document.body.classList.add("dark") 
logo.src = "DarkBYU-Idaho-Logo-Box.svg"
}
else {
    document.body.classList.remove("dark");
    logo.src = "logo.webp"
}
}
themeSelector.addEventListener('change', changeTheme);

// non light and dark version, delete all above.