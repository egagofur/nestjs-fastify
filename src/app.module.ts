import { Module } from "@nestjs/common";
import { ArticlesModule } from "./articles/articles.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017"), ArticlesModule],
})
export class AppModule {}
