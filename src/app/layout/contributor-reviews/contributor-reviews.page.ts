import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
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

  oneDay: any;
  loading: any;
  star: number;

  averageStars: any; 
  ratedStar: any;

  displayedStars: any = [];

  constructor(
    private modalController: ModalController,
    private httpClient: HttpClient,
    private loadingController: LoadingController  
  ) {
    this.reviews = [
     
    ];

    this.review = {
      'name': 'Emmanuel H.',
      'start': 0,
      'text': null,
      'date': null,
      'likes': 0,
      'heartByYou': false 
    }

    this.oneDay = 60 * 60 * 24 * 1000;

    this.displayedStars = [
      {value: 1, iconName: 'star-outline'},
      {value: 2, iconName: 'star-outline'},
      {value: 3, iconName: 'star-outline'},
      {value: 4, iconName: 'star-outline'},
      {value: 5, iconName: 'star-outline'}
    ]
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
        console.log(data);
        this.reviews = data.reverse();
        let starsCount = 0;
        let stars = 0;
        this.reviews.forEach(function(review, index) {
          starsCount++;
          stars = stars + review;
        });

        this.averageStars = stars / starsCount;
        console.log(this.averageStars);
        resolve(data);
      });
    });    

    return promise;
  }

  isHeartByYou(review) {
    return review.heartByYou;
  }

  addReview() { 
    // this.presentLoading();
    // const review = {
    //   'name': this.name,
    //   'start': 5,
    //   'text': 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    //   'date': '1/19/19',
    //   'likes': '100',
    //   'heartByYou': true
    // }     

//     {
// "postId": null,
//   "reviewerId": "92cf5e3c-91b4-4e15-8531-a3c2dcea2084",
//   "stars": 5,
//   "text": "A Sample text",
//   "userId": "d508db76-3c46-4eb4-88e8-a084c281d2ee"
// }

    
//     this.reviews.push(this.review);
    const promise = new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkNjM4M2I3OC1jZjJiLTQyNGUtYTg1MS0xNzg2Mjg2OTA4OWEiLCJqdGkiOiJiOTdmMjgzNS00ZjBjLTRhOGUtOTUwZC1hMjhjYWRkNDQ5YzQiLCJleHAiOjE1NzY3NjE5NjF9.bODFIkl1bBqKFBl1HdlhDRxelQSL2iS0Q2Izt9b5imSGqcsHLGTGIXHPUJuutmmIQ3YBozmTdyLvEHVv8UVfCw'
        })
      }
      
      const data = {
        "postId": null,
        "reviewerId": "92cf5e3c-91b4-4e15-8531-a3c2dcea2084",
        "stars": 5,
        "text": this.text,
        "userId": "d508db76-3c46-4eb4-88e8-a084c281d2ee" 
      }

      this.httpClient.post('http://staging-api.allchops.com/api/review', data, httpOptions).subscribe((review: any) => { 
        this.text = '';
        this.reviews.unshift(review);
        // this.dismissLoading();
        console.log(data);
        resolve(data);
      });
    });    

    return promise;

  }

  // getReviewerName(review: any) {
  //   // if (review.reviewer.firstName) {
  //   //   console.log(1)
  //   // } else {
  //   //   alert(2)
  //   // } 
  //   return review.reviewer.firstName;
  // }


  displayDate(review) {
    const createdDate = new Date(review.createdDate);
    const milliseconds = createdDate.getMilliseconds();

    // if (milliseconds >= this.oneDay) {
      return review.createdDate;
    // } else {
    //   const hours = (((this.oneDay - milliseconds) / (1000*60*60)) % 24);
    //   return hours 
    // }

   
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Saving review...'
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }  

  async dismissLoading() {
    this.loading.dismiss();
  }

  hasNoText() {
    console.log(this.text === undefined || this.text === null || this.text === '');
    return this.text === undefined || this.text === null || this.text === '';
  }

  getRatedStar(value: number) {
    // console.log(this.displayedStars[0])

    this.displayedStars.forEach(function(displayedStar, index, arr) {
      // console.log(index);
      
      // console.log(arr[index])
      if ((index + 1) <= value) {
        arr[index].iconName = 'star';
        // console.log(this.displayedStars);
      } else {
        arr[index].iconName = 'star-outline';
      }
    });
   
  }

  hasNoRatedStar(): boolean {

    for (var i = 0; i < 5; i++) { 
      if (this.displayedStars[i].iconName === 'star') {

        return false; 
      
      }
    }
 
    return true;

    // this.displayedStars.forEach(function(displayedStar, index, arr) {
    //   if (displayedStar.iconName === 'star') {
    //     console.log(1);
    //     return false;
    //   }
    // });
    // console.log(2);
    // return true;
  }

}
