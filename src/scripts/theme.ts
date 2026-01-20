const button = document.getElementById("theme-toggle") as HTMLButtonElement | null;

const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (button) button.textContent = theme === "dark" ? "🌙" : "☀️";
};

const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
applyTheme(saved);

button?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
});
