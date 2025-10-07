// middleware/validateProduct.js

function validateProduct(req, res, next) {
  const { name, description, price, category, instock } = req.body;

  // Basic field checks
  if (!name || !description || !price || !category) {
    return res.status(400).json({
      message: 'Missing required fields: name, description, price, and category are mandatory.',
    });
  }

  // Type checks
  if (typeof name !== 'string' || typeof description !== 'string' || typeof category !== 'string') {
    return res.status(400).json({ message: 'Name, description, and category must be strings.' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Price must be a positive number.' });
  }

  if (instock !== undefined && typeof instock !== 'boolean') {
    return res.status(400).json({ message: 'inStock must be a boolean value.' });
  }

  next(); // Validation passed — proceed to controller
}

module.exports = validateProduct;
