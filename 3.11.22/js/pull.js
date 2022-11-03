let userBorn = prompt('What year of your born?')
let age = 2022 - userBorn
if(age === 2022 - null) {
    alert('It is a pity that we did not get an answer')
}
let userCity = prompt('Which city do you live?')
if(userCity === null) {
    alert('It is a pity that we did not get an answer')
}
let userSport = prompt('What is your favorite sport?')
if(userSport === null) {
    alert('It is a pity that we did not get an answer')
}
// if !userBorn {} -> 0, null, ""

if (age === 2022) {
    age = ('not specified')}
    else{
  age = (`${'Your age is'} ${age} ${'years'}`)}

if (userCity === 'Kyiv') {
    userCity = 'You are living in the capital of Ukraine. You are realy brave! '}
    else if(userCity === 'Washington') {
        userCity = 'You are living in the capital of the USA. God bless you!'}
    else if(userCity === 'London') {
        userCity = 'You are living in the London. In the capital of GB is time to tea now.)'}
    else if(userCity === null) {
        userCity = 'not specified'}  
 else {userCity = (`${'You are living in'} ${userCity} ${'town'}`)}

 if (userSport === 'swimming') {
    userSport = 'Really cool! Do you want to be like a Phelps?'}
    else if(userSport === 'football') {
        userSport = 'Really cool! Do you want to be like a Maradonna?'}
    else if(userSport === 'bodybuilding') {
        userSport = 'Really cool! Do you want to be like an Arny?'}
    else if(userSport === null) {
        userSport = 'not specified'}
 else { userSport = (`${'Your favorite sport is'} ${userSport}`)}

 alert(`${age};
 ${userCity};
 ${userSport}`)