const ShowAll = () =>{
    const AllPhoto = document.querySelectorAll('img');
    console.log(AllPhoto)
    let Design;
    for(var i =0 ; i< AllPhoto.length ; i++ ){
       AllPhoto[i].style.display = 'block';
    }
    console.log(Design)
}
const ShowDesign = () =>{
    ShowAll();
    const AllPhoto = document.querySelectorAll('img');
    console.log(AllPhoto)
    let Design;
    for(var i =0 ; i< AllPhoto.length ; i++ ){
        if(AllPhoto[i].alt ==='Design'){
            Design = AllPhoto[i];
        }else{
            AllPhoto[i].style.display = 'none';
        }
    }
    console.log(Design)
}
const ShowWeb = () =>{
    ShowAll();
    const AllPhoto = document.querySelectorAll('img');
    console.log(AllPhoto)
    let Design;
    for(var i =0 ; i< AllPhoto.length ; i++ ){
        if(AllPhoto[i].alt ==='Web'){
            Design = AllPhoto[i];
        }else{
            AllPhoto[i].style.display = 'none';
        }
    }
    console.log(Design)
}
const ShowMobile = () =>{
    ShowAll();
    const AllPhoto = document.querySelectorAll('img');
    console.log(AllPhoto)
    let Design;
    for(var i =0 ; i< AllPhoto.length ; i++ ){
        if(AllPhoto[i].alt ==='Mobile'){
            Design = AllPhoto[i];
        }else{
            AllPhoto[i].style.display = 'none';
        }
    }
    console.log(Design)
}
