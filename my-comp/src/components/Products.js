// 商品列表组件

var template = `<ul>
<ul>
<li v-for="(product, index) in products">
    <span>水果名称:{{product.name}}</span>
    <span v-if="product.stock>0">{{product.stock}}</span>
    <span v-else>无货</span>
    <button @click="remove(index)">删除</button>
    <button @click="changeStock(product, product.stock + 1)">+</button>
    <button @click="changeStock(product, product.stock - 1)">-</button>
</li>
</ul>
</ul>`;

export default {
    template,
    data() {
        return {
            products: [
                { id: 1, name: "iphone", stock: 10 },
                { id: 1, name: "xiaomi", stock: 5 },
                { id: 1, name: "huawei", stock: 15 },
            ]
        }
    },
    methods: {
        remove(index) {
            this.products.splice(index, 1);
        },
        changeStock(product, newStock) {
            if (newStock < 0) {
                newStock = 0;
            }
            product.stock = newStock;
        }
    }
}