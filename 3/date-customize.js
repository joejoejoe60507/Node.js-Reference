var months = ['1る', '2る' , '3る', '4る', '5る', '6る', '7る', '8る', '9る', '10る', '11る', '12る'];
var weekdays = ['�P漢ら', '�P漢�@' , '�P漢�G', '�P漢�T', '�P漢�|', '�P漢き', '�P漢せ'];
console.log(' �{�b�O' + new Date().getFullYear() + ' �~' + months[new Date().getMonth()] + new Date().getDate() + 'ら' + weekdays[new Date().getDay()] );