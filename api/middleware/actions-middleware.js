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

function validateAction(req, res, next) {
  console.log("req body: ", req.body)
  const {project_id, description, notes} = req.body
if (!project_id || !description || !notes) {
  // if(false){
  res.status(400).json({
      message: "Project Id, Description, and Notes are required"
    })
} else {
  next()
  }
}

module.exports = {
  validateActionId,
  validateAction
}