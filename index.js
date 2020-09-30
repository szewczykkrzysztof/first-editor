const savedContent = localStorage.getItem("content");
//przypina do stałej contentEditor zawartość klucza 'content', jeśli go nie ma zwraca wartość null

let editorContent = ""; //tworzę zmienną z pustą zawartością

if (savedContent) {
  editorContent = savedContent;
}
// Jeśli savedContent nie jest pusty, przypisz do zmiennej textBoxEditor jego zawartość

const editorWindow = document.querySelector(".editor--js"); //przypisuje do stałej editorWindow zawartość klasy editor--js
const saveButton = document.querySelector(".save--js"); // tworze stałą i podpinam do niej klasę reprezentującą przycisk
const loadButton = document.querySelector(".load--js"); // tworzę kolejny przycisk z przypisaną klasą
const clearButton = document.querySelector(".clear--js"); // podpięcię przycisku czyszczenia

saveButton.addEventListener("click", (e) => {
  e.preventDefault(); //zapobiega przeładowaniu formularza
  localStorage.setItem("content", editorWindow.value);
});
//podpinam do obiektu /przysisku zapisz/ akcję na klik, która zapisuje zawartość okna edytora do local storage pod kluczem content

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
  editorWindow.value = localStorage.getItem("content"); // zwracam  zawartość zmiennej editorContet jako zawartoś okna edytora
  console.log(editorWindow.value);
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (savedContent) {
  localStorage.removeItem("content");
  document.querySelector(".info--js").innerHTML = "Schowek został wyczyszczony";}
  else {
    document.querySelector(".info--js").innerHTML = "Schowek jest pusty"
  }
});
