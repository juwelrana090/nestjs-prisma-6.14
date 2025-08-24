// ./dtos/UpdatePost.dto.ts
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePostDto {
    @IsString()
    @IsOptional()
    @MaxLength(200)
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;
}