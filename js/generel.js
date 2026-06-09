const menuIkon = document.querySelector(".menuikon");
const nav = document.querySelector(".headernav");

menuIkon.addEventListener("click", menuClicked);
function menuClicked() {
  menuIkon.classList.toggle("menuopen");
  nav.classList.toggle("menuopen");
}

//dropdown menuen, så den vises både ved hover(vha. css) og click så den kan bruges i mobil
const ikon = document.querySelector(".dropdown-ikon");
const indhold = document.querySelector(".dropdown-indhold");
const dropdown = document.querySelector("#dropdown-menu");

dropdown.addEventListener("click", dropdownClicked);
function dropdownClicked() {
  indhold.classList.toggle("dropdown-open");
  ikon.classList.toggle("dropdown-open");
}

//forstørrelse af billeder - notes to self
//Udskifte indholdet af popovertarget vha. js, så jeg ikke skal indsætte samme billede 2 gange i html'en
const popup = document.getElementById("imgpopup");
const popoverImg = document.getElementById("imgpopover");

//Det kan gøres ved at lave en funktion der sker (event) før popoveren vises,
popup?.addEventListener("beforetoggle", function (event) {
  console.log(event.newState);
  //specificer at eventet kun skal ske hvis popoveren åbnes, ikke når den lukkes
  //beforetoggle kan nemlig bruges både før-åbning og før-luk.
  if (event.newState === "open") {
    //Identificer den knap der er blevet trykket på(:focus) - dens popovertarget matcher vores const popup's id
    const triggerBtn = document.querySelector(`[popovertarget="${popup.id}"]:focus`);
    //tjek om den knap (popovertarget) har et billede nested i sig.
    if (triggerBtn) {
      const img = triggerBtn.querySelector("img");
      //hvis den har, SÅ kan vi kopiere dets src og alt til det popoverens img tag
      console.log(img.src, img.alt);
      if (img) {
        popoverImg.src = img.src;
        popoverImg.alt = img.alt;
      }
    }
  }
});
//Tl;DR - Sådan virker det:
// 1. if: HVIS popoveren er VED at ÅBNE
// 2. if: HVIS knappen der er trykket på, matcher vores popovers id
// 3. if: HVIS der ligger et img-tag i knappen
// 4. event: SÅ tag img-taggets src og alt, og giv deres værdi til det tomme img-tag der ligger i popoveren i HTML'en
// 5. look at the bigger picture;))))

//Nye ting jeg har lært;
// beforetoggle = somewhere between click and popover??
// bedre forståelse af at bruge if - betingelser/forudsætning for at kunne gå videre til næste skridt/aktion.
//kilder: https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
