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
    @Get('/index')
    getWelcomePageWithIndex(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'welcome_view', 'index.html'));
    }

    @Get('/home_view/homePage')
    getHomePage(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'home_view', 'homePage.html'));
    }

    @Get('/subView/allProducts')
    getAllProductsPage(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'subView', 'allProducts.html'));
    }

    @Get('/subView/allProducts')
    getAllProductsWithFilter(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'subView', 'allProducts.html'));
    }

    @Get('/subView/productDetails')
    getProductDetailsPage(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'subView', 'details.html'));
    }

    @Get('/subView/cart')
    getCartPage(@Res() res: Response) {
        return res.sendFile(join(process.cwd(), 'src', 'public', 'subView', 'cart.html'));
    }
}
