const express = require('express')
const Projects = require('./projects-model')
const Actions = require('../actions/actions-model')
const {validateProjectId, validateProject} = require('../middleware/projects-middleware');
const router = express.Router();

router.get("/", (req,res,next) => {
  Projects.get()
    .then(projects => {
    res.status(200).json(projects)
    })
  .catch(next)
})

router.get('/:id', validateProjectId, (req, res) => {
  res.json(req.project)
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
  console.log(req.project)
  res.status(200).json(req.project.actions)
})

// if (!actions) {
//   res.status(404).json([])
// } else {
//   res.status(200).json(actions)
// }

router.post("/", validateProject, (req, res, next) => {
  Projects.insert(req.body)
    .then(newProject => {
      res.status(201).json(newProject)
  })
  .catch(next)
})

router.put("/:id", validateProjectId, validateProject, (req, res, next) => {
  Projects.update(req.params.id, req.body)
    .then(udpatedProject => {
    res.status(200).json(udpatedProject)
    })
  .catch(next)
})

router.delete("/:id", validateProjectId, async (req, res, next) => {
  try {
    await Projects.remove(req.params.id)
    req.json(req.project)
  } catch (err) {
    next(err)
  }
})

module.exports = router