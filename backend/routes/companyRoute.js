import express from 'express'
const router = express.Router();
import { getAllCompany, getcompanyById,registerCompany, updateCompany} from '../controllers/companycontroller.js';
import { isAuthenticated } from '../middlewares/isAuthneticated.js';

router.post("/register",isAuthenticated,registerCompany);
router.get("/get",isAuthenticated,getAllCompany);
router.get("/get/:id",isAuthenticated,getcompanyById);
router.put("/update/:id", isAuthenticated,updateCompany);

export default router;

