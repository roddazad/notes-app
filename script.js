// ===============================
// DOM ELEMENTS
// ===============================
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

// ===============================
// EVENT: Load Notes on Page Load
// ===============================
window.addEventListener("load", loadNotes);

// ===============================
// EVENT: Add Note Button Clicked
// ===============================
addNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    // Check if note input is not empty
    if (noteText !== "") {
        // Save note to local storage
        saveNotes(noteText);
        // Clear input box
        noteInput.value = "";
        // Reload notes on the page
        loadNotes();
    } else {
        alert("Please write something before adding a note");
    }
});
// ===============================
// FUNCTION: Save Note to Local Storage
// ===============================
function saveNotes(note) {
    let notes = getNotesFromStorage();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
};

// ===============================
// FUNCTION: Get Notes from Local Storage
// ===============================
function getNotesFromStorage() {
    const  notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
};

// ===============================
// FUNCTION: Load and Display Notes
// ===============================
function loadNotes() {
    // clear current note in the DOM noteContainer
    notesContainer.innerHTML = "";
    const notes = getNotesFromStorage();
     // Loop through each note and create a card
     notes.forEach((notes, index) => {
        const noteCards = document.createElement("div");
        noteCards.classList.add("note-card")

        //note Content
        const noteText = document.createElement("div");
        noteText.classList.add("note-text");

        // Note actions: Edit & Delete
         const actions = document.createElement("div");
         actions.classList.add("note-actions");
             // Edit Button
             const editBtn = document.createElement("button");
             editBtn.textContent = "Edit";
             editBtn.classList.add("edit-btn");
             editBtn.addEventListener("click", () => editNote(index));
             // Delete Button
             const deleteBtn = document.createElement("button");
             deleteBtn.textContent = "Delete";
             deleteBtn.classList.add("delete-btn");
             deleteBtn.addEventListener("click", () => deleteNote(index));
        
        // Append the edit and delete buttons to the action div
        

     })

};