import {books} from "./components/bookArray.js";
import {displayMessage} from "./components/emptyMessage.js";

console.log(books);

let arrangeBook = books;

function sortBooks() {
    const createHtml = document.querySelector(".bookList")

    if (arrangeBook.length === 0) {
        displayMessage("warning", "No books found", ".messages");
    }

    createHtml.innerHTML = "";

    arrangeBook.forEach(function(item) {
        createHtml.innerHTML += `<div class="box"><h2>${item.title} </h2>
        <p>${item.isbn}</p> 
        <button class="button" data-item="${item.isbn}">Remove Book</button></div>`
        ;
    });


    const deleteBttn = document.querySelectorAll(".button");

    deleteBttn.forEach(function (removeBttn) {
        removeBttn.addEventListener("click", removeFromList);
    });

} 

sortBooks();

function removeFromList() {
    console.log(event);

    const deleteItem = event.target.dataset.item;

    const newList = arrangeBook.filter(filterItems);

    function filterItems(item) {
        if(deleteItem !== item.isbn) {
            return true;
        }
    }

    arrangeBook = newList;
    console.log(arrangeBook);
    sortBooks();

    }