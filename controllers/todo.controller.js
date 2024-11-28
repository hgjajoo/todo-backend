import Todo from "../models/todo.model.js";

// Create a new To-Do
export const createTodo = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const newTodo = new Todo({
      title,
      description,
      priority,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create To-Do" });
  }
};

// Get all To-Dos 
export const getTodos = async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) {
      query.status = status;
    }
    const todos = await Todo.find(query).sort({ created_at: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch To-Dos" });
  }
};

// Get a single To-Do by ID
export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "To-Do not found" });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch To-Do" });
  }
};

// Update a To-Do by ID
export const updateTodo = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        status,
        priority,
        updated_at: Date.now(),
      },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: "To-Do not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update To-Do" });
  }
};

// Delete a To-Do by ID
export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "To-Do not found" });
    }
    res.status(200).json({ message: "To-Do deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete To-Do" });
  }
};
