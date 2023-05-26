const form = document.querySelector("form");

const handleSubmit = (onSubmit, onError, self) => {
  const nameInput = self.querySelector("input#username");
  console.log(self);
  if (nameInput.value.length < 5) {
    return onError();
  }
  onSubmit();
};

const error = () => {
  console.log("erro");
};

const submit = () => {
  console.log("enviou");
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleSubmit(submit, error, this);
});
