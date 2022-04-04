const { Router } = require('express');
const ProductsApi = require('../api/products.js');

const api = new ProductsApi();

const router = Router();

const products = api.getAll();

router.get('/', (req, res) => {
  res.render('inicio', {products});
});

router.get('/registro', (req, res) => {
  res.render('registro');
})

router.post('/', (req, res) => {
  api.createProduct(req.body);
  res.redirect('/productos')
});

module.exports = router;