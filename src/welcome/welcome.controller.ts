import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Welcome')
@Controller()
export class WelcomeController {
    @Get()
    getWelcomePage(@Res() res: Response) {
    return res.sendFile(join(process.cwd(), 'src', 'public', 'welcome_view', 'index.html'));
    }
}
