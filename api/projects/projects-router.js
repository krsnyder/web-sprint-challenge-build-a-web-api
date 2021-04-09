const express = require('express')
const Projects = require('./projects-model')
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