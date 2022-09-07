import { Injectable } from '@angular/core';
import {DictionaryDao} from '../DAO/DictionaryDao';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  getAll() {
    return DictionaryDao.dictionary;
  }
  translate(word: string) {
    return DictionaryDao.dictionary.find((dict) => dict.word === word);
  }
  constructor() { }
}
