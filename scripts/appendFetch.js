

let getData = async(url)=>{
  let res = await fetch(url);
  let data = await res.json()

  return data;
}



let  append = (data,box)=>{
    data.forEach(elem => {
        let div= document.createElement("div");
        let details = document.createElement("div");
        let img = document.createElement("img")
        img.src = elem.strMealThumb;
       let p = document.createElement("p")
       p.innerText=`Type: ${elem.strTags}`;
       let area = document.createElement("p");
       area.innerText=`Area: ${elem.strArea}`
        let cat = document.createElement("p");
        cat.innerText=`Catogery: ${elem.strCategory}`
      let i1 = document.createElement("p");
      i1.innerText=`Ingrediants-1: ${elem.strIngredient1}`

      let i2 = document.createElement("p");
      i2.innerText=`Ingrediants-2: ${elem.strIngredient2}`
      let i3 = document.createElement("p");
      i3.innerText=`Ingrediants-3: ${elem.strIngredient3}`
      let i4 = document.createElement("p");
      i4.innerText=`Ingrediants-4: ${elem.strIngredient4}`
      

    div.append(img)
    details.append(cat,p,area,i1,i2,i3,i4)
    box.append(div,details)
      //  console.log(elem)
    });
}


export {getData,append};