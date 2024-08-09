import GreekSalad from './images/greek salad.jpg';
import Bruschetta from './images/bruschetta.jpg';
import LemonDessert from './images/lemon dessert.jpg';

const recipes = [
    {
        id: 1,
        title: "Greek Salad",
        price: 12,
        image: GreekSalad,  // Use the image import directly
        description: "The famous Greek salad with crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        id: 2,
        title: "Bruschetta",
        price: 5,
        image: Bruschetta,  // Use the image import directly
        description: "Our Bruschetta is made from sourdough bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: 4.50,
        image: LemonDessert,  // Use the image import directly
        description: "Straight from grandma's recipe book, every last ingredient is as authentic as can be."
    },
];

export default recipes;
