const Projects = require('../projects/projects-model')

async function validateProjectId(req, res, next) {
  try {
    const project = await Projects.get(req.params.id)
    if (!project) {
      res.status(404).json({
        message: "no such project"
      })
    } else {
      req.project = project
      next()
    }
  } catch {
    res.status(500).json({
      message: "project not found"
    })
  }
}

function validateProject(req, res, next) {
  console.log("req body: ", req.body)
  const {name, description} = req.body
if (!name || !description) {
  res.status(400).json({
      message: "Name and description are required"
    })
} else {
  next()
  }
}

module.exports = {
  validateProjectId,
  validateProject
}