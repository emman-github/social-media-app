import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterContributorReviewsComponent } from 'src/app/layout/filter-contributor-reviews/filter-contributor-reviews.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contributor-reviews',
  templateUrl: './contributor-reviews.page.html',
  styleUrls: ['./contributor-reviews.page.scss'],
})
export class ContributorReviewsPage implements OnInit {
  reviews: any;
  review: object;
  name: string;
  start: number;
  text: string;
  date: string;
  likes: boolean;
  heartByYou: boolean;


  constructor(
    private modalController: ModalController,
    private httpClient: HttpClient  
  ) {
    this.reviews = [
      {
        'name': 'Kennie B.',
        'start': 5,
        'text': 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
        'date': '1/19/19',
        'likes': '100',
        'heartByYou': true
      } 
    ];

    this.review = {
      'name': 'Emmanuel H.',
      'start': 0,
      'text': null,
      'date': null,
      'likes': 0,
      'heartByYou': false 
    }
  }

  ngOnInit() {
    this.getAllReviews()
    // this.getAllReviews().then((data) => {
    //   console.log(data);
    // });
  }

  async filterReviews() {
    const modal = await this.modalController.create({
      component: FilterContributorReviewsComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        // 'ticketData': ticket,
        // 'eventData': this.eventData,
        // 'userID': this.userID
      }
    });

    return await modal.present();
  }

  createReview() {
    // reviewerId, contributorId, text, star, 
    // const promise = new Promise((resolve, reject) => {
    //   this.httpClient.post('https://jsonplaceholder.typicode.com/todos', data).subscribe(data => { 
    //     resolve(data);
    //   });
    // });    

    // return promise;
  }  

  async getAllReviews(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkNjM4M2I3OC1jZjJiLTQyNGUtYTg1MS0xNzg2Mjg2OTA4OWEiLCJqdGkiOiJiOTdmMjgzNS00ZjBjLTRhOGUtOTUwZC1hMjhjYWRkNDQ5YzQiLCJleHAiOjE1NzY3NjE5NjF9.bODFIkl1bBqKFBl1HdlhDRxelQSL2iS0Q2Izt9b5imSGqcsHLGTGIXHPUJuutmmIQ3YBozmTdyLvEHVv8UVfCw'
        })
      }
  
      this.httpClient.get('http://staging-api.allchops.com/api/user/d508db76-3c46-4eb4-88e8-a084c281d2ee/reviews', httpOptions).subscribe((data: any) => { 
        console.log(JSON.stringify(data));
        this.reviews = data;
        resolve(data);
      });
    });    

    return promise;
  }

  isHeartByYou(review) {
    return review.heartByYou;
  }

  addReview() { 
    const review = {
      'name': this.name,
      'start': 5,
      'text': 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      'date': '1/19/19',
      'likes': '100',
      'heartByYou': true
    }     

    
    this.reviews.push(this.review);
  }

  // getReviewerName(review: any) {
  //   // if (review.reviewer.firstName) {
  //   //   console.log(1)
  //   // } else {
  //   //   alert(2)
  //   // } 
  //   return review.reviewer.firstName;
  // }

}
