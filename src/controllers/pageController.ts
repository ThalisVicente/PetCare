import { Request, Response} from 'express';
import {createMenuObject}from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu:createMenuObject('all'),
        banner:{
            title: 'All Pets',
            background:'allanimals.jpg'
        },
        list

    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getByType('dog');

    res.render('pages/page', {
        menu:createMenuObject('dog'),
        banner:{
            title: 'Dogs',
            background:'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getByType('cat');

    res.render('pages/page', {
        menu:createMenuObject('cat'),
        banner:{
            title: 'Cats',
            background:'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getByType('fish');

    res.render('pages/page', {
        menu:createMenuObject('fish'),
        banner:{
            title: 'Fishes',
            background:'banner_fish.jpg'
        },
        list
    });
}