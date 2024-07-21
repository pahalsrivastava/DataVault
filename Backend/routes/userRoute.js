import express from 'express';
import bcryptjs from 'bcryptjs';
import { User } from '../models/userModel.js';
import { DataSet } from '../models/datasetModel.js';

const router = express.Router();

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            email,
            password: hashedPassword
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password); 

        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const Datasets = async (req, res) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.price) {
            return res.status(400).json({ message: 'Send all required fields: title, description, price' });
        }

        const newData = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        };

        const data = await DataSet.create(newData);
        res.status(201).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

const getAllDatasets = async (req, res) => {
    try {
        const datasets = await DataSet.find({});
        res.status(200).json({ data: datasets });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Route for getting a dataset by ID
router.get('/dataset/:id', async (req, res) => {
    try {
        const { id } = req.params;

       

        const data = await DataSet.findById(id);

        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/create", Datasets);
router.get("/show", getAllDatasets);

export default router;
