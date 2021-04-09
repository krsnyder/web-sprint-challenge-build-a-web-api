const express = require('express')
const Actions = require('./actions-model')
const {validateActionId, validateAction} = require('../middleware/actions-middleware');
const router = express.Router();

router.get("/", (req,res,next) => {
  Actions.get()
    .then(actions => {
    res.status(200).json(actions)
    })
  .catch(next)
})

router.get('/:id', validateActionId, (req, res) => {
  res.json(req.action)
});

router.post("/", validateAction, (req, res, next) => {
  Actions.insert(req.body)
    .then(newAction => {
      res.status(201).json(newAction)
  })
  .catch(next)
})

router.put("/:id", validateActionId, validateAction, (req, res, next) => {
  Actions.update(req.params.id, req.body)
    .then(udpatedAction => {
    res.status(200).json(udpatedAction)
    })
  .catch(next)
})

router.delete("/:id", validateActionId, async (req, res, next) => {
  try {
    await Actions.remove(req.params.id)
    req.json(req.action)
  } catch (err) {
    next(err)
  }
})

module.exports = router