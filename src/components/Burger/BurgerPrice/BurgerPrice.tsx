import React, { useState } from 'react';
import './BurgerPrice.css';
import type { IIngredientCount } from '../../../type';
import { INGREDIENTS } from '../../../constants/constants';
import type { IIngredient } from '../../../type';

interface IBurgerPriceProps {
  ingredients: IIngredientCount[];
}

const BurgerPrice: React.FC<IBurgerPriceProps> = ({ ingredients }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (): number => {
    return ingredients.reduce((acc, ingredient) => {
      const ingredientData: IIngredient | undefined = INGREDIENTS.find(
        (item) => item.name === ingredient.name
      );

      if (ingredientData) {
        acc = ingredient.count * ingredientData.price + acc;
      }

      return acc;
    }, 30);
  };

  if (totalPrice !== calculateTotalPrice()) {
    const price = calculateTotalPrice();
    setTotalPrice(price);
  }

  return (
    <div className="price">
      <p className="price-label">Price</p>
      <p className="price-text">{totalPrice} SOM</p>
    </div>
  );
};

export default BurgerPrice;
