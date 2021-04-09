const express = require('express')
const Actions = require('./actions-model')
const router = express.Router();

router.get("/", () => {
  // returns an array of actions (or an empty array) as the body of the _response_.
})

router.get("/:id", () => {
  //returns an action with the given `id` as the body of the _response_.
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