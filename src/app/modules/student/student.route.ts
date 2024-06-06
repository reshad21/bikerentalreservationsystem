import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/:studentid', StudentController.getSingleStudent);

router.patch(
    '/:studentid',
    validateRequest(updateStudentValidationSchema),
    StudentController.updateStudent
);

router.delete('/:studentid', StudentController.deleteStudent);

router.get('/', StudentController.getAllStudents);

export const StudentRoutes = router;