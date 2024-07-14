// meals


let rowmeals = document.getElementById("rowmeals");
let rowdetailes = document.getElementById("rowdetailes");
let rowcategary = document.getElementById("rowcategary");
let areaone = document.getElementById("areaone");
let gradientdata = document.getElementById("gradientdata");
let inerrcategory = document.getElementById("inerrcategory");
let categarydetails = document.getElementById("categarydetails");
let rowarea = document.getElementById("rowarea");
let areadetails = document.getElementById("areadetails");
let rowgfilter = document.getElementById("rowgfilter");
let  greddetailes = document.getElementById("greddetailes");







async function dataameals() {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
  );

  const res = await api.json();

  // console.log(res);
  displaymeals(res.meals);
}
dataameals();

function displaymeals(arrrr) {
  var hello = "";
  for (var i = 0; i < arrrr.length; i++) {
    hello += `
    
                    <div class="col-md-3">
                        <div  class="image-two position-relative overflow-hidden rounded-2" >
                          <img src="${arrrr[i].strMealThumb}" class="w-100" alt="" />
                          <div
                            class="info p-3 position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center" id="${arrrr[i].idMeal}">
                            <h3>${arrrr[i].strMeal}</h3>
                          </div>
                        </div>
                      </div>
    
    `;
  }

  rowmeals.innerHTML = hello;
}

// displayditales

async function ditalesmeals(s) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${s}`
  );

  const ress = await result .json();

  // console.log(ress);
  displayditales(ress.meals);
}

var inner = "";
function displayditales(meals) {
  inner = `
 
     <div class="col-md-4">
            <img src="${meals[0].strMealThumb}" class="w-100 rounded-2" alt="" />
            <h2>${meals[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
          ${meals[0].strInstructions}
            </p>
            <h3>
              <span class="fw-bolder">Area :</span>
            ${meals[0].strArea}
            </h3>
            <h3>
              <span class="fw-bolder">Category :</span>
              ${meals[0].strCategory}
            </h3>
            <h3>Recipes :</h3>

            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient7}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient6}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient5}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure2}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient9}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient8}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient2}</li>
            </ul>
            <h3 class="mb-4 d-block">Tags :</h3>
             <a class="text-decoration-none btn btn-success" target="_blank" href="">Source</a>
             <a class="text-decoration-none btn btn-danger"  target="_blank" href="https://www.youtube.com/watch?v=4aZr5hZXP_s">Youtube</a>
          </div>
  `;
  rowdetailes.innerHTML = inner;
}

 let x = document.querySelector(".child");
x.addEventListener("click", function (e) {
  const num = Number(e.target.id);
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".mealsthree").classList.replace("d-none", "d-block");
  ditalesmeals(num);
});




// displycategary

async function dataa() {
  const apid = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  const resss = await apid.json();

  // console.log(res);
  displycategary(resss.categories);
}
dataa();

function displycategary(arr) {
  var cartona = "";
  for (var i = 0; i < arr.length; i++) {
    cartona += `
    
    <div class="col-md-3">
            <div class="image position-relative overflow-hidden">
              <img src="${arr[i].strCategoryThumb}" class="w-100" alt="" />
              <div
                class="layer p-2 position-absolute start-0 end-0 top-0 bottom-0 text-center" >
                <h2 >${arr[i].strCategory}</h2>
                <div class="intro"></div>
                <p class="text-black">
                 ${arr[i].strCategoryDescription}
                </p>
              </div>
            </div>
          </div>
    
    `;
  }

  rowcategary.innerHTML = cartona;



}



// Filter by Category 


async function filtercategory(z) {
  const x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`);

const g = await x.json()
// console.log(g)
displaycf(g.meals)
}



function displaycf(arrr) {
  var helloo = "";
  for (var i = 0; i < arrr.length; i++) {
    helloo += `
    
                    <div class="col-md-3">
                        <div  class="image-two position-relative overflow-hidden rounded-2" >
                          <img src="${arrr[i].strMealThumb}" class="w-100" alt="" />
                          <div
                            class="info p-3 position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center" id="${arrr[i].idMeal}">
                            <h3>${arrr[i].strMeal}</h3>
                          </div>
                        </div>
                      </div>
    
    `;
  }

  inerrcategory.innerHTML = helloo;
}




let categaryfilter = document.querySelector(".categaryfilter")
categaryfilter.addEventListener("click", function(e){
let el = e.target.previousElementSibling.innerHTML;
document.querySelector(".categary").classList.replace("d-block", "d-none");
document.querySelector(".categary-two").classList.replace("d-none", "d-block");
filtercategory(el)
})



// details categories 

