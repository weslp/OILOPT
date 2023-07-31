let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS  
var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:4173'}));

// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project-base-for-order#183');

let ProductSchema = new mongoose.Schema({
    title: String,
    minPrice: Number,
    description: String,   
    features: Array,
    application: String,      
    views: Number,  
    category: String, 
    image: String
});
let Products = mongoose.model('products', ProductSchema);

app.get('/load-popular-products', async function(req, res) {
    let Product = await Products.find().sort({"views": -1}).limit(4);
    res.send(Product);
});

app.get('/save-products-in-category', async function(req, res) {
    if (!req.query.category) {
        res.send(false);
    } else{
        let Product = await Products.find({'category': req.query.category});
        if (Product) {
            let Products = {
                name: Product[0].category,
                product: Product
            }
            res.send(Products); 
        } else {
            res.send(false);
        }
    }
    
    
});

app.get('/save-a-product', async function(req, res) {
    if (!req.query.product) {
        res.send(false);
    } else {
        let Product = await Products.findOne({'_id': req.query.product});
        if (Product) {
            res.send(Product);
            Product.views++;  
            await Product.save();
        } else {
            res.send(false);
        }
    }
    
    
});