import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  books:any=[
    {
      "title":"The Abandoned Clutter",
      "image":"https://blog.flipsnack.com/wp-content/uploads/2019/08/4.jpg",
      "author":"Theodore Ash",
      "view":"View",
    },
    {
      "title":"Ethics of Interogation",
      "image":"https://www.shortlist.com/media/imager/202002/46005-posts.article_md.jpg",
      "author":"Michael Skerker",
      "view":"View",
    },
    {
      "title":"Sweet Bird of Youth",
      "image":"https://onextrapixel.com/wp-content/uploads/2013/05/sweet-bird-of-youth.jpg",
      "author":"Tenesse Williams",
      "view":"View",
    },
    {
      "title":"Artificial Intelligence",
      "image":"https://templates.mediamodifier.com/5ef2f122053084616db6749a/artificial-intelligence-book-cover-template.jpg",
      "author":"Mike Adams",
      "view":"View",
    },
    {
      "title":"The Sun of the Lordstar",
      "image":"https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/59958/optimized_large_thumb_stage.jpg",
      "author":"Theodore",
      "view":"View",
    },
    {
      "title":"The Rebirth of You",
      "image":"https://images-platform.99static.com//7Tzd__lpPb0VX-WVWt7OyKfFc40=/fit-in/500x500/projects-files/56/5686/568603/cd37bbc0-40b8-46e1-8c91-96ef13fea333.jpg",
      "author":"Meagan Austin",
      "view":"View",
    },
    {
      "title":"The King of Drugs",
      "image":"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457",
      "author":"Nora Barret",
      "view":"View",
    },
    {
      "title":"The Martian",
      "image":"https://i.pinimg.com/originals/35/66/dc/3566dc24c327c144d18dffbac7145d28.jpg",
      "author":"Andy Weir",
      "view":"View",
    },
    {
      "title":"Dreaming arts",
      "image":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930",
      "author":"Tom Malony",
      "view":"View",
    },
    {
      "title":"Big Business",
      "image":"https://cdn5.f-cdn.com/contestentries/1840252/39964678/5fa3d8364496e_thumb900.jpg",
      "author":"Belinda Mclean",
      "view":"View",
    },
    {
      "title":"The North Business",
      "image":"https://cdn.dribbble.com/users/2364013/screenshots/5947045/75_4x.png",
      "author":"Bobby Albert",
      "view":"View",
    },
    {
      "title":"The Psychology of Money",
      "image":"https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "author":"Morgan Housel",
      "view":"View",
    }

  ]

}