async function ditalesccategory(y) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${y}`
  );

  const ress = await result .json();

  // console.log(ress);
  displayditalescagetory(ress.meals);
}



var innerr = "";
function displayditalescagetory(mealss) {
  innerr = `
 
     <div class="col-md-4">
            <img src="${mealss[0].strMealThumb}" class="w-100 rounded-2" alt="" />
            <h2>${mealss[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
          ${mealss[0].strInstructions}
            </p>
            <h3>
              <span class="fw-bolder">Area :</span>
            ${mealss[0].strArea}
            </h3>
            <h3>
              <span class="fw-bolder">Category :</span>
              ${mealss[0].strCategory}
            </h3>
            <h3>Recipes :</h3>

            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient7}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient1}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strMeasure1}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient6}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient4}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient5}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strMeasure2}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strMeasure3}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strMeasure4}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient9}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient8}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient3}</li>
              <li class="alert alert-info m-2 p-1">${mealss[0].strIngredient2}</li>
            </ul>
            <h3 class="mb-4 d-block">Tags :</h3>
             <a class="text-decoration-none btn btn-success" target="_blank" href="">Source</a>
             <a class="text-decoration-none btn btn-danger"  target="_blank" href="https://www.youtube.com/watch?v=4aZr5hZXP_s">Youtube</a>
          </div>
  `;
  categarydetails.innerHTML = innerr;
}

 let m = document.querySelector(".demo");
m.addEventListener("click", function (e) {
  const numm = Number(e.target.id);
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-none", "d-block");
  ditalesccategory(numm);
});


















// Area data

async function areadata() {
  const apii = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  const response = await apii.json();
  // console.log(response);
  displayarea(response.meals);
}

areadata();

function displayarea(areaa) {
  var area = "";
  for (var i = 0; i < areaa.length; i++) {
    area += `
    
                  <div class="col-md-3">
                    <div class="item text-center cursor-pointer">
                    
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${areaa[i].strArea}</h3>
                       <div class="intro"></div>

                    </div>
                  </div>

    `;
  }

  areaone.innerHTML = area;
}

// area fliterArea 

async function filterarea(k) {
  const v = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${k}`);

const n = await v.json()
console.log(n)

displaycfff(n.meals)
}
// filterarea()


function displaycfff(arrrr) {
  var hellooo = "";
  for (var i = 0; i < arrrr.length;i++) {

   
    hellooo += `
    
                    <div class="col-md-3">
                        <div  class="image-two position-relative overflow-hidden rounded-2" >
                          <img src="${arrrr[i].strMealThumb}" class="w-100" alt="" />
                          <div
                            class="info p-3 position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center" id="${arrrr[i].idMeal}">
                             
                            <h3>${arrrr[i].strMeal}</h3>
                            
                          </div>
                        </div>
                      </div>
    
    `;
  }

  rowarea.innerHTML = hellooo;
}

let areaonee = document.querySelector(".reaaa")
areaonee.addEventListener("click", function(e){
  // console.log(e.target.previousElementSibling)
let ell = e.target.previousElementSibling.innerHTML
document.querySelector(".areaone").classList.replace("d-block", "d-none");
document.querySelector(".areatwo").classList.replace("d-none", "d-block");
filterarea(ell)
})



// details Area 

async function ditalesarea(t) {
  const resultt = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${t}`
  );

  const resss = await resultt .json();

  console.log(resss);
  displayditalesarea(resss.meals);
}



var innerrr = "";
function displayditalesarea(meals) {
  innerrr = `
 
     <div class="col-md-4">
            <img src="${meals[0].strMealThumb}" class="w-100 rounded-2" alt="" />
            <h2>${meals[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
          ${meals[0].strInstructions}
            </p>
            <h3>
              <span class="fw-bolder">Area :</span>
            ${meals[0].strArea}
            </h3>
            <h3>
              <span class="fw-bolder">Category :</span>
              ${meals[0].strCategory}
            </h3>
            <h3>Recipes :</h3>

            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient7}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient6}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient5}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure2}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient9}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient8}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient2}</li>
            </ul>
            <h3 class="mb-4 d-block">Tags :</h3>
             <a class="text-decoration-none btn btn-success" target="_blank" href="">Source</a>
             <a class="text-decoration-none btn btn-danger"  target="_blank" href="https://www.youtube.com/watch?v=4aZr5hZXP_s">Youtube</a>
          </div>
  `;
  areadetails.innerHTML = innerrr;
}

 let w = document.querySelector(".demoo");
w.addEventListener("click", function (e) {
  const nummm = Number(e.target.id);
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".areathree ").classList.replace("d-none", "d-block");
  ditalesarea(nummm);
});




// gredient data


async function gredientdata() {
  const apia = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  const resp = await apia.json();
  // console.log(resp);
  displaygredient(resp.meals);

 
}

gredientdata();

function displaygredient(show) {
  var info = "";
  for (var i = 0; i < 20; i++) {
   info += `
    
      <div class="col-md-3">
                    <div class="inner text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${show[i].strIngredient}</h3>
                        <p id="textt">${show[i].strDescription}</p>
        
                    </div>
                </div>

    `;

 
  }

  gradientdata.innerHTML = info;



}





// gredient filter 


async function filtergredient(l) {
  const v = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${l}`);

