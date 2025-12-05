import type React from 'react';
import { INGREDIENTS } from '../../../constants/constants';
import Button from '../../../UI/Button/Button';
import './BurgerConstructorActions.css';

interface IBurgerConstructorActions {
  getIngredient: (ingredientName: string) => void;
  onDeleteIngredient: (ingredientName: string) => void;
  ingredientCount: (ingredientName: string) => number;
}

const BurgerConstructorActions: React.FC<IBurgerConstructorActions> = ({
  getIngredient,
  onDeleteIngredient,
  ingredientCount,
}) => {
  return (
    <div className="burger-constructor-actions">
      <h2 className="ingredient-title">Ingredients</h2>
      {INGREDIENTS.map((ingredient) => (
        <div className="action" key={ingredient.name}>
          <Button
            type="button"
            className={`burger-constructor-action ${ingredient.name.toLowerCase()}-button`}
            onClick={() => getIngredient(ingredient.name)}
          />
          <span className="ingredient-name">{ingredient.name}</span>
          <p className="ingredient-count">{ingredientCount(ingredient.name)}</p>
          <Button
            type="button"
            className="burger-constructor-action burger-constructor-action-delete"
            onClick={() => onDeleteIngredient(ingredient.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default BurgerConstructorActions;
