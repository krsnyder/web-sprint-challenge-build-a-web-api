const Actions = require('../actions/actions-model')

async function validateActionId(req, res, next) {
  try {
    const action = await Actions.get(req.params.id)
    if (!action) {
      res.status(404).json({
        message: "no such action"
      })
    } else {
      req.action = action
      next()
    }
  } catch {
    res.status(500).json({
      message: "action not found"
    })
  }
}

module.exports = {
  validateActionId
}