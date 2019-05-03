import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Arsenal",
      'description': 'Arsenal Football Club is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football'
    },
    {
      'id': "2",
      'title': "Juventus",
      'description': 'Juventus Football Club, colloquially known as Juve, is an Italian professional football club based in Turin, Piedmont.'
    },
    {
      'id': "3",
      'title': "Real Madrid",
      'description': 'Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. Founded on 6 March 1902 as the Madrid Football Club, the club has traditionally worn a white home kit since inception'
    },
    {
      'id': "4",
      'title': "Dortmund",
      'description': 'Founded in 1909 by eighteen football players from Dortmund, the football team is part of a large membership-based sports club with more than 145,000 members, making BVB the second largest sports club by membership in Germany. Dortmund plays in the Bundesliga, the top tier of the German football league system.'
    },
    {
      'id': "5",
      'title': "Bengaluru Football Club",
      'description': 'Bengaluru Football Club is an Indian professional football club based in Bengaluru, Karnataka. The club competes as a member of the Indian Super League, one of the top leagues of Indian football..'
    }
  
  ]

  constructor() { }

  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
