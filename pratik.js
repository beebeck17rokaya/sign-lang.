function showSection(sectionId) {
    // Hide all sections first
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#features').style.display = 'none';
    document.querySelector('#output').style.display = 'none';

    // Show the selected section
    document.querySelector(`#${sectionId}`).style.display = 'block';
}
