document.addEventListener('DOMContentLoaded', function() {
    const furnitureBtn = document.getElementById('jewelry');
    const cabinetryBtn = document.getElementById('crochet');
    const gridItems = document.querySelectorAll('.grid-item');

    furnitureBtn.classList.add('active');

    furnitureBtn.addEventListener('click', function() {
      updateGridItems('jewelry');
    });
  
    cabinetryBtn.addEventListener('click', function() {
      updateGridItems('crochet');
    });

    function updateImgDescriptions(category) {
      gridItems.forEach(function (item, index) {
        const description = item.querySelector('.item-name');
        if (category === 'jewelry') {
          if (index === 0) {
            description.textContent = "Cherry Desk";
          } else if (index === 1) {
            description.textContent = "Koa Dining Room Chair";
          } else if (index === 2) {
            description.textContent = "Cherry and Ash Chest of Drawers";
          } else if (index === 3) {
            description.textContent = "Walnut Rocking Chair";
          } else if (index === 4) {
            description.textContent = "Walnut Dining Table";
          } else if (index === 5) {
            description.textContent = "Walnut Writing Desk";
          } else if (index === 6) {
            description.textContent = "Placeholder #1";
          } else if (index === 7) {
            description.textContent = "Placeholder #2";
          } else if (index === 8) {
            description.textContent = "Placeholder #3";
          } else if (index === 9) {
            description.textContent = "Placeholder #4";
          } else if (index === 10) {
            description.textContent = "Placeholder #5";
          } else if (index === 11) {
            description.textContent = "Placeholder #6";
          }
        } else if (category === 'crochet') {
          if (index === 0) {
            description.textContent = "Placeholder #1";
          } else if (index === 1) {
            description.textContent = "Placeholder #2";
          } else if (index === 2) {
            description.textContent = "Placeholder #3";
          } else if (index === 3) {
            description.textContent = "Placeholder #4";
          } else if (index === 4) {
            description.textContent = "Placeholder #5";
          } else if (index === 5) {
            description.textContent = "Placeholder #6";
          } else if (index === 6) {
            description.textContent = "Placeholder #7";
          } else if (index === 7) {
            description.textContent = "Placeholder #8";
          } else if (index === 8) {
            description.textContent = "Placeholder #9";
          } else if (index === 9) {
            description.textContent = "Placeholder #10";
          } else if (index === 10) {
            description.textContent = "Placeholder #11";
          } else if (index === 11) {
            description.textContent = "Placeholder #12";
          }
        }
      });
    }
    
    function updateGridItems(category) {
      gridItems.forEach(function(item) {
        const image = item.querySelector('img');
        const src = image.getAttribute('src');
        const newSrc = src.replace(/(jewelry|crochet)/g, category);
        image.setAttribute('src', newSrc);
        
        /*         var grid1 = document.getElementById('grid1');
        var href1 = grid1.getAttribute('href');

        var grid2 = document.getElementById('grid2');
        var href2 = grid2.getAttribute('href');

        var grid3 = document.getElementById('grid3');
        var href3 = grid3.getAttribute('href');

        var grid4 = document.getElementById('grid4');
        var href4 = grid4.getAttribute('href');

        var grid5 = document.getElementById('grid5');
        var href5 = grid5.getAttribute('href');

        var grid6 = document.getElementById('grid6');
        var href6 = grid6.getAttribute('href');

        var grid7 = document.getElementById('grid7');
        var href7 = grid7.getAttribute('href');

        var grid8 = document.getElementById('grid8');
        var href8 = grid7.getAttribute('href');

        var grid9 = document.getElementById('grid9');
        var href9 = grid8.getAttribute('href');

        var grid10 = document.getElementById('grid10');
        var href10 = grid10.getAttribute('href');

        var grid11 = document.getElementById('grid11');
        var href11 = grid11.getAttribute('href');

        var grid12 = document.getElementById('grid12');
        var href12 = grid12.getAttribute('href');

        if (category === 'jewelry') {
          grid1.setAttribute('href', '/items/jewelry/item1.html');
          grid2.setAttribute('href', '/items/jewelry/item2.html');
          grid3.setAttribute('href', '/items/jewelry/item3.html');
          grid4.setAttribute('href', '/items/jewelry/item4.html');
          grid5.setAttribute('href', '/items/jewelry/item5.html');
          grid6.setAttribute('href', '/items/jewelry/item6.html');
          grid7.setAttribute('href', '/items/jewelry/item7.html');
          grid8.setAttribute('href', '/items/jewelry/item8.html');
          grid9.setAttribute('href', '/items/jewelry/item9.html');
          grid10.setAttribute('href', '/items/jewelry/item10.html');
          grid11.setAttribute('href', '/items/jewelry/item11.html');
          grid12.setAttribute('href', '/items/jewelry/item12.html');
        } else if (category === 'crochet') {
          grid1.setAttribute('href', '/items/crochet/crochet1.html');
          grid2.setAttribute('href', '/items/crochet/crochet2.html');
          grid3.setAttribute('href', '/items/crochet/crochet3.html');
          grid4.setAttribute('href', '/items/crochet/crochet4.html');
          grid5.setAttribute('href', '/items/crochet/crochet5.html');
          grid6.setAttribute('href', '/items/crochet/crochet6.html');
          grid7.setAttribute('href', '/items/crochet/crochet7.html');
          grid8.setAttribute('href', '/items/crochet/crochet8.html');
          grid9.setAttribute('href', '/items/crochet/crochet9.html');
          grid10.setAttribute('href', '/items/crochet/crochet10.html');
          grid11.setAttribute('href', '/items/crochet/crochet11.html');
          grid12.setAttribute('href', '/items/crochet/crochet12.html');
        }*/
      }); 

      furnitureBtn.classList.remove('active');
      cabinetryBtn.classList.remove('active');
      if (category === 'jewelry') {
        furnitureBtn.classList.add('active');
      } else if (category === 'crochet') {
        cabinetryBtn.classList.add('active');
      }
        /*      updateImgDescriptions(category); */
    }
  });
  