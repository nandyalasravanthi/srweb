var skills = '<div class="col-sm-3"><img src="./img/%data%.png" alt="MySkills" class="img-responsive img-circle"></div>';
var skills_array = ['1','2','3','4','5','6','7','8','9'];
var skills_new = "";

for(var i=1;i<skills_array.length;i++){
  skills_new = skills.replace('%data%', skills_array[i]);
  $('.skills-section-images').append(skills_new);
}
