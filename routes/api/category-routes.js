const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  const categoryData = await Category.findAll();
  // TODO: be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findByPk(req.params.id);

  return res.json(categoryData);
  // TODO: be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
