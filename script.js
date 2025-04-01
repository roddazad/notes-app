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
    const noteText = noteInput.ariaValueMax.trim();
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