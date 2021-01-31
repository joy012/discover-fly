

document.getElementById('preview').style.display = 'none';

document.getElementById('from').addEventListener('blur', function (e){
    document.getElementById('fromAddress').innerHTML =  getValue(e);
});
document.getElementById('to').addEventListener('blur', function (e){
    document.getElementById('toAddress').innerHTML =  getValue(e);
});
document.getElementById('fromDate').addEventListener('change', function (e){
    document.getElementById('departure').innerHTML =  getValue(e);
});
document.getElementById('toDate').addEventListener('change', function (e){
    document.getElementById('return').innerHTML =  getValue(e);
});


function book(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('preview').style.display = 'block';
}
function getValue(e) {
    return e.target.value;
}


function ticketCount(ticket,isIncrease) {
    var currentCount = parseInt(document.getElementById(ticket + '-count').value);
    
    if(isIncrease){
       currentCount += 1;
    }
    else{
       if(currentCount > 0){
           currentCount -= 1;
       }
    }
    document.getElementById(ticket + '-count').value = currentCount;
    document.getElementById(ticket + '-seat').innerHTML = currentCount;

    ticketCost();
}

function ticketCost (){
    var subtotal = parseInt(document.getElementById('subtotal').innerHTML);
    var firstClass = parseInt(document.getElementById('firstclass-count').value);
    var economyClass = parseInt(document.getElementById('economy-count').value);
    subtotal = (firstClass * 150) + (economyClass * 100);
    var vat = subtotal * 0.15 ;
    var total = subtotal + vat;
    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('vat').innerHTML = vat.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('firstclass-cost').innerHTML = firstClass * 150;
    document.getElementById('economy-cost').innerHTML = economyClass * 100;
    document.getElementById('total-cost').innerHTML = total.toFixed(2);
}



