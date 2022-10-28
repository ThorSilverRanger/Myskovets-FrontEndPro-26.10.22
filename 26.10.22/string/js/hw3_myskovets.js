var button = document.querySelector('button');

button.onclick = function() {
  var name = prompt('First part');
  var name2 = prompt('Second part');
  var name3 = prompt('Thirt part');
  alert('We had: ' + name + name2 + name3);

  console.log('We had: ' + name + name2 + name3);
}