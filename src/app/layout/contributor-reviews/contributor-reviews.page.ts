import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterContributorReviewsComponent } from 'src/app/layout/filter-contributor-reviews/filter-contributor-reviews.component';

@Component({
  selector: 'app-contributor-reviews',
  templateUrl: './contributor-reviews.page.html',
  styleUrls: ['./contributor-reviews.page.scss'],
})
export class ContributorReviewsPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) {

  }

  ngOnInit() {
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

}
