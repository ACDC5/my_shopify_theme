document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('load-products');
    const productList = document.getElementById('product-list');

    if (button) {
      button.addEventListener('click', function () {
        fetch('/products.json')
          .then((response) => response.json())
          .then((data) => {
            productList.innerHTML = ''; // 清空列表
            data.products.forEach((product) => {
              const li = document.createElement('li');
              console.log('我的产品: ', product);
              li.innerHTML = `${product.title} - `;
              const img = document.createElement('img');
              img.src = product.images[0].src;
              productList.appendChild(li);
              //productList.appendChild(img);图片太大了先不显示
            });
          })
          .catch((error) => {
            const h2 = document.createElement('h2');
            h2.innerHTML = '加载产品失败';
            productList.appendChild(h2);
            console.error('加载产品失败:', error);
          });
      });
    }
  });