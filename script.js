/*INDEX*/
filtering('all');
function filtering(select) {
  var x, i, banner, category;
  x = document.getElementsByClassName('filter');
  banner = document.getElementById('banner');
  banner.style.display = 'none';
  category = document.getElementsByClassName('category');

  if (select === 'all') {
    select = '';
    removeClass(category[0], 'show');
  } else {
    addClass(category[0], 'show');
  }

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'hide');
    if (x[i].className.indexOf(select) > -1) {
      addClass(x[i], 'hide');
    }
  }

  for (i = 1; i < category.length; i++) {
    addClass(category[i], 'show');
    if (category[i].className.indexOf(select) > -1 && select !== '') {
      removeClass(category[i], 'show');
    }
  }
}

function removeClass(elem, name) {
  var i, arr1, arr2;
  arr1 = elem.className.split(' ');
  arr2 = name.split(' ');

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      elem.className += ' ' + arr2[i];
    }
  }
}

function addClass(elem, name) {
  var i, arr1, arr2;
  arr1 = elem.className.split(' ');
  arr2 = name.split(' ');

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  elem.className = arr1.join(' ');
}

/*CONTACT*/
displayOrderNum();
displayOrderNum2();
function displayOrderNum() {
  var x = document.getElementById('orderNum');
  if (x.style.display === 'none') x.style.display = 'block';
  else x.style.display = 'none';
}
function displayOrderNum2() {
  var x = document.getElementById('orderNum');
  x.style.display = 'none';
}
