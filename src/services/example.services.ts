import db from '../db';
export const exampleService = {
    getAllUsers: async () => {
        const [rows] = await (await db).query('select * from users');
        return rows;
    },
};

export default exampleService;
