/**
 * Created by sam on 19.07.17.
 */

const menuObject = {
  pizza:
    [{ cost: 5, name: 'cheesy', quantity: 0 }],

  meat:
    [{ cost: 20, name: 'goose', quantity: 0 }, { cost: 24, name: 'dog', quantity: 0 }],

  salad:
    [{ cost: 2, name: 'cesar', quantity: 0 }, { cost: 4, name: 'sea salad', quantity: 0 }, { cost: 10, name: 'qqq', quantity: 0 }],

  hotMeal:
    [{ cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 }, { cost: 525, name: 'soup', quantity: 0 },
      { cost: 430, name: 'noodles', quantity: 0 }, { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 },
      { cost: 525, name: 'soup', quantity: 0 }, { cost: 430, name: 'noodles', quantity: 0 }],
};

export default
function menu(state = menuObject) {
  return state;

  }

