var strContainer=document.querySelectorAll('.start_container')
var totalContainer=document.querySelectorAll(".totalContainer")
var strtbtn=document.getElementById('start')
var container=document.querySelectorAll('.container')
var insertbtn=document.getElementById('insert')
var backbtn=document.querySelectorAll('.backbtn')
var containerSecond=document.querySelectorAll('.containerSecond')
var updatebtn=document.getElementById('update')
var containerThird=document.querySelectorAll(".containerThird")
var searchbtn=document.getElementById('search')


//for enter into a second page
strContainer.forEach((secondpage)=>{
    strtbtn.addEventListener('click',()=>{
        secondpage.style.display='none'
        totalContainer[0].classList.add('active')
        
    })
    //for enter into insert data page
  container.forEach((insertpage)=>{
    insertpage.style.display='none'
   insertbtn.addEventListener('click',()=>{
    totalContainer[0].classList.remove('active')
    insertpage.style.display='block'
})

//get back from insert page
    backbtn[0].addEventListener('click',()=>{
        insertpage.style.display='none'
        totalContainer[0].classList.add('active')
    })

    //for enter into a update page
        containerSecond.forEach((updatepage)=>{
            updatebtn.addEventListener('click',()=>{
                console.log('clicked')
                totalContainer[0].classList.remove('active')
                updatepage.classList.add('activeupdate')
            })

            //get back from insert page

            backbtn[1].addEventListener('click',()=>{
                updatepage.classList.remove('activeupdate')
                totalContainer[0].classList.add('active')
            })

            //for enter into search box
            containerThird.forEach((searchpage)=>{
               searchpage.style.display='none'

               searchbtn.addEventListener('click',()=>{
                totalContainer[0].classList.remove('active')
                searchpage.style.display='block'
               })
                //get back from insert page
                backbtn[2].addEventListener('click',()=>{
                    searchpage.style.display='none'
                    totalContainer[0].classList.add('active')
                })
                
                  //for enter into delete page
            containerFourth.forEach((deletepage)=>{
                deletepage.style.display='none'

                deletebtn.addEventListener('click',()=>{
                    totalContainer[0].classList.remove('active')
                    deletepage.style.display='block'
                   })

                    //get back from delete page
                backbtn[3].addEventListener('click',()=>{
                    deletepage.style.display='none'
                    totalContainer[0].classList.add('active')
                })
            })
           
            })
   })
  })
})
