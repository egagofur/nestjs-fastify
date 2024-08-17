import { Controller, Get, Post, Body } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { Article } from "./entities/article.entity";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post("create")
  postArticle(@Body() createArticleDto: Article): Promise<Article> {
    return this.articlesService.postArticle(createArticleDto);
  }

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }
}
