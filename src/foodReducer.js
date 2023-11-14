import { createSlice } from "@reduxjs/toolkit";
import { foodList } from "./components/data";

const foodSlice = createSlice({
  name: "foods",
  initialState: {
    foodList: foodList,
    ingredientsList: null,
    cart: [],
  },
  reducers: {
    addfooditem: (state, action) => {
      const foodToAdd = state.foodList.find(
        (food) => food.id === action.payload
      );
      const alreadyAdded = state.cart.find(
        (food) => food.id === action.payload
      );

      if (foodToAdd) {
        if (alreadyAdded) {
          // Handle already added scenario if needed
        } else {
          state.cart.push(foodToAdd);

          // Check if ingredientsList is null, if so, initialize it as an empty array
          if (state.ingredientsList === null) {
            state.ingredientsList = [];
          }

          // Check if the data already exists in ingredientsList
          const existingIngredientIndex = state.ingredientsList.findIndex(
            (ingredient) =>
              ingredient.sugar === foodToAdd.sugar &&
              ingredient.salt === foodToAdd.salt
          );

          if (existingIngredientIndex === -1) {
            // Add sugar and salt with their values to ingredientsList
            state.ingredientsList.push({
              sugar: foodToAdd.sugar,
              salt: foodToAdd.salt,
            });

            // Log the ingredientsList to the console
            console.log("Ingredients List:", state.ingredientsList);
          } else {
            console.log("hello");
            // Update values if the condition is true
            state.ingredientsList[existingIngredientIndex].sugar =
              foodToAdd.sugar;
            state.ingredientsList[existingIngredientIndex].salt =
              foodToAdd.salt;

            // Log "hello" to the console
    
          }
        }
      }
    },
    selectCartCount: (state, action) => {
      const foodAlreadyAdded = state.foodList.find(
        (food) => food.id === action.payload
      );

      if (foodAlreadyAdded) {
        // Handle scenario when food is already added if needed
      } else {
        return state.food.cart.length;
      }
    },
  },
});

export const { addfooditem, selectCartCount } = foodSlice.actions;
export default foodSlice.reducer;
