import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

export const createJWT = (id: string) => {

    return new Promise((resolve, reject) => {
        
        const payload = { id };

        if (process.env.SECRET_JWT_SEED != undefined) {

            jwt.sign(payload, process.env.SECRET_JWT_SEED, {
                expiresIn: '1h'
            }, (error, token) => {

                if (error) {

                    console.log(error);
                    reject("There was a problem in the token generation.");
                }
                else {
                    
                    resolve(token);
                }
            });
        }
    })
}