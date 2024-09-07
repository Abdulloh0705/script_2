var age = prompt("yoshingizni kriting")

if( age > 0 && age < 18) {
  console.log(" siz hali yoshsiz siz hali o'qishingiz kerak")
  alert("siz hali yoshsiz siz hali o'qishingiz kerak")
}else if (age > 18 && age < 30){
  console.log(" siz ishlashingiz kerak")
  alert('siz ishlashingiz kerak')
}else if (age > 30 && age < 50){
  console.log("siz hali ishlashingiz kerak")
  alert('siz hali ishlashingiz kerak')
}else(age > 50 && age < 100 ){
  console.log("siz yaqinda nafaqa yoshiga yetar ekansiz")
  alert('siz yaqinda nafaqa yoshiga yetar ekansiz')
}