const n = await v.json()
console.log(n)

displaygredientt(n.meals)
}
// filterarea()


function displaygredientt(arrrrr) {
  var helloooo = "";
  for (var i = 0; i < arrrrr.length;i++) {

   
    helloooo += `
    
                    <div class="col-md-3">
                        <div  class="image-two position-relative overflow-hidden rounded-2" >
                          <img src="${arrrrr[i].strMealThumb}" class="w-100" alt="" />
                          <div
                            class="info p-3 position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center" id="${arrrrr[i].idMeal}">
                             
                            <h3>${arrrrr[i].strMeal}</h3>
                            
                          </div>
                        </div>
                      </div>
    
    `;
  }

  rowgfilter.innerHTML = helloooo;
}

let gdata = document.querySelector(".gdata")
gdata.addEventListener("click", function(e){
  // console.log(e.target.previousElementSibling)
let elll = e.target.previousElementSibling.innerHTML
document.querySelector(".gredientone").classList.replace("d-block", "d-none");
document.querySelector(".gredientwo").classList.replace("d-none", "d-block");
filtergredient(elll)
})




// details gredient

async function ditalesgredient(m) {
  const resulttt = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${m}`
  );

  const ressss = await resulttt .json();

  console.log(ressss);
  displayditalesgredient(ressss.meals);
}



var innerrrr = "";
function displayditalesgredient(meals) {
  innerrrr = `
 
     <div class="col-md-4">
            <img src="${meals[0].strMealThumb}" class="w-100 rounded-2" alt="" />
            <h2>${meals[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
          ${meals[0].strInstructions}
            </p>
            <h3>
              <span class="fw-bolder">Area :</span>
            ${meals[0].strArea}
            </h3>
            <h3>
              <span class="fw-bolder">Category :</span>
              ${meals[0].strCategory}
            </h3>
            <h3>Recipes :</h3>

            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient7}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure1}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient6}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient5}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure2}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strMeasure4}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient9}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient8}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient3}</li>
              <li class="alert alert-info m-2 p-1">${meals[0].strIngredient2}</li>
            </ul>
            <h3 class="mb-4 d-block">Tags :</h3>
             <a class="text-decoration-none btn btn-success" target="_blank" href="">Source</a>
             <a class="text-decoration-none btn btn-danger"  target="_blank" href="https://www.youtube.com/watch?v=4aZr5hZXP_s">Youtube</a>
          </div>
  `;
  greddetailes.innerHTML = innerrrr;
}

 let s = document.querySelector(".gredtwo");
s.addEventListener("click", function (e) {
  const nummm = Number(e.target.id);
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-none", "d-block");
  ditalesgredient(nummm);
});




// By Letter
 async function searchLetterr(letter) {
  // document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)

const data = await res.json();
if (data.meals != null) {
  dataameals(data.meals);
  }
// document.getElementById("loading").classList.add("d-none")
}

let searchName = document.getElementById("searchName")
console.log(searchName)
searchName.addEventListener("input",function(e){
  console.log(e.target.value)
  displaysearch( e.target.value)

})


async function searchname(namee) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${namee}`)

const data = await res.json();
if (data.meals != null) {
  displaysearch(data.meals);
  }
// document.getElementById("loading").classList.add("d-none")
}

let searchLetter = document.getElementById("searchLetter")
console.log(searchLetter)
searchLetter.addEventListener("input",function(e){
 console.log(e.target.value)
  searchname( e.target.value)



})

function displaysearch(arrrr) {
  var hell = "";
  for (var i = 0; i < arrrr.length; i++) {
    hell += `
    
                    <div class="col-md-3">
                        <div  class="image-two position-relative overflow-hidden rounded-2" >
                          <img src="${arrrr[i].strMealThumb}" class="w-100" alt="" />
                          <div
                            class="info p-3 position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center" id="${arrrr[i].idMeal}">
                            <h3>${arrrr[i].strMeal}</h3>
                          </div>
                        </div>
                      </div>
    
    `;
  }
document.getElementById("rowsearch").innerHTML = hell;
  
}



