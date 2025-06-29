import { Request, Response } from 'express';
import {exampleService } from '../services/example.services';
export const userController = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await exampleService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {    
            console.error('Error in controller fetching users:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};
