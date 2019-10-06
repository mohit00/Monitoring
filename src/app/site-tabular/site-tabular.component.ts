import { Component, OnInit } from '@angular/core';
import { Service } from '../Service/Services';
import { ReportDialogComponent } from '../report-component/report-dialog/report-dialog.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-site-tabular',
  templateUrl: './site-tabular.component.html',
  styleUrls: ['./site-tabular.component.scss']
})
export class SiteTabularComponent implements OnInit {
  bsModalRef: BsModalRef;

  
  amrList:any;
  constructor(private Service: Service, private modalService: BsModalService) { }
  changetoggel(data){
this.getArmList(data);
  }
getArmList(data){
  let dataJson = {
    token_id:this.Service.getLoginDetail.resources[0].token_id,
    type:data
  }
   this.Service.getTabView(dataJson).subscribe(res=>{
this.amrList = res.resources;
console.log(JSON.stringify(this.amrList));
  });
}
colorBox(type,number){
  if(number >0){}else{
    return '';
  }
  if(type == 'faultydic' ){
        return 'dicFaulty'
  }else if(type == 'unhealthydic'){
    return 'dicunHealthy'


  }else if(type == 'maintdic' ){
    return 'dicmaint'
  }else if(type == 'unhealthySensors' ){
    return  'unhealthySensors';
  }else if(type == 'ZeroToRead' ){
    return  'ZeroToRead';
  }else if(type =='MaintSensor'){
    return 'MaintSensor';
  }else if(type =='faultySensor'){
    return 'faultySensor';
  }
  else if(type =='disconnectSens'){
    return 'disconnectSens';
  }else if(type =='SensorConnected'){
    return 'SensorConnected';
  }else if(type =='lowBalance'){
    return 'lowBalance';
  }else{
    return '';
  }
}

popuptab(type,number,id,name){
   if(number>0){

  }else{
    return false;
  }
   if(type == 'unhealthyDICS'){
    this.popUp('unhealthy',id,'DIC',name)

  }else if(type == 'maintDic'){
    this.popUp('Faulty',id,'DIC',name);

  }else if(type == 'faultDic'){
    
    this.popUp('Maint',id,'DIC',name)

  }else if(type == 'unhealthySensors'){
     
    this.popUp('unhealthy',id,'Meter',name)

  }else if(type == 'ZeroToRead'){
    this.popUp('zeroreading',id,'Meter',name)

  }else if(type == 'MaintSensor'){
    
    this.popUp('Maint',id,'Meter',name)

  }else if(type == 'faultySensor'){
    this.popUp('Faulty',id,'Meter',name)

  }else if(type == 'disconnectSens'){
    this.popUp('disconnected',id,'Meter',name)

  }else if(type == 'SensorConnected'){
    this.popUp('connected',id,'Meter',name)

  }else if(type == 'lowBalance'){
    this.popUp('LowBalance',id,'Meter',name)

  }

}
popUp(devicetype , id,type,name){
  const dataJson = {
    token_id: this.Service.getLoginDetail.resources[0].token_id,
    type:type,
    status:devicetype,
    id: id,
   };
 
    this.Service.getGraphData(dataJson).subscribe(res => {
       const initialState = {
        type:type,
        status:devicetype,
      data: res.resources,
      siteName: name

    };
     this.bsModalRef = this.modalService.show(ReportDialogComponent,  {initialState, class: 'gray modal-lg' });

     this.bsModalRef.content.onClose.subscribe(result => {

   });

})


}
advance:String[] ;
advancesymbol:any = '';
countsearch:any = '';
symbolSplit :String[];
onSearchChange(data){
   this.search = data;
  this.searchType = 'name';
  if(data.indexOf(':') >= 0){
    this.advance = data.split(':');
      if(this.advance.length > 1){
        
       if(this.advance[0].toLowerCase() == "d"){

        if(this.advance[1].indexOf('>') >= 0){
         this.symbolSplit =  this.advance[1].split('>');

          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'g'

          }
         }else
        if(this.advance[1].indexOf('<') >= 0){
          this.symbolSplit =  this.advance[1].split('<');
          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'l'

          }
         }else if(this.advance[1].indexOf('=') >= 0){
          this.symbolSplit =  this.advance[1].split('=');
          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'e'

          }
        }
         
          if(this.symbolSplit[0].toLowerCase() == "uh"){
            this.searchType = 'unhealthyDICS';
           }
           if(this.symbolSplit[0].toLowerCase() == "h"){
            this.searchType = 'CountHealthyDIC';
           }
           if(this.symbolSplit[0].toLowerCase() == "m"){
            this.searchType = 'maintDic';
           }
           if(this.symbolSplit[0].toLowerCase() == "f"){
            this.searchType = 'faultDic';
           }
       }
       if(this.advance[0].toLowerCase() == "s"){
        

        
        if(this.advance[1].indexOf('=') >= 0){
           this.symbolSplit =  this.advance[1].split('=');
           this.countsearch = this.symbolSplit[1];
           
             this.advancesymbol = 'e'
  
         }
          
         if(this.symbolSplit[0].toLowerCase() == "n"){
             this.searchType = 'name';
             }
             if(this.symbolSplit[0].toLowerCase() == "s"){
              this.searchType = 'supervisor';
              }
              if(this.symbolSplit[0].toLowerCase() == "m"){
                this.searchType = 'phone';
                }
                if(this.symbolSplit[0].toLowerCase() == "t"){
                  this.searchType = 'Converts ';
                  }
                if(this.symbolSplit[0].toLowerCase() == "act"){
                  this.searchType = 'status';
                  }
                  if(this.symbolSplit[0].toLowerCase() == "c"){
                    this.searchType = 'communication';
                    }if(this.symbolSplit[0].toLowerCase() == "Admin"){
                      this.searchType = 'admin_status';
                      }
          //  if(this.symbolSplit[0].toLowerCase() == "c"){
          //    this.searchType = 'sensors';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "h"){
          //    this.searchType = 'SensorHealthy';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "uh"){
          //    this.searchType = 'unhealthySensors';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "z"){
          //    this.searchType = 'ZeroToRead';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "z"){
          //    this.searchType = 'ZeroToRead';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "m"){
          //    this.searchType = 'MaintSensor';
          //   }
          //   if(this.symbolSplit[0].toLowerCase() == "f"){
          //    this.searchType = 'faultySensor';
          //   }  if(this.symbolSplit[0].toLowerCase() == "d"){
          //    this.searchType = 'disconnectSens';
          //   }  if(this.symbolSplit[0].toLowerCase() == "con"){
          //    this.searchType = 'SensorConnected';
          //   }  if(this.symbolSplit[0].toLowerCase() == "l"){
          //    this.searchType = 'lowBalance';
          //   }
      }
      if(this.advance[0].toLowerCase() == "m"){

        
        if(this.advance[1].indexOf('>') >= 0){
         this.symbolSplit =  this.advance[1].split('>');

          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'g'

          }
         }else
        if(this.advance[1].indexOf('<') >= 0){
          this.symbolSplit =  this.advance[1].split('<');
          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'l'

          }
         }else if(this.advance[1].indexOf('=') >= 0){
          this.symbolSplit =  this.advance[1].split('=');
          this.countsearch = this.symbolSplit[1];
          if( this.countsearch>0){
            this.advancesymbol = 'e'

          }
        }
         
          if(this.symbolSplit[0].toLowerCase() == "c"){
            this.searchType = 'sensors';
           }
           if(this.symbolSplit[0].toLowerCase() == "h"){
            this.searchType = 'SensorHealthy';
           }
           if(this.symbolSplit[0].toLowerCase() == "uh"){
            this.searchType = 'unhealthySensors';
           }
           if(this.symbolSplit[0].toLowerCase() == "z"){
            this.searchType = 'ZeroToRead';
           }
           if(this.symbolSplit[0].toLowerCase() == "z"){
            this.searchType = 'ZeroToRead';
           }
           if(this.symbolSplit[0].toLowerCase() == "m"){
            this.searchType = 'MaintSensor';
           }
           if(this.symbolSplit[0].toLowerCase() == "f"){
            this.searchType = 'faultySensor';
           }  if(this.symbolSplit[0].toLowerCase() == "d"){
            this.searchType = 'disconnectSens';
           }  if(this.symbolSplit[0].toLowerCase() == "con"){
            this.searchType = 'SensorConnected';
           }  if(this.symbolSplit[0].toLowerCase() == "l"){
            this.searchType = 'lowBalance';
           }
       
      }
 
    }
 }

}
search:any =''
searchType:any = '';
  ngOnInit() {
    this.getArmList('AMR');
  }
}
