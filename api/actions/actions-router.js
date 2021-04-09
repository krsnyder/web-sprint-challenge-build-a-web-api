const express = require('express')
const Actions = require('./actions-model')
const {validateActionId} = require('../middleware/actions-middleware')
const router = express.Router();

router.get("/", (req,res,next) => {
  // returns an array of actions (or an empty array) as the body of the _response_.
  Actions.get()
    .then(actions => {
    res.status(200).json(actions)
    })
  .catch(next)
})

router.get('/:id', validateActionId, (req, res) => {
  console.log(req.action)
  res.json(req.action)
});

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