import { CategoryDTO } from "src/app/Category/models/category.dto";

export class CardDTO {
  postId!: string;
  title!: string;
  description!: string;
  userAlias!: string;
  categories!: CategoryDTO;
  num_likes!:number;
  num_dislikes!:number;
  imatge!: string;
  publication_date!: Date;
  showButtons!: boolean;

  constructor(
    postId: string,
    title: string,
    description: string,
    userAlias: string,
    num_likes:number,
    num_dislikes:number,
    imatge: string,
    publication_date: Date,
    showButtons: boolean
  ) {
      this.postId = postId;
      this.title = title; 
      this.description = description; 
      this.userAlias = userAlias; 
      this.num_likes = num_likes;  
      this.num_dislikes = num_dislikes; 
      this.imatge = imatge; 
      this.publication_date = publication_date;       
      this.showButtons = showButtons;
    }
}
