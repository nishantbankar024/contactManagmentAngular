import { CanActivateFn, Router} from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem("logindata")){
   return true;
  }else{
    return false;
  }
  
};


