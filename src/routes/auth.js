import express from 'express';
import prisma from '../config/prisma'
import { generateAccessToken } from '../utils/token';

const router = express.Router();

router.post('/register', async(req,res) => {
    const org = await prisma.organisation.create({
        name : req.body.name,
        slug : req.body.slug,
        logo : req.body.logo

    });

    const adminUser = await prisma.user.create({
        email : req.body.email,
        role : "ADMIN",
        orgId : org.id
    });

    const token = generateAccessToken({
        userId : adminUser.id,
        orgId : org.id,
        role : "ADMIN"

    });




});

module.exports = router;