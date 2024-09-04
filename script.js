var age = prompt("yoshingizni kriting")

if( age > 18 && age < 30) {
  console.log(" siz bu yoshda ishlashingiz mumkin")
  alert('siz bu yoshda ishlashingiz mumkin')
}else if (age > 30 && age < 60){
  console.log(" siz bu yoshda kop ishlashingiz kerek")
  alert('siz bu yoshda kop ishlashingiz kerek')
}else if (age > 60 && age < 100){
  console.log("siz pensiya yoshdasiz ishlay olmaysiz")
  alert('siz pensiya yoshdasiz ishlay olmaysiz')
}