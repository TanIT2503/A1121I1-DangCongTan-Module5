import { IStudent } from './../../models/IStudent';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeMark(target: any) {
    this.student.mark = target;
  }
  student: IStudent = {
    id: 1,
    name: 'Công Tấn',
    email: 'congtan2053@gmail.com',
    address: 'Danang',
    mark: 8,
    avatar: 'https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg'
  }
}
