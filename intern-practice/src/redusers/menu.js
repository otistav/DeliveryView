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
  [{ cost: 525, name: 'soup', quantity: 0, img: 'http://st2.depositphotos.com/2036925/10618/i/950/depositphotos_106180268-stock-photo-asian-soup-ramen-with-feta.jpg' },
    { cost: 430, name: 'noodles', quantity: 0, img: 'http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/14416/SMV3NcvcGtowI8hsEp5Rog.jpg' },
    { cost: 430, name: 'pilaf', quantity: 0, img: 'http://www.koolinar.ru/all_image/recipes/126/126459/r126459.jpg' },
    { cost: 430, name: 'onigiri', quantity: 0, img: 'http://www.wandercooks.com/wp-content/uploads/2015/12/simple-onigiri-rice-ball-snack-13.jpg' },
    { cost: 430, name: 'rice balls', quantity: 0, img: 'http://christinascucina.com/wp-content/uploads/2013/03/Arancini-Sicilian-Rice-Balls-Christinas-Cucina-1024x682.jpg' },
    { cost: 430, name: 'fried potatos', quantity: 0, img: 'http://pad2.whstatic.com/images/thumb/d/d8/Make-Fried-Potatoes-Step-33.jpg/aid36590-v4-728px-Make-Fried-Potatoes-Step-33.jpg' },
    { cost: 430, name: 'boiled fish ', quantity: 0, img: 'https://www.trubahamianfoodtours.com/wp-content/uploads/2015/12/BoiledFish1.png' },
    { cost: 430, name: '', quantity: 0 }],
};

export default
function menu(state = menuObject) {
  return state;
}

