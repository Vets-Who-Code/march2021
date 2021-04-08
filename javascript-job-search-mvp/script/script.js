console.log('Hello, Vets Who Code!');

const darkMode = () => {
  const body = document.body;
  const button = document.getElementsByClassName('btn-primary');
  body.classList.toggle("dark-background");
  button.classList.toggle("dark-buttons");
}