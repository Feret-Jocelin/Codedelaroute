import { Injectable } from '@angular/core';
import { Categorie, Panneau } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  categories: Categorie[] = [
	{ id : 0,
		  image:"assets/images/danger.png",
		  title : "Danger",
      categorie : "category",
      texte :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
    { id : 1,
      image:"assets/images/interdiction.jpg",
      title : "Interdiction",
      categorie : "category",
      texte :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    { id : 2,
      image:"assets/images/information.png",
      title : "Information",
      categorie : "category",
      texte :"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    },
    { id : 3,
      image:"assets/images/obligation.jpg",
      title : "Obligation",
      categorie : "category",
      texte :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]; 
 
 panneaux : Panneau[] = [
    { id : 0,
      image:"assets/images/ville.png",
      categorie : "indication",
    },
    { id : 1,
      image:"assets/images/direction.png",
      categorie : "indication",
    },
    
  { id : 2,
      image:"assets/images/A1a.png",
      categorie : "danger",
    },
    { id : 3,
      image:"assets/images/A1c.png",
      categorie : "danger",
    },
    { id : 4,
      image:"assets/images/A3.png",
      categorie : "danger",
    },
    { id : 5,
      image:"assets/images/AB3a.png",
      categorie : "danger",
    },
    { id : 6,
      image:"assets/images/AB6.png",
      categorie : "danger",
    },
    { id : 7,
      image:"assets/images/stop.jpg",
      categorie : "danger",
    },
    { id : 8,
      image:"assets/images/B1.png",
      categorie : "interdiction",
    },
    { id : 9,
      image:"assets/images/B2a.png",
      categorie : "interdiction",
    },
    { id : 10,
      image:"assets/images/B3.png",
      categorie : "interdiction",
    },
    { id : 11,
      image:"assets/images/B14_50.png",
      categorie : "interdiction",
    },
    { id : 12,
      image:"assets/images/B21b.png",
      categorie : "obligation",
    },
    { id : 13,
      image:"assets/images/B21c1.png",
      categorie : "obligation",
    },
    { id : 14,
      image:"assets/images/B27b.png",
      categorie : "obligation",
    },
    { id : 15,
      image:"assets/images/B29.png",
      categorie : "obligation",
    },
    { id : 16,
      image:"assets/images/C1a.png",
      categorie : "indication",
    },
    { id : 17,
      image:"assets/images/C5.png",
      categorie : "indication",
    },
    { id : 18,
      image:"assets/images/C12.png",
      categorie : "indication",
    },
    { id : 19,
      image:"assets/images/C13a.png",
      categorie : "indication",
    },
    { id : 20,
      image:"assets/images/C207.png",
      categorie : "indication",
    },


  ];


  constructor() { }


  getAllPanneaux() {
      return this.panneaux;
    
  }
  getAllCategory() {
      return this.categories;
    
  }

  getcategory(id: number) {
	if (id < 0 || id >= this.categories.length) {
  	return null;
	}
	return this.categories[id];
  }

  getpanneau(id: number) {
  if (id < 0 || id >= this.panneaux.length) {
    return null;
  }
  return this.panneaux[id];
  }

}
