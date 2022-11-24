window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApi = "";

const getVisitCount = () => {
    let count = 32;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called API.");
        count = response.count
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.lof(error);
    });
    return count
}