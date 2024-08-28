let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let solid = document.getElementById('solid');
let mood = 'creat';
let temp;
// get total
function gettotal()
{
    //price.value 
    //يعنى هاتلى البيانات اللى هتتكتب فالvalue
    if(price.value !=''){
        let reslut = (+price.value + +taxes.value + +ads.value)
    - +discount.value;
    //عشان احط القيمة اللى هتطلع فالتوتال فى ملف الhtml
    total.innerHTML = reslut;
    total.style.background ='#4dbd56'
    }else{
        total.innerHTML = '';
        total.style.background ='tomato';
    }
}  
//creat proudect
let datapro;
if(localStorage.proudect != null){
        datapro = JSON.parse(localStorage.proudect)
    }else{
            datapro =[];
            // ده اللى هيتحفظ فيه الداتا
        }
submit.onclick =function(){
let newpro ={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
}
if(mood==='creat'){
    if (newpro.count > 1){
    for(let i=0; i <newpro.count; i++){
        datapro.push(newpro);
    }
}else{
    datapro.push(newpro);
}
}else{
    datapro[temp] = newpro;
    mood= 'creat';
    submit.innerHTML ='creat';
    count.style.display ='block';
}

// //save localstorage
localStorage.setItem('proudect', JSON.stringify(datapro) )
clearData()
showdata()
}
//clear inputs
function clearData(){
   title.value = "";
   price.value = "";
   taxes.value = "";
   ads.value = "";
   discount.value = "";
   total.innerHTML = "";
   count.value = "";
   category.value = "";
}
//read 
function showdata(){
  gettotal()
    let table ='';
    for (let i = 0 ; i < datapro.length ; i++){
   table +=
        `<tr>
        <th>${i}</th>
        <th>${datapro[i].title}</th>
        <th>${datapro[i].price}</th>
        <th>${datapro[i].taxes}</th>
        <th>${datapro[i].ads}</th>
        <th>${datapro[i].diccount}</th>
        <th>${datapro[i].count}</th>
        <th>${datapro[i].category}</th>
        <th><button onclick='updatedata(${i})' class="update" >Update</button></th>
        <th><button onclick="deletData(${i})" class="delete">Delete</button></th>
        </tr> `
    }
    document.getElementById('tbody').innerHTML = table;
let btndelete =document.getElementById('deletall');
    if(datapro.length >0 ){
        btndelete.innerHTML =`<button onclick='deletAll()'>DeleteAll (${datapro.length})</button>`
} else{
    btndelete.innerHTML='';
}
}
showdata()
//delete
function deletData(i)
{
 datapro.splice(i,1)
localStorage.proudect =JSON.stringify(datapro);
showdata()
}
function deletAll(){
    localStorage.clear
    datapro.splice(0)
    showdata()
}
//count

//update
function updatedata(i){
// عايز اجيب الداتا اللى اسمها تايتل جوا الداتا برو 
  title.value =datapro[i].title;
  price.value =datapro[i].price;
  taxes.value =datapro[i].taxes;
  ads.value =datapro[i].ads;
  discount.value =datapro[i].discount;
  gettotal()
  category.value =datapro[i].category;
submit.innerHTML ='Updata';
mood ='update';
temp =i;
gettotal()
scroll({
    top:0,
behavior:'smooth',
})
}
// // //search
// // //clean data


// offering
