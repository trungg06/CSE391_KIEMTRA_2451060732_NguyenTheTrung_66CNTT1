$(document).ready(function () {
  $("#product-form").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,

    
    rules: {
      "product-name": {
        required: true, 
      },
      price: {
        required: true,
        number: true, 
        min: 1, 
      },
      "cate":{
        required: true,
      }
    },

    
    messages: {
      "product-name": {
        required: "Vui lòng nhập tên sản phẩm.",
      },
      price: {
        required: "Vui lòng nhập giá sản phẩm.",
        number: "Giá sản phẩm phải là một số hợp lệ.",
        min: "Giá sản phẩm phải lớn hơn 0.",
      },
      "cate":{
        required: "Vui lòng chọn danh mục",
      }
    },
  });
});
