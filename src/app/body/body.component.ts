import { Component, OnInit } from '@angular/core'
import { IMessages } from '../imessages'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  current: IMessages
  constructor() {
    this.current = {
      msg1:'We\'re so excited to see you here . . .',
      msg2:'Welcome to the Yummilicious world of mondé'

    } as IMessages
  }

  ngOnInit() {}
}
