import {heroes} from './bases/heroes'
const getUserActivo=()=>{
  return{uid:'ABC567',username:'nombre'}
}

const user =getUserActivo("fernando")
console.log(user)
console.log(heroes)
const getHeroes=(id)=> heroes.find(hero=>hero.id===id);

console.log(getHeroes(3));

const getCompani=(compani)=> heroes.filter(val=>val.owner===compani);

console.log(getCompani("DC"))