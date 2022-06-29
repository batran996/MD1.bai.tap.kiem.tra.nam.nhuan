let nhapNam = parseInt(prompt("nhap nam de kiem tra"));
if(nhapNam %4 == 0){
    if(nhapNam %100 == 0){
        alert("nam nhuan")
    }else {
        alert("nam khong nhuan")
    }
}else {
    if (nhapNam % 100 == 0 && nhapNam % 400 >0){
        alert("nam nhuan")
    }else {
        alert("nam khong nhuan")
    }
}

