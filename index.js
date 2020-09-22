
document.cookie = 'name = Krzysiek';
document.cookie = 'secondKey = drugie ciastko';
console.log(document.cookie);

localStorage.setItem('firstItem','Some Thing');

console.log(localStorage.getItem('firstItem')); //pobiera zawartość klucza

localStorage.removeItem('firstItem');   //kasuje klucz firstItem

localStorage.setItem('Author','Krzysztof'); //zapisuje pod kluczem Author zawartość Krzysztof

const owner = {
    firstName : 'Krzysiek',
    surename : 'Szewczyk',
};

console.log(owner);

localStorage.setItem('Author',JSON.stringify(owner));  // Kodowanie obiektu do wewnętrznego formatu JSON

console.log(localStorage.getItem('Author')); //Pobiera zakodowaną zawartość klucza 'Author'

const pageAuthor = localStorage.getItem('Author');

console.log(JSON.parse(pageAuthor));    //Odkodowuje zawartośc zmienej zakodowanej w formacie JSON

const contentEditor = localStorage.getItem('content');  //przypina do stałej contentEditor zawartość klucza 'content', jeśli go nie ma zwraca wartość null

let myEditor = '';    //tworzę zmienną myEditor z pustą zawartością

if (contentEditor) {
    myEditor = contentEditor;
}
// Jeśli contentEditor nie jest pusty, przypisz do zmiennej myEditor jego zawartość
