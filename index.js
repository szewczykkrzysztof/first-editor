

const contentEditor = localStorage.getItem('content');  //przypina do stałej contentEditor zawartość klucza 'content', jeśli go nie ma zwraca wartość null

let textBoxEditor = '';    //tworzę zmienną myEditor z pustą zawartością

if (contentEditor) {
    textBoxEditor = contentEditor;
}
// Jeśli contentEditor nie jest pusty, przypisz do zmiennej textBoxEditor jego zawartość

const text = document.querySelector('.editor--js'); //przypisuje do stałej text zawartość okienka edytora (klasa editor--js)

text.value = textBoxEditor;

console.log(text);

const saveButton = document.querySelector('.save--js');

console.log(saveButton);

const openButton = document.querySelector('.open--js');

console.log(openButton);


saveButton.addEventListener("click", () => {
    localStorage.setItem('content',text.value);
  });