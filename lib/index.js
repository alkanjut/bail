import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log(chalk.bold.gray("-----------------------------------------\n"));
console.log(chalk.bold.green(`
    _    _     _  __    _                            
   / \  | |   | |/ /   / \                           
  / _ \ | |   | ' /   / _ \                          
 / ___ \| |___| . \  / ___ \                         
/_/__ \_\_____|_|\_\/_/ __\_\__   ______             
| __ )  / \  |_ _| |   | ____\ \ / / ___|            
|  _ \ / _ \  | || |   |  _|  \ V /\___ \            
| |_) / ___ \ | || |___| |___  | |  ___) |           
|____/_/ __\_\___|_____|_____|_|_| |____/_____ ____  
   / \  / ___|_   _|_ _\ \   / / \|_   _| ____|  _ \ 
  / _ \| |     | |  | | \ \ / / _ \ | | |  _| | | | |
 / ___ \ |___  | |  | |  \ V / ___ \| | | |___| |_| |
/_/   \_\____| |_| |___|  \_/_/   \_\_| |_____|____/ 
¤═―— [ ALKANJUT BAILEYS ⎭ ⊱―—═¤
Information: Alkanjut Baileys
System : Stability
Version : 11.6
Telegram : @AlkanjutReal
`));
console.log(chalk.bold.gray("--------------------------------------------\n"));
console.log(chalk.bold.green("Follow Our Telegram Channel To See Update Information: t.me/leakedbyalka\n"));

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
