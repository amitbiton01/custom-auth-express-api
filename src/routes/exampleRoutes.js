const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Example = mongoose.model("Example");

const router = express.Router();

router.use(requireAuth);

router.get("/examples", async (req, res) => {
   const examples = await Example.find({userId: req.user._id});
   res.send(examples);
});

router.post("/examples", async (req, res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(422).send({error: "You must provide a name"})
    }

    try {
        const example = new Example({name, userId: req.user._id});
        await example.save();
        res.send(example);
    } catch (e) {
        res.status(422).send({error: e.message});
    }
});

module.exports = router;
