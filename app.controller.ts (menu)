import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Menu } from './interfaces/menu.interfaces';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

//  @Get()
// getHello(): string {
    // return this.appService.getHello();
  // }
  @Get('/menus')
  getMenus(): Menu[]{
    return this.appService.getMenus();
  }

  @Post('/menus')
  createMenu(@Body() menu: Menu): Menu {
    return this.appService.createMenu(menu);
  }

  @Put('/menus/:id')
  updateMenu(
    @Param('id') id: number,
    @Body() updatedMenu: Partial<Menu>,
  ): Menu | string {
    return this.appService.updateMenu(id, updatedMenu);
  }

  @Delete('/menus/:id')
  deleteMenu(@Param('id') id: number): Menu | string {
    return this.appService.deleteMenu(id);
  }
}
