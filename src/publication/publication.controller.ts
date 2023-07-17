import { Body, Post, Controller, UseGuards, Get, Put } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from 'src/authentication/authGuard/auth.guard';
import { CreatePublicationDto } from './dto/publication.dto';
import { userRequest } from 'src/authentication/decorators/user-decorators';
import { User } from '@prisma/client';

@Controller()
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Put('publications')
  getUserPublications(@userRequest() user: User) {
    const userId = user.id;
    return this.publicationService.getPublications(userId);
  }

  @UseGuards(AuthGuard)
  @Post('publication')
  createPublication(
    @Body() body: CreatePublicationDto,
    @userRequest() user: User,
  ) {
    const userId = user.id;
    return this.publicationService.createPublication(body, userId);
  }
}
