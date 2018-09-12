import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  getMusic(): any[]{
    return [
      {
        '_id': 1,
        'name' : 'Myexperiments with Truth',
        'author':'M.K.Gandhi',
        'price':'$145'
      },
      {
        '_id':2,
        'name' : 'The Merchant of venice',
        'author':'William shakespeare',
        'price':'$543'
      },
      {
        '_id': 3,
        'name' : 'A Tale of Two Cities',
        'author':'Charles Dickens',
        'price':'$64'
      },
      {
        '_id': 4,
        'name' : 'Origin of species',
        'author':'charles Darwin',
        'price':'$283'
      },
      {
        '_id': 5,
        'name' : 'Time Machine',
        'author':'H.G. Wells',
        'price':'$12'
      },
      {
        '_id': 6,
        'name' : 'Mein Kampf',
        'author':'Adolf Hitler',
        'price':'$384'
      },
      {
        '_id': 7,
        'name' : 'Invisible Man',
        'author':'H.G. Wells',
        'price':'$123'
      }
    ]
  }
}
