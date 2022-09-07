import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dict: any;

  constructor(private dictService: DictionaryService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      const word = param.get('word');
      this.dict = this.dictService.translate(word);
    });
  }

}
