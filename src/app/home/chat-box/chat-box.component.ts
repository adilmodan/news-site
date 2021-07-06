import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
    socket: any;
    message='';
    msg ='';

  constructor() { }

  ngOnInit(): void {
      this.setupSocketConnection();
  }

  setupSocketConnection(){
      this.socket = io(SOCKET_ENDPOINT);
      this.socket.on('message-broadcast',(data: string) => {
        if(data){
            // const element = document.createElement('li');
            // element.innerHTML = data;
            // document.getElementById('message-list')?.appendChild(element);
            this.msg = this.msg + data + "\n";
        }
      });
  }

  sendMessage(){
    this.socket.emit('message', this.message);
    this.msg = this.msg + this.message + "\n";
    // alert(this.msg);
    // const element = document.createElement('li');
    // element.innerHTML = this.message;
    // document.getElementById('messageBox')?.append(this.message + "\n");
    this.message = '';
  }

}