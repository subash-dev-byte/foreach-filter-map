const resources = [
  {
    id: 1,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "JavaScript",
    year: 2018,
  },
  {
    id: 2,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "JavaScript",
    year: 2020,
  },
  {
    id: 3,
    title: "MDN Web Docs: HTML",
    author: "Mozilla",
    category: "HTML",
    year: 2024,
  },
  {
    id: 4,
    title: "CSS Secrets",
    author: "Lea Verou",
    category: "CSS",
    year: 2017,
  },
  {
    id: 5,
    title: "Frontend Handbook",
    author: "C. Dub",
    category: "Frontend",
    year: 2019,
  },
  {
    id: 6,
    title: "Node.js Essentials",
    author: "Sam Green",
    category: "Backend",
    year: 2021,
  },
];
const parentContainer = document.querySelector("#parentContainer");

resources.forEach((items) => {
  const container = document.createElement("div");
 container.classList.add(
   'w-[290px]',
   'bg-gray-600',
   'py-[20px]',
    'flex', 
    'flex-col',
   'gap-3',
   'px-3',
   'rounded-[5px]',
   'shadow-md'
   

 )
  const title = document.createElement("h1");
  title.classList.add(
    'text-[white]',
    'font-bold',
     'text-[20px]'
  )

  const author = document.createElement("p");
   author.classList.add(
    'text-[white]',
    'font-bold',
     'text-[16px]'
  )
  const year = document.createElement("p");
  year.classList.add(
    'text-[white]',
    'font-bold',
     'text-[16px]'
  )

  const category = document.createElement("a");
  category.classList.add(
    'text-[white]',
    'font-medium',
    'bg-[blue]',
     'text-[16px]',
     'w-20',
     'text-center',
     'p-1',
     'rounded-[5px]'
     
  )

  title.innerText=`${items.title}`
  author.innerText=`author:${items.author}`
  year.innerText=`year:${items.year}`


  category.innerText=`${items.category}`
  
container.appendChild(title)
container.appendChild(author)
container.appendChild(year)
container.appendChild(category)
parentContainer.appendChild(container)

});



const filterData=document.querySelector("#filterData")
const filterBtn=document.querySelector("#filterBtn")
const login=document.querySelector("#login")

// login and foreach using methods
login.addEventListener("click",()=>{
    resources.forEach((items)=>{
      console.log(items)
    })
})
let categories;

filterData.addEventListener("change",(items)=>{
      categories=  items.target.value;

    }) 


filterBtn.addEventListener("click",()=>{
    
    resources.filter((item)=>{
          if(item.category === categories){
                      
          }
          else{
            return;
          }
    })

})