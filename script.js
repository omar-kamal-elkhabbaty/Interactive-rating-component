let rates_div = document.querySelectorAll(".rates div"),
    h2 = document.querySelector("h2"),
    btn = document.querySelector("button"),
    select = document.getElementsByClassName("select")[0],
    thanks = document.getElementsByClassName("thanks")[0];
// Active Rate div
[...rates_div].forEach((ele) => {
    ele.addEventListener("click", (e) => {
        [...rates_div].forEach((val) => {
            val.classList.remove("rate_active");
        }, this);

        e.currentTarget.classList.add("rate_active")

        h2.textContent = `You selected ${e.currentTarget.textContent} out of 5`;
    })
}, this);
// submit 
btn.addEventListener("click", (e) => {
    if (h2.textContent !== "") {
        select.style.display = "none";
        thanks.style.display = "flex";
    }
})