const editBtn = document.getElementById('edit');
const editNote = document.getElementById('editable-note');


function editContent() {

    if (editNote.contentEditable === true) {
        editNote.contentEditable = false;
    } else {
        editNote.contentEditable = true;
    }

}


editBtn.addEventListener('click', editContent)