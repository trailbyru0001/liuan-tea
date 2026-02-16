// 模拟商品数据
const products = [
    { id: 1, name: "特级六安瓜片-明前茶", price: "￥880", traceId: "LA2024001" },
    { id: 2, name: "一级六安瓜片-雨前茶", price: "￥450", traceId: "LA2024002" },
    { id: 3, name: "六安瓜片精美礼盒", price: "￥1280", traceId: "LA2024003" },
    { id: 4, name: "口粮茶-实惠装", price: "￥120", traceId: "LA2024004" }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

// 加载商品列表
function loadProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return; // 如果不在商城页面，则不执行

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <span class="badge-trace"><i class="fas fa-link"></i> 区块链溯源</span>
                <img src="https://via.placeholder.com/200?text=Tea+Image" alt="${product.name}" style="max-width:80%;">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">${product.price}</div>
                <button class="btn btn-sm btn-outline" style="color:#333; border-color:#ddd; margin-top:10px;" onclick="previewTrace('${product.traceId}')">
                    <i class="fas fa-eye"></i> 查看溯源信息
                </button>
            </div>
        `;
        productList.appendChild(card);
    });
}

// 溯源查询功能
function queryTrace() {
    const input = document.getElementById('trace-code-input').value;
    const resultArea = document.getElementById('trace-result');
    
    if (input.length === 0) {
        alert("请输入溯源码！");
        return;
    }

    // 模拟查询过程 loading
    const btn = document.querySelector('.trace-box button');
    const originalText = btn.innerText;
    btn.innerText = "查询区块链中...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        resultArea.classList.remove('hidden');
        // 滚动到结果区域
        resultArea.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// 模拟点击商品预览溯源
function previewTrace(id) {
    document.getElementById('trace-code-input').value = id;
    window.location.href = "#trace";
    queryTrace();
}