import * as request from '../../src/Utils/Request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
