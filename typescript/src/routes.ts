import {Request, Response } from 'express';
import creatUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = creatUser({
        email:'diego@rocketseat.com.br',
        password:'123456',
        techs: [
            'Node.js',
            'ReactJS',
            'ReactNative',
            {title: 'Javascript', experience: 100},
        ]
    })

    return response.json({message:'Hello World'})
}