let div=document.getElementById('root')


let myproducts=[
    {name:'t-shirt',image:'./001.jpg'},
    {name:'shirt',image:'./002.jpg'},
    {name:'pants',image:}
]

function displayProducts(){
   



    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        div.appendChild(image)
    })
}