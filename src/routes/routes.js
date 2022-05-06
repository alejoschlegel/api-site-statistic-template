import { Router } from "express";
import axios from 'axios'

const router = Router();

router.get('/random-user', async (req, res) => {
    const user = await axios.get('https://randomuser.me/api/');
    const data = {
        name: user.data.results[0].name.first + ' ' + user.data.results[0].name.last,
        email: user.data.results[0].email,
        phone: user.data.results[0].phone,
        picture: user.data.results[0].picture.large,
    }
    res.json(data);
});

export default router;