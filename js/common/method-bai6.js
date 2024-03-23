// VD7
function in1HangSao(soSao1Hang) {
  var veSao1Hang = "";
  for (i = 1; i <= soSao1Hang; i++) {
    veSao1Hang += ' <i class="fa fa-star text-warning"></i>';
  }
  return veSao1Hang;
}

// VD8
function IsPrime(num) {
  var checkSoNT = true;
  for (var dem = 2; dem <= Math.sqrt(num); dem++) {
    if (num % dem === 0) {
      checkSoNT = false;
      break;
    }
  }
  return checkSoNT;
}
