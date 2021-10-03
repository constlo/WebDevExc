import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import './components/ShoppingListItem.module.css'
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addItems = (itemID, itemName, itemQuantity) =>
  {
    return () => 
    {
      const itemIndex = this.state.items.findIndex(
      (element, index, array) => 
        {
          return element.value === itemName;
        }
      );

      if(itemIndex != -1)
      {
        //esine löytyi listasta, päivitä sen qty-ominaisuutta itemQuantity-argumentin avulla.
        console.log("success at index " + itemIndex);
        let newArr = [...this.state.items];
        newArr[itemIndex].qty += itemQuantity;
        this.setState({items: newArr});
        
      }
      else
      {
        //Esinettä ei löydy listasta. Lisätään uusi esine listaan setState()-funktion avulla.
        console.log("No items found");
        this.setState({items: [...this.state.items, {id: itemID, value: itemName, qty: itemQuantity, unit: 'x'}]});
      }
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addItems(5, 'Carrots', Math.floor(Math.random()*10) + 1)}>Carrots</button>
      <button onClick={this.addItems(6, 'Strawberries', Math.floor(Math.random()*10 + 1))}>Strawberries</button>
      <button onClick={this.addItems(7, 'Yoghurt', Math.floor(Math.random()*10) + 1)}>Yoghurt</button>
      <button onClick={this.addItems(8, 'Beer', Math.floor(Math.random()*10) + 1)}>Beer</button>
    </div>
  }
}

export default App;