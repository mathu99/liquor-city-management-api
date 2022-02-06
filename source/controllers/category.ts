/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Category {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// add category
const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    // let title: string = req.body.title;
    // let body: string = req.body.body;
    // // add the post
    // let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    //     title,
    //     body
    // });
    console.log('request', req.body);
    // return response
    return res.status(200).json({
        // message: response.data
        message: 'Success'
    });
};

// add category
const editCategory = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    // let title: string = req.body.title;
    // let body: string = req.body.body;
    // // add the post
    // let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    //     title,
    //     body
    // });
    console.log('request', req.body);
    // return response
    return res.status(200).json({
        // message: response.data
        message: 'Success'
    });
};

export default { addCategory, editCategory };