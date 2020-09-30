const editorWindow = document.querySelector(".editor--js"); //przypisuje do stałej editorWindow zawartość klasy editor--js
const saveButton = document.querySelector(".save--js"); // tworze stałą i podpinam do niej klasę reprezentującą przycisk
const loadButton = document.querySelector(".load--js"); // tworzę kolejny przycisk z przypisaną klasą
const clearButton = document.querySelector(".clear--js"); // podpięcię przycisku czyszczenia

saveButton.addEventListener("click", (e) => {
  e.preventDefault(); //zapobiega przeładowaniu formularza
  localStorage.setItem("content", editorWindow.value);
  document.querySelector(".info--js").innerHTML = "Zapis ukończony";
});
//podpinam do obiektu /przysisku zapisz/ akcję na klik, która zapisuje zawartość okna edytora do local storage pod kluczem content

loadButton.addEventListener("click", (e) => {
  const savedContent = localStorage.getItem("content"); //przypina do stałej contentEditor zawartość klucza 'content'
  e.preventDefault();
  if (savedContent) {
    editorWindow.value = localStorage.getItem("content"); // zwracam  zawartość zmiennej editorContet jako zawartoś okna edytora
    console.log(editorWindow.value);
  } else {
    document.querySelector(".info--js").innerHTML = "Schowek jest pusty";
  }
});

clearButton.addEventListener("click", (e) => {
  const savedContent = localStorage.getItem("content");
  e.preventDefault();
  if (savedContent) {
    localStorage.removeItem("content");
    document.querySelector(".info--js").innerHTML =
      "Schowek został wyczyszczony";
      editorWindow.value = '';
  } else {
    document.querySelector(".info--js").innerHTML = "Schowek jest pusty";
  }
});
