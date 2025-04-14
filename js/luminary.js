const prev = document.getElementById('prev-button')
const next = document.getElementById('next-button')
const list = document.getElementById('item-list')
const itemWidth = 700
const padding = 20

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})