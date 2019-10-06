import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNew'
})
export class FilterNewPipe implements PipeTransform {

  transform(items: any[], filter: any,arg:any,arg1:any,arg2:any): any {
          if (!items || !filter) {
              return items;
          }
          // filter items array, items which match and return true will be
          // kept, false will be filtered out
          console.log(arg)
            console.log(arg1);
            console.log(arg2);
            if(arg1){
              return items.filter(item => {
                if(arg1 == 'g'){
                 if(parseInt(item[arg]) > parseInt(arg2)) {
                   return true;
                 }else {
                   return false;
                 } 
                }else if(arg1 == 'l'){
                  if(parseInt(item[arg]) < parseInt(arg2)) {
                    return true;
                  }else {
                    return false;
                  } 
                }else if(arg1 == 'e'){
                console.log("From Pipe" + item[arg] )
                console.log("From Pipe arg" + arg2 );

                  if((item[arg]) == (arg2)) {
                    return true;
                  }else {
                    return false;
                  } 
                }
            
 
              });
            }else{
              return items.filter(item => {

                return item[arg].indexOf(filter) !== -1;
              });
            }
            

           
      }

}

// export class MyFilterPipe implements PipeTransform {
//   transform(items: any[], filter: Object): any {
//       if (!items || !filter) {
//           return items;
//       }
//       // filter items array, items which match and return true will be
//       // kept, false will be filtered out
//       return items.filter(item => item.title.indexOf(filter.title) !== -1);
//   }

