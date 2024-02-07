import { Injectable } from '@nestjs/common';
import { Menu } from './interfaces/menu.interfaces';
import { strict } from 'assert';

const dummyData: any = [
  {
    id:1,
    title: 'Paket Nasi + Ayam Bakar',
    description: 'ayam bakar khas daerah xyz',
    items: [
      {
        label: 'Nasi putih',
        icon: 'rice',
        disabled: false,
      },
      {
        label: 'Ayam Bakar',
        icon: 'meat',
        disabled: false,
      },
    ],
    price: 21000,
  },
  {
    title: 'Paket Nasi + Ikan bakar',
    description: 'ikan bakar khas daerah xyz',
    items: [
      {
        label: 'Nasi putih',
        icon: 'rice',
        disabled: false,
      },
      {
        label: 'Ikan bakar',
        icon: 'fish',
        disabled: false,
      },
    ],
    price: 32000,
  },
];

@Injectable()
export class AppService {
  private readonly menus: Menu[] = [];

  getMenus(): Menu[] {
    return dummyData;
  }

  createMenu(menu: Menu): Menu{
    menu.id = Math.floor(Math.random()*1000) + 1;
    dummyData.push(menu);
    return menu;
  }

  updateMenu(id: number, updatedMenu: Partial<Menu>): Menu | string {
    const index = dummyData.findIndex((menu) => menu.id === Number(id));
    if (index !== -1) {
      dummyData[index] = {...dummyData[index], ...updatedMenu};
      return dummyData[index];
    } else {
      return 'Gagal melakukan update atau id tidak dikenali';
    }
  }

  deleteMenu(id: number): Menu | string{
    const indexMenu =  dummyData.findIndex((menu) => menu.id === Number(id));
    if (indexMenu !== -1){
      const result: Menu = dummyData[indexMenu];
      dummyData.splice(indexMenu, 1);
      return result;
    } else {
      return 'Tidak ditemukan data dengan id tersebut!';
    }

  }

}
