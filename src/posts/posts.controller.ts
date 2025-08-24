import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/CreatePost.dto';
import { CreateGroupPostDto } from './dtos/CreateGroupPost.dto';
import { UpdatePostDto } from './dtos/UpdatePost.dto';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    // POST /posts
    @Post()
    @UsePipes(ValidationPipe)
    createPost(@Body() createPostData: CreatePostDto) {
        return this.postsService.createPost(createPostData);
    }

    // GET /posts
    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }

    // GET /posts/:id
    @Get(':id')
    getPostById(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.getPostById(id);
    }

    // PATCH /posts/:id
    @Patch(':id')
    @UsePipes(ValidationPipe)
    updatePost(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePostData: UpdatePostDto,
    ) {
        return this.postsService.updatePost(id, updatePostData);
    }

    // DELETE /posts/:id
    @Delete(':id')
    deletePost(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.deletePost(id);
    }

    // POST /posts/group
    @Post('group')
    @UsePipes(ValidationPipe)
    createGroupPost(@Body() createGroupPostData: CreateGroupPostDto) {
        return this.postsService.createGroupPost(createGroupPostData);
    }

    // GET /posts/group
    @Get('group')
    getGroupPosts() {
        return this.postsService.getGroupPosts();
    }

    // GET /posts/group/:id
    @Get('group/:id')
    getGroupPostById(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.getGroupPostById(id);
    }

    // DELETE /posts/group/:id
    @Delete('group/:id')
    deleteGroupPost(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.deleteGroupPost(id);
    }
}