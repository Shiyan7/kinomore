export interface IReview {
    author: string;
    date: Date;
    id: number;
    movieId: number;
    review: string;
    reviewDislikes: number;
    reviewLikes: number;
    title: string;
    type: 'Позитивный' | 'Нейтральный' | 'Негативный';
    updatedAt: Date;
    userRating: number;
}