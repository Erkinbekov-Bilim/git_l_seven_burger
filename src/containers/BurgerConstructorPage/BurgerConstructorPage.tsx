import { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerConstructorActions from '../../components/Burger/BurgerConstructorActions/BurgerConstructorActions';
import type { IIngredientCount } from '../../type';
import './BurgerConstructorPage.css';

const BurgerConstructorPage = () => {
  const [ingredients, setIngredients] = useState<IIngredientCount[]>([
    {
      name: 'Meat',
      count: 0,
    },
    {
      name: 'Cheese',
      count: 0,
    },
    {
      name: 'Bacon',
      count: 0,
    },
    {
      name: 'Salad',
      count: 0,
    },
  ]);

  const getIngredient = (ingredientName: string): void => {
    const newIngredientData = ingredients.map((ingredient) => {
      if (ingredient.name === ingredientName) {
        ingredient.count++;
        return ingredient;
      }

      return ingredient;
    });

    setIngredients(newIngredientData);
  };

  const onDeleteIngredient = (ingredientName: string): void => {
    const newIngredientData = ingredients.map((ingredient) => {
      if (ingredient.name === ingredientName && ingredient.count > 0) {
        ingredient.count--;
        return ingredient;
      }

      return ingredient;
    });
    setIngredients(newIngredientData);
  };

  const ingredientCount = (ingredientName: string): number => {
    const ingredient = ingredients.find((item) => item.name === ingredientName);
    return ingredient ? ingredient.count : 0;
  };

  return (
    <div className="burger-constructor">
      <BurgerConstructorActions
        getIngredient={getIngredient}
        onDeleteIngredient={onDeleteIngredient}
        ingredientCount={ingredientCount}
      />
      <Burger ingredients={ingredients} />
    </div>
  );
};

export default BurgerConstructorPage;
