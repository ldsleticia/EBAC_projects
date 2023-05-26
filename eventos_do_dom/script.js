function onSubmit(event) {
  event.preventDefault();
  console.log("onSubmit");
}

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);


document.addEventListener("openModal", (e) => {
  console.log(e.detail);
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY === 0) {
    const openFaqModal = new CustomEvent("openModal", {
      detail: { modalName: "faq" },
    });
    document.dispatchEvent(openFaqModal);
  }

  if (
    window.scrollY >
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  ) {
    const openFaqModal = new CustomEvent("openModal", {
      detail: { modalName: "newsletter" },
    });
    document.dispatchEvent(openFaqModal);
  }
});
