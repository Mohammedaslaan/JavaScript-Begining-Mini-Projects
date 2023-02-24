const Search= () =>{
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    // console.log(searchbox)
    const storeitems = document.getElementById('product-list')
    //console.log(storeitems)
    const Product = document.querySelectorAll('.Product')
    //console.log(Product)
    const pname = document.getElementsByTagName('h2')
    //console.log(pname)
    // console.log(Product[1].getElementsByTagName('h2')[0]);
    for(var i = 0 ; i <pname.length; i++){
        let match = Product[i].getElementsByTagName('h2')[0];
        if(match){
           let textvalue =  match.textContent || match.innerHTML
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                Product[i].style.display = "";
           }else{
                Product[i].style.display = "none";
           }
        }
    }
}