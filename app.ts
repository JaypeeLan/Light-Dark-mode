const toggleSwitch = document.querySelector(
  'input[type="checkbox"]'
)! as HTMLInputElement;
const nav = document.getElementById("nav")! as HTMLElement;
const toggleIcon = document.getElementById("toggle-icon")! as HTMLElement;
const image1 = document.getElementById("image1")! as HTMLImageElement;
const image2 = document.getElementById("image2")! as HTMLImageElement;
const image3 = document.getElementById("image3")! as HTMLImageElement;
const textBox = document.getElementById("text-box")! as HTMLElement;

const USE_DARK_THEME: string = "dark";
const USE_LIGHT_THEME: string = "light";

// toggle images
const imageToggle = (color: string) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = (isDark: string) => {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode ";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageToggle("dark") : imageToggle("light");
};

// toggle theme
const switchTheme = (e: any) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    // set dark mode to true
    toggleDarkLightMode(USE_DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    // set dark mode to false

    toggleDarkLightMode(USE_LIGHT_THEME);
  }
};

// Event Listner
toggleSwitch.addEventListener("change", switchTheme);

// get user theme from local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
