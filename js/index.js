document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".option"); 
    const container = document.querySelector("main .side.aluno"); 
    const selectOP = document.getElementById("select-op")
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
            buttons.forEach(btn => btn.classList.remove("select"));
            
            button.classList.add("select");

            container.classList.remove("aluno", "professor", "admin");
            if (button.classList.contains("aluno")) {
                container.classList.add("aluno");
                selectOP.textContent = "aluno";
            } else if (button.classList.contains("professor")) {
                container.classList.add("professor");
                selectOP.textContent = "professor";
            } else if (button.classList.contains("admin")) {
                container.classList.add("admin");
                selectOP.textContent = "administrador";
            }
        });
    });
});

