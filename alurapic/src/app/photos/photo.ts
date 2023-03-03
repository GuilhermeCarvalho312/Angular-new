export interface Photo {
  id: number;
  userId: number;
  description: string;
  url: string;
  postDate: string;
  likes: number;
  comments: number;
  allowComments: boolean;
}
