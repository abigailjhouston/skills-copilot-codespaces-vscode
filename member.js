function skillsMember(){
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var output = '';
    for(var i = 0; i < skills.length; i++){
        output += '<li>' + skills[i] + '</li>';
    }
    document.getElementById('skills').innerHTML = output;
}