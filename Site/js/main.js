const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  
$(function(){
    $('#brand').change(function(){
     color = $('#brand :selected').val();
     document.getElementById('num_1').style.color = 'white';
     document.getElementById('num_1').style.background = '#175B80';
})
    $('#model').change(function(){
        color = $('#model :selected').val();
        document.getElementById('num_2').style.color = 'white';
        document.getElementById('num_2').style.background = '#175B80';
})
    $('#group').change(function(){
        color = $('#group :selected').val();
        document.getElementById('num_3').style.color = 'white';
        document.getElementById('num_3').style.background = '#175B80';
})
    $('#type').change(function(){
        color = $('#type :selected').val();
        document.getElementById('num_4').style.color = 'white';
        document.getElementById('num_4').style.background = '#175B80';
})
    $('#chose_zap').change(function(){
        color = $('#chose_zap :selected').val();
        document.getElementById('num_5').style.color = 'white';
        document.getElementById('num_5').style.background = '#175B80';
})

    $('#model').change(function(){
        color = $('#model :selected').val();
        document.getElementById('num_span_1').style.background = '#175B80';
})
    $('#group').change(function(){
        color = $('#group :selected').val();
        document.getElementById('num_span_2').style.background = '#175B80';
})
    $('#type').change(function(){
        color = $('#type :selected').val();
        document.getElementById('num_span_3').style.background = '#175B80';
})
    $('#chose_zap').change(function(){
        color = $('#chose_zap :selected').val();
        document.getElementById('num_span_4').style.background = '#175B80';
})
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn1"),
selectBtn2 = wrapper.querySelector(".select-btn2"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
let countries = ["Acura", "Alfa Romeo", "Aston Martin", "Audi"];
let countries2 = ["dadfsd", "Alfa dffadsfads", "Aston Martin", "Audi"];
function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
function addCountry2(selectedCountry) {
  options.innerHTML = "";
  countries2.forEach(country => {
      let isSelected = country == selectedCountry ? "selected" : "";
      let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
      options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();
function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));*/
$(document).ready(function()
{
    var brand_list=
    [
        "Volvo", "Saab", "Opel", "Audi", "BMW", "Jeep", "KIA", "MG", "Mini"
    ];
    $("#brand").select2({
        data:brand_list
    });
    var model_list=
    [
        "i3- sun 14-2253", "Saab", "Opel", "Audi", "BMW", "Jeep", "KIA", "MG", "Mini"
    ];
    $("#model").select2({
        data:model_list
    });
    var group_list=
    [
        "Для двигателя", "Saab", "Opel", "Audi", "BMW", "Jeep", "KIA", "MG", "Mini"
    ];
    $("#group").select2({
        data:group_list
    });
    var type_list=
    [
        "Поршневой вал", "Saab", "Opel", "Audi", "BMW", "Jeep", "KIA", "MG", "Mini"
    ];
    $("#type").select2({
        data:type_list
    });
    var chose_zap_list=
    [
        "Поршень", "Saab", "Opel", "Audi", "BMW", "Jeep", "KIA", "MG", "Mini"
    ];
    $("#chose_zap").select2({
        data:chose_zap_list
    });
});
$(document).ready(function(){
	$('.slider').slick({
        mobileFirst:true,
		arrows:true,
        rows: 2,
		dots:true,
		slidesToShow:1.5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:4,
                    rows: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
                    rows: 2
				}
			}
		]
	});
});
$(document).ready(function(){
    $('.slider2').slick({
        mobileFirst:true,
        arrows:true,
        dots:true,
        slidesToShow:2,
        rows:2,
        autoplay:true,
        speed:1000,
        autoplaySpeed:50000,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
});