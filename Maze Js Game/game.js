
       /* function mouseOut() {
            document.getElementById("start").style.color = "blue";

        }*/
       /* function mouseOver(){
            document.getElementById("start").style.color = "red";
        //document.getElementById("game").querySelector('div.youlose');
        //let game = document.querySelector('div.youlose');
        }*/

       /* document.getElementById("start").onmouseover = function() {mouseOver()};
        //document.getElementById("game").onmouseover = function() {mouseOver()};
        document.getElementById("start").onmouseout = function() {mouseOut()};*/

        //const hideDiv = document.querySelector('div');

        //hideDiv.classList.add('div.youlose'); // hidden class added*/
       /* function myFunction() {
            if(mouseOver){
            const list = document.getElementById("game").classList;
            list.add("div.youlose");}
        }*/


       // myFunction();

    /*   const div=document.querySelector('p');//element
       div.classList.add('p');//class
       //div.style.backgroundColor="red";
       console.log(div);*/

       /*     const list=document.querySelector('game');//element
       list.classList.add('div.lose');//class
       //div.style.backgroundColor="red";
       for (var i = 0; i < list.length; i++) {
        text += list[i] + "<br>";
      }
       console.log(list);*/

      /* document.getElementById("start").onmouseover = function() {mouseOver()};
       let div=document.getElementById('game');
       let container=document.getElementsByClassName('div.lose');

       div.addEventListener('mouseover',funtion(){
       for(let index=0; index < container.length(); ++index)
           container[index].classList.add('etyty');
       });*/

      /* function myFunction(){
        var list = document.getElementsByClassName('#game div.boundary + div.boundary + div.boundary + div.boundary + div.boundary');
    
        for(var i=0; i< list.length; i++){
            list[i].style.backgroundColor = 'blue';
        }
    }
    myFunction();*/
    /*function bgColor(boundary1) {

        var tableCntr= document.getElementById(boundary1);
        var DIVs = tableCntr.getElementsByTagName('div.youlose');
      
        var colors = ['red','blue','green','orange', 'black', 'purple']  ;
      
        var colourIndex = 0;
        for(var i=0;i<DIVs.length;i++) {
      
           DIVs[i].setAttribute('style','background-color: '+colors[colourIndex]);
           colourIndex = (colourIndex + 1) % colors.length;
        }
      }
      
      bgColor('boundary1');*/

      const list=document.querySelector('boundary1');//element
      list.classList.add('div.youlose');//class
      for (var i = 0; i < list.length; i++) {

      text=list[i].style.backgroundColor = 'blue';
     }
      console.log(text);
