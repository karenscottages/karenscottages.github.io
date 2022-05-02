/* 
    The scratch folder is there to be played with, for tyring out views etc.
    TODO: Anything in the scratch folder will be excluded from production builds.
 */

//import * as Ashutosh from './ashutosh';
import * as Cath from './cath';
import * as Mark from './mark';

const Scratch = {
    Cath: {menuName: 'Cath', views: Cath}, 
    Mark: {menuName: 'Mark', views: Mark}
};

export { Scratch };