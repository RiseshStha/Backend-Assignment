const router = require('express').Router();
const Blog = require("../models/blogModel")
//get all blogs
router.get('/', async(req, res) =>{
    const blogs = await Blog.find();
    res.json(blogs)
});

// get blog by id
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send('Blog not found');
    res.json(blog);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

// post a new blog
router.post('/', async (req, res) => {
  const { title, description, category } = req.body;
  const newBlog = new Blog({ title, description, category });
  await newBlog.save();
  res.status(201).json(newBlog);
});

// update a blog
router.put('/:id', async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true }
    );
    if (!updatedBlog) return res.status(404).send('Blog not found');
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

module.exports = router;