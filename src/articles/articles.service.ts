import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./entities/article.entity";
import { Model } from "mongoose";

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>) {}

  async postArticle(createArticleDto: Article): Promise<Article> {
    const create = new this.articleModel(createArticleDto);
    return create.save();
  }

  async getArticles(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
