let vatly= parseInt(prompt('diem mon vat ly:'))
let hoahoc= parseInt(prompt('diem mon hoa hoc :'))
let sinhhoc= parseInt(prompt('diem mon sinh hoc :'))
let diemtb =(vatly+hoahoc+sinhhoc)/3;
document.write('diem vat ly: '+ vatly)
document.write('<br/>');
document.write('diem hoa hoc: '+ hoahoc)
document.write('<br/>');
document.write('diem sinh hoc: '+ sinhhoc)
document.write('<br/>');
document.write('diem trung binh: '+ diemtb)
