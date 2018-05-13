import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
fcaEventList:any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
  	this.fcaEventList = [{
  		id: 1,
  		userImg: "https://i.pinimg.com/736x/d1/92/db/d192db8d2504d15c452799c739fbf4d3--social-worker-quotes-social-workers.jpg",
  		userName: "Marty McFly",
  		eventImg: "https://i.pinimg.com/736x/d1/92/db/d192db8d2504d15c452799c739fbf4d3--social-worker-quotes-social-workers.jpg",
  		eventTitle: "Nine Inch Nails Live",
  		eventDesc: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
  		eventTime: "Sat May 12 2018 00:58:14"
  	},{
  		id: 2,
  		userImg: "",
  		userName: "Raj",
  		eventImg: "",
  		eventTitle: "Helping to poor people",
  		eventDesc: "I is process of helping people and motivate awarness",
  		eventTime: "Sat May 12 2018 00:58:14"
  	},{
  		id: 3,
  		userImg: "http://img.picturequotes.com/2/665/664129/social-work-quote-13-picture-quote-1.jpg",
  		userName: "Jeeva",
  		eventImg: "http://img.picturequotes.com/2/665/664129/social-work-quote-13-picture-quote-1.jpg",
  		eventTitle: "Helping to poor people",
  		eventDesc: "I is process of helping people and motivate awarness",
  		eventTime: "Sat May 12 2018 00:58:14"
  	}]
  }
  confirmDelete(){
  		let confirm = this.alertCtrl.create({
	      title: 'Are you sure want delete?',
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: () => {
	            console.log('Disagree clicked');
	          }
	        },
	        {
	          text: 'Delete',
	          handler: () => {
	            console.log('Agree clicked');
	          }
	        }
	      ]
	    });
	    confirm.present();
	  }
  
addFcaEvent() {
  this.navCtrl.push(EventPage);
}
}
