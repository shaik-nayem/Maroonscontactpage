import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactusComponent } from "./component/contactus/contactus.component";




const routes :Routes =[{ path :'' ,component :ContactusComponent},{ path :'contactus' ,component :ContactusComponent}]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]


})

export class RoutingModule{


}