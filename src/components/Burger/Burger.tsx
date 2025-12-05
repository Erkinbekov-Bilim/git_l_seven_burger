import React, { useState } from 'react';
import './Burger.css';
import BurgerPrice from './BurgerPrice/BurgerPrice';
import type { IIngredientCount } from '../../type';
import generateID from '../../utils/generateId';

interface IIngredientsProps {
  ingredients: IIngredientCount[];
}

const Burger: React.FC<IIngredientsProps> = ({ ingredients }) => {
  const createBurgerIngredients = (): React.ReactNode[] => {
    const burgerIngredients: React.ReactNode[] = [];
    ingredients.forEach((ingredient) => {
      for (let i = 0; i < ingredient.count; i++) {
        let ingredientElement = null;
        switch (ingredient.name) {
          case 'Salad':
            ingredientElement = (
              <div key={generateID()} className={`${ingredient.name}`}></div>
            );
            break;
          case 'Bacon':
            ingredientElement = (
              <div key={generateID()} className={`${ingredient.name}`}></div>
            );
            break;
          case 'Cheese':
            ingredientElement = (
              <div key={generateID()} className={`${ingredient.name}`}></div>
            );
            break;
          case 'Meat':
            ingredientElement = <div key={generateID()} className={`${ingredient.name}`}></div>;
            break;
          default:
            ingredientElement = null;
        }
        burgerIngredients.push(ingredientElement);
      }
    });
    return burgerIngredients;
  };

  return (
    <div className="BurgerContent">
      <h2 className="Burger-title">Burger</h2>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {createBurgerIngredients()}
        <div className="BreadBottom"></div>
      </div>
      <BurgerPrice ingredients={ingredients} />
    </div>
  );
};

export default Burger;
