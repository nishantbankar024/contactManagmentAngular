export class contact{
    firstname?:string;
    lastname?:string;
    phonenumber?:number;
    city?:string;
    id!:number;

}

export class signup{
    name?:string;
    email?:string;
    password?:string
}

export class login{
    email?:string;
    password?:string;
}

export class contactus{
    email?:string;
    name?:string;
    message?:string;
    id!:number;
}
export class adminsignup{
    name?:string;
    email?:string;
    password?:string;
    id!:number;
}
export class adminlogin{
    email?:string;
    password?:string;
}