let categories = document.getElementById("categories");
let arealink = document.getElementById("area-link");
let gredient = document.getElementById("gredient")
let contact = document.getElementById("contact")
let search = document.getElementById("search")

categories.addEventListener("click", function(){
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".categary").classList.replace("d-none", "d-block");
  document.querySelector(".mealsthree").classList.replace("d-block", "d-none");
  document.querySelector(".areaone").classList.replace("d-block", "d-none");
  document.querySelector(".gredientone").classList.replace("d-block", "d-none");
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-block", "d-none");
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-block", "d-none");
  document.querySelector(".contact").classList.replace("d-block", "d-none");
  document.querySelector(".search").classList.replace("d-block", "d-none");
});

arealink.addEventListener("click", function(){
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".categary").classList.replace("d-block", "d-none");
  document.querySelector(".mealsthree").classList.replace("d-block", "d-none");
  document.querySelector(".areaone").classList.replace("d-none", "d-block");
  document.querySelector(".gredientone").classList.replace("d-block", "d-none");
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-block", "d-none");
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".areathree ").classList.replace("d-block", "d-none");
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-block", "d-none");
  document.querySelector(".contact").classList.replace("d-block", "d-none");
  document.querySelector(".search").classList.replace("d-block", "d-none");
  
});

gredient.addEventListener("click", function(){
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".categary").classList.replace("d-block", "d-none");
  document.querySelector(".mealsthree").classList.replace("d-block", "d-none");
  document.querySelector(".areaone").classList.replace("d-block", "d-none");
  document.querySelector(".gredientone").classList.replace("d-none", "d-block");
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-block", "d-none");
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".areathree ").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-block", "d-none");
  document.querySelector(".contact").classList.replace("d-block", "d-none");
  document.querySelector(".search").classList.replace("d-block", "d-none");
  
});

contact.addEventListener("click", function(){
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".categary").classList.replace("d-block", "d-none");
  document.querySelector(".mealsthree").classList.replace("d-block", "d-none");
  document.querySelector(".areaone").classList.replace("d-block", "d-none");
  document.querySelector(".gredientone").classList.replace("d-block", "d-none");
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-block", "d-none");
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".areathree ").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-block", "d-none");
  document.querySelector(".contact").classList.replace("d-none", "d-block");
  document.querySelector(".search").classList.replace("d-block", "d-none");
  
});

search.addEventListener("click", function(){
  document.querySelector(".mealstwo").classList.replace("d-block", "d-none");
  document.querySelector(".categary").classList.replace("d-block", "d-none");
  document.querySelector(".mealsthree").classList.replace("d-block", "d-none");
  document.querySelector(".areaone").classList.replace("d-block", "d-none");
  document.querySelector(".gredientone").classList.replace("d-block", "d-none");
  document.querySelector(".categary-two").classList.replace("d-block", "d-none");
  document.querySelector(".categary-three ").classList.replace("d-block", "d-none");
  document.querySelector(".areatwo").classList.replace("d-block", "d-none");
  document.querySelector(".gredientwo").classList.replace("d-block", "d-none");
  document.querySelector(".areathree ").classList.replace("d-block", "d-none");
  document.querySelector(".gradientthree").classList.replace("d-block", "d-none");
  document.querySelector(".contact").classList.replace("d-block", "d-none");
  document.querySelector(".search").classList.replace("d-none", "d-block");
  
})



let closee = document.querySelector(".closee");
let navmenu = document.querySelector(".nav-menu");
let menu = Array.from(document.querySelectorAll(".menu"));

closee.onclick = function closemenu() {
  closee.classList.toggle("fa-times");
  navmenu.classList.toggle("active");
};

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    navmenu.classList.toggle("active");
    closee.classList.replace("fa-times", "fa-bars");
  });
}


// regex 


let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordAlert");
let repasswordInput = document.getElementById("repasswordInput");
let submit = document.getElementById("submitBtn");



function Validation(element) {

  var regex ={
    nameInput: /^[A-Z][a-z]{2,8}$/,
    emailInpu:/^[a-z0-9]{3,16}@(gmail|yahoo)\.com$/,
      phoneInput:/^(20 | \+2)01[0125][0-9]{8}$/,
      ageInput:/^[0-9]{0,3}$/,
      passwordInput: /^.{4,10}$/,
      repasswordInput:/^.{5,20}$/


  }
if(regex[element.id].test(element.value) == true){
  element.classList.add("is-valid");
  element.classList.remove("is-invalid");
  element.nextElementSibling.classList.replace("d-block", "d-none")
  console.log("much")

}else {
  element.classList.add("is-invalid");
  element.classList.remove("is-valid");
  element.nextElementSibling.classList.replace("d-none", "d-block")
  console.log("no much")

}
}

