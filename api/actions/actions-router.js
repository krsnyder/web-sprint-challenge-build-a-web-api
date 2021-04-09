const express = require('express')
const Actions = require('./actions-model')
const router = express.Router();

router.get("/", (req,res,next) => {
  // returns an array of actions (or an empty array) as the body of the _response_.
  Actions.get()
    .then(actions => {
    res.status(200).json(actions)
    })
  .catch(next)
})

router.get("/:id", async (req,res) => {
  //returns an action with the given `id` as the body of the _response_.
  const { id } = req.params
  try {
    const action = await Actions.get(id)
    if (!action) {
      res.status(404).json({
        message: "Resource not found"
      })
    } else {
      res.status(200).json(action)
    }
  } catch {
    res.status(500).json({
      message: "Error somewhere"
    })
  }
})

router.post("/", () => {
  //returns the newly created action as the body of the _response_.
})

router.put("/:id", () => {
  //returns the updated action as the body of the _response_.
})

router.delete("./:id", () => {
  //returns no _response_ body
})

module.exports = router