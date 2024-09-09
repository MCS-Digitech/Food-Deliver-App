import React from 'react';
import classess from './Avaliable.module.css'
import DUMMY_MEALS from '../../assets/dummy'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
    const formater = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    const dataMeal = DUMMY_MEALS.map( item => 
        <MealItem 
        key={item.id} 
        id={item.id} 
        name={item.name} 
        description={item.description} 
        price={item.price} />
        )
    return (
        <section className={classess.meals}>
            <ul>
                <Card>
                    {dataMeal}
                </Card>
            </ul>
        </section>
    );
}

export default AvailableMeals;
