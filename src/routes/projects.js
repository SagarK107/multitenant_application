import express from 'express'
import prisma from '../config/prisma'

const router = express.Router();

router.get("/", requireRole(['ADMIN']),  async (req, res) => {
  const { orgId } = req.context;

  const projects = await prisma.project.findMany({
    where: { orgId },
  });

  res.json(projects);
});

router.post("/", requireRole(['ADMIN']),async(req,res) => {

  const project = await prisma.project.create({
    data : {
      name : req.body.name,
      orgId : req.context.orgId
    }
  })

  return res.status(201).json(project);
}
);

module.exports = router;
