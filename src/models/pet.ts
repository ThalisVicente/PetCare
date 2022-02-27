type PetType = 'dog' | 'cat' | 'fish'

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    gender: 'Male' | 'Female'
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Yellow e Black',
        gender: 'Male'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'White',
        gender: 'Male'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Yellow',
        gender: 'Female'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'White e Black',
        gender: 'Male'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Yellow',
        gender: 'Male'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'White',
        gender: 'Female'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'White e Yellow',
        gender: 'Male'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Yellow',
        gender: 'Male'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Black e White',
        gender: 'Male'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'White, Black e Yellow',
        gender: 'Female'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Yellow e Black',
        gender: 'Male'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'White',
        gender: 'Male'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Red e Blue',
        gender: 'Male'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Orange',
        gender: 'Male'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Green e White',
        gender: 'Male'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Red',
        gender: 'Male'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Black',
        gender: 'Male'
    },
]

export const Pet = {
    getAll:(): Pet[] => {
        return data;
    },

    getByType:(type: PetType): Pet[]=> {
        return data.filter(i => i.type === type);
    },

    getByName:(name: string): Pet[]=> {
        return data.filter(i => i.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};