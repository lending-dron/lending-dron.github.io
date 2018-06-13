$('.price-btn').click(function () { 
    getCart($(this));
    $(this).children('span').text('Added');
    $(this).addClass('disabled');
 });
 function getCart(elem) { 
    var img = elem.siblings('img');
    var imgSrc = img.attr('src');
    var imgAlt = img.attr('alt');
    var title = elem.siblings('h4').text();
    var price = elem.siblings('h3').attr('data-price');
    var code = elem.attr('data-code');
    getRow(imgSrc,imgAlt,title,price,code);
  };
 function getRow(imgSrc,imgAlt,title,price,code) { 
    var row = '<div class="cart-row"><p>1</p><div><img class="img-fluid" src="'+ imgSrc +'" alt="'+ imgAlt +'"></div><div><p>'+ title +'</p><p>Code: <span>'+ code +'</span></p></div><input type="number" value="1" min="1" max="5"><p><span>'+ price +'</span>$</p><p><span></span>$</p></div>';
    addRow(row);
};
function addRow(row) { 
    var modal = $('#ModalCart');
    modal.find('.cart-body').append(row);
 };

 
$(window).mousemove(function (e) { 
    console.log(e.pageY+'px');
    if (e.pageY <= 4) {
        alert('dsjfhj')
    }
